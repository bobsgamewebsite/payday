export async function onRequest(context) {
  const url = new URL(context.request.url);
  const response = await context.env["payday-proxy"].fetch(
    "https://payday-proxy.paydayanalyst.workers.dev" + url.pathname,
    {
      method: "POST",
      headers: context.request.headers,
      body: await context.request.text(),
    }
  );
  return response;
}
