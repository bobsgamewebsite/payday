export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api")) {
      return env["payday-proxy"].fetch(
        "https://payday-proxy.paydayanalyst.workers.dev" + url.pathname,
        {
          method: "POST",
          headers: request.headers,
          body: await request.text(),
        }
      );
    }

    return env.ASSETS.fetch(request);
  }
};
