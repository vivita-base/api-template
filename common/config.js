`use strict`;
const { Environment, EnvironmentEnum, SandboxEnvArr } = require("./env");
let Keys = require("./keys-temp");
try {Keys = require("./keys");} catch (e) {} // load Keys if the file is here


const Config = {
  BackEnd: {
    Url: "http://localhost:3082",
  },
  Database: {
    Main:{
      Host: Keys.Database.Main.Host,
      Name: Keys.Database.Main.Name,
      Username: Keys.Database.Main.Username,
      Password: Keys.Database.Main.Password,
      Port: Keys.Database.Main.Port,
    },
    Files:{
      Host: Keys.Database.Files.Host,
      Name: Keys.Database.Files.Name,
      Username: Keys.Database.Files.Username,
      Password: Keys.Database.Files.Password,
      Port: Keys.Database.Files.Port,
    },
  },
  Env: Environment,
  FrontEnd: {
    AppName: "VIVITA BASE Example",
    Url: "http://localhost:3030",
    AdminPanelUrl: "http://localhost:3032",
  },
};


module.exports = (async () => {
  return { 
    Config, 
    EnvironmentEnum, 
  };
})();

