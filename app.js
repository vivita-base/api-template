const {EnvironmentEnum} = require("./common/env");
const PackageJson = require("./package.json");

// Simulate real API calls
const delayResponse = 250; // milliseconds

module.exports = (async () => {
  const {Config} = await require("./common/config");

  // Handlers
  const Test = await require("./handlers/test");

  // ==============================================
  // Base setup
  // ==============================================

  process.env.TZ = "Etc/GMT";

  const express = require("express");
  const app = express();
  const server = require('http').createServer(app);
  const WSServer = require("ws").Server;
  wss = new WSServer({server: server,});
  const port = process.env.port || 3000;

  const bodyParser = require('body-parser');
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:1500000}));

  app.use(require("express-useragent").express());

  // Cors
  app.use(async (req,res,next) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, auth-uid, auth-token,");
    res.header("Access-Control-Allow-Methods","PATCH, POST, GET, DELETE, OPTIONS");
    next();
  });

  // ==============================================
  // Auth
  // ==============================================

  const normRoute = (req, res, next) => {
    response(req, res, next(req));
  };

  // ===============================================================
  // Routes
  // ===============================================================

  app.get("/", (req,res) => {res.send(
    "<html><head></head><body>API is running <br>"+
      "App: "+Config.FrontEnd.AppName+"<br>"+
      "Env: "+Config.Env+"<br>"+
      "Version: "+PackageJson.version+"<br>"+
    "</body></html>"
  );});

  app.get('/test', (req,res) => { normRoute(req,res,Test.get) });
  app.post('/test', (req,res) => { normRoute(req,res,Test.post) });
  app.patch('/test', (req,res) => { normRoute(req,res,Test.patch) });
  app.delete('/test', (req,res) => { normRoute(req,res,Test.delete) });


  // ==============================================
  // Response type
  // ==============================================

  const response = async (req, res, obj) => {
    await obj;

    Promise.resolve(obj).then((val) => {
      if (Config.Env === EnvironmentEnum.Local && delayResponse >= 1) {
        setTimeout(() => {
          resume(req, res, val);
        }, delayResponse);
        return true;
      }
      resume(req, res, val);
    });
  };

  const resume = (req, res, obj) => {
    obj = (obj === undefined)?{}:obj;

    let status = obj.status !== undefined ? obj.status : 200;
    let json = {
      err: obj.err,
      res: obj.res,
    };

    res.status(status).json(json);
  };

  // ==============================================
  // server.js starts the server
  // ==============================================
  server.listen(process.env.PORT || port, () => {
    console.log(Config.FrontEnd.AppName+` Listening on port:${process.env.PORT || port} Env:${Config.Env}`);
  });
})();
