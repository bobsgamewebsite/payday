export async function onRequest(context) {
  return context.env["WORKER_BINDING_NAME"].fetch(context.request);
}
