export async function onRequest(context) {
  if (!context.env["payday-proxy"]) {
    return new Response("MISSING_BINDING", { status: 500 });
  }
  return context.env["payday-proxy"].fetch(context.request);
}