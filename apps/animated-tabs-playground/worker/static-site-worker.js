const notFoundStatuses = new Set([404, 405]);

function withNoCache(response) {
    const headers = new Headers(response.headers);
    headers.set("cache-control", "no-store");

    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers
    });
}

export default {
    async fetch(request, env) {
        const assetResponse = await env.ASSETS.fetch(request);

        if (!notFoundStatuses.has(assetResponse.status)) {
            return withNoCache(assetResponse);
        }

        const url = new URL(request.url);
        const acceptsHtml = request.headers.get("accept")?.includes("text/html");
        const isAssetLikePath = /\.[a-z0-9]+$/i.test(url.pathname);

        if (!acceptsHtml || isAssetLikePath) {
            return assetResponse;
        }

        const fallbackRequest = new Request(new URL("/index.html", request.url), request);
        const fallbackResponse = await env.ASSETS.fetch(fallbackRequest);

        return withNoCache(fallbackResponse);
    }
};
