
module.exports = (async() => {

  const Test = await require('../funcs/test');

  return {
    get: async (req) => {
      const d = {err: {code:0,message:""},res:{}}; let r,sql,vars;

      return d;
    },
    post: async (req) => {
      const d = {err: {code:0,message:""},res:{}}; let r,sql,vars;

      return d;
    },
    patch: async (req) => {
      const d = {err: {code:0,message:""},res:{}}; let r,sql,vars;

      return d;
    },
    delete: async (req) => {
      const d = {err: {code:0,message:""},res:{}}; let r,sql,vars;

      return d;
    },
  };
})();