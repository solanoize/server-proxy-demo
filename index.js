const express = require("express");

const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

const PORT = 3200;
const HOST = "localhost";
const TARGET = "https://2nwhkl7s-3000.asse.devtunnels.ms";

app.use(
  "/api",
  createProxyMiddleware({
    target: TARGET,
    changeOrigin: true,
    pathRewrite: {
      [`^/api`]: "",
    },
  })
);

app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
