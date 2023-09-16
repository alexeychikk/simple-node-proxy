const httpProxy = require("http-proxy");

const server = httpProxy.createProxyServer({
	target: process.env.PROXY_TARGET,
	changeOrigin: true,
	preserveHeaderKeyCase: true,
	autoRewrite: true,
	followRedirects: true,
	secure: false,
	ws: true,
});

server.listen(+process.env.PORT);

console.log(`Server is listening on port ${process.env.PORT}`);
