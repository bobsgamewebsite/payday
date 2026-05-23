export async function onRequest(context) {
  return context.env["payday-proxy"].fetch(context.request);
}
