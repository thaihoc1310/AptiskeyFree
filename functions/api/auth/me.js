import { publicUser, requireUser } from '../../_shared/auth.js';
import { errorResponse, json, methodNotAllowed } from '../../_shared/http.js';

export async function onRequestGet({ request, env }) {
  try {
    const user = await requireUser(request, env);
    return json({ user: publicUser(user), csrfToken: user.csrfToken });
  } catch (error) {
    return errorResponse(error);
  }
}

export function onRequest() {
  return methodNotAllowed(['GET']);
}
