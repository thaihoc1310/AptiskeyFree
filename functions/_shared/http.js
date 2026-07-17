export function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      ...headers,
    },
  });
}

export function methodNotAllowed(allowed) {
  return json(
    { error: 'method_not_allowed', message: 'Phương thức không được hỗ trợ.' },
    405,
    { Allow: allowed.join(', ') },
  );
}

export async function readJson(request, maxBytes = 16_384) {
  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > maxBytes) throw new HttpError(413, 'payload_too_large', 'Dữ liệu gửi lên quá lớn.');

  const contentType = request.headers.get('content-type') || '';
  if (!contentType.toLowerCase().includes('application/json')) {
    throw new HttpError(415, 'unsupported_media_type', 'Yêu cầu phải dùng application/json.');
  }

  try {
    return await request.json();
  } catch {
    throw new HttpError(400, 'invalid_json', 'Dữ liệu JSON không hợp lệ.');
  }
}

export class HttpError extends Error {
  constructor(status, code, message) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
    this.code = code;
  }
}

export function errorResponse(error) {
  if (error instanceof HttpError) {
    return json({ error: error.code, message: error.message }, error.status);
  }
  console.error(error);
  return json({ error: 'internal_error', message: 'Máy chủ đang gặp lỗi. Vui lòng thử lại.' }, 500);
}
