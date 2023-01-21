"use strict";

(async () => {
  // Server Setup
  const app = await require("./app.js");
  const server = require("http").createServer(app);
  const port = 3082;

  server.listen(process.env.PORT || port, () => {
    console.log(`Vivita Base https/wss is listening on port ${process.env.PORT || port}`);
  });
})();
