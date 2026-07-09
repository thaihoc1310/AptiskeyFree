import { defineConfig } from 'vite';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const execPromise = promisify(exec);

function getUpdatedFiles(dir, startTime, results = []) {
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getUpdatedFiles(filePath, startTime, results);
    } else {
      if (stat.mtimeMs >= startTime - 2000) { // 2s buffer
        results.push(filePath);
      }
    }
  }
  return results;
}

export default defineConfig({
  server: {
    proxy: {
      '/aptiskey-live': {
        target: 'https://aptiskey.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/aptiskey-live/, ''),
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('proxy error', err);
          });
        }
      }
    }
  },
  plugins: [
    {
      name: 'run-update-api',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url === '/api/run-update') {
            res.setHeader('Content-Type', 'application/json');
            try {
              const startTime = Date.now();
              console.log('Starting content update script via API...');
              
              const workspaceRoot = process.cwd();
              const scriptPath = path.join(workspaceRoot, 'update-content.sh');
              
              // Execute the update script
              const { stdout, stderr } = await execPromise(`bash "${scriptPath}"`);
              console.log('Update script completed.');
              if (stderr) console.warn('Script stderr:', stderr);
              
              // Scan for modified files
              const crawledDataDir = path.join(workspaceRoot, 'public', 'crawled_data');
              const files = getUpdatedFiles(crawledDataDir, startTime);
              
              // Format file paths relative to crawled_data folder
              const relativeFiles = files.map(f => path.relative(path.join(workspaceRoot, 'public'), f));
              
              res.end(JSON.stringify({
                success: true,
                count: relativeFiles.length,
                files: relativeFiles
              }));
            } catch (error) {
              console.error('Error running update script:', error);
              res.statusCode = 500;
              res.end(JSON.stringify({
                success: false,
                error: error.message
              }));
            }
            return;
          }
          next();
        });
      }
    }
  ]
});
