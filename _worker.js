export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api")) {
      return env.payday-proxy.fetch(request);
    }

    return env.ASSETS.fetch(request);
  }
};
