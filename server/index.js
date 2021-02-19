const awsServerlessExpress = require("aws-serverless-express");
const express = require("express");
const { vite, Builder } = require("vite");
const { customDomainAdaptorMiddleware } = require("./middleware");
const app = express();

// Import and Set vite.js options
let config = require("../vite.config.js");
config.dev = false;

async function initApp() {
  // Init vite.js
  const vite = new vite(config);

  const { host, port } = vite.options.server;

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(vite);
    await builder.build();
  } else {
    await vite.ready();
  }

  // Give vite middleware to express
  app.use(customDomainAdaptorMiddleware);
  app.use(vite.render);

  return app;
}

var server = undefined;
const binaryMimeTypes = [
  "application/javascript",
  "application/json",
  "application/octet-stream",
  "application/xml",
  "font/eot",
  "font/opentype",
  "font/otf",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "text/comma-separated-values",
  "text/css",
  "text/html",
  "text/javascript",
  "text/plain",
  "text/text",
  "text/xml",
];

exports.handler = (event, context) => {
  initApp().then((app) => {
    if (server === undefined) {
      server = awsServerlessExpress.createServer(app, null, binaryMimeTypes);
    }
    awsServerlessExpress.proxy(server, event, context);
  });
};
