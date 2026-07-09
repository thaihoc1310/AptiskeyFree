import { defineConfig } from 'vite';

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
  }
});
