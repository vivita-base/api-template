
// Local - Runs on your local machine
// Develop - Production Mocked Server. Non Production settings (3rd party)
// Release - Exact Replica of Production but on non-user facing domain.
// Production - (Master) 

const EnvironmentEnum = {
  Local: "Local",
  LocalSandbox: "LocalSandbox",
  Develop: "Develop",
  DevelopSandbox: "DevelopSandbox",
  Release: "Release",
  ReleaseSandbox: "ReleaseSandbox",
  Production: "Production",
  ProductionSandbox: "ProductionSandbox",
};

const SandboxEnvArr = [
  EnvironmentEnum.LocalSandbox,
  EnvironmentEnum.DevelopSandbox,
  EnvironmentEnum.ReleaseSandbox,
  EnvironmentEnum.ProductionSandbox,
];

module.exports = {EnvironmentEnum,SandboxEnvArr,};