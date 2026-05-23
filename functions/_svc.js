export async function onRequest(context) {
  return context.env.paydayProxy.fetch(context.request);
}