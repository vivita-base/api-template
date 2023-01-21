
const {EnvironmentEnum,SandboxEnvArr} = require('../enums/environment');

let env = EnvironmentEnum.Local;

if(process.env.setEnv){
  if(process.env.setEnv in EnvironmentEnum){
    env = EnvironmentEnum[process.env.setEnv];
  }
}

const Environment = env;

module.exports = {Environment,EnvironmentEnum,SandboxEnvArr};