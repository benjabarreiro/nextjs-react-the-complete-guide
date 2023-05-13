const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        USERNAME: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD,
        CLUSTER: process.env.CLUSTER,
        DB: process.env.DB,
      },
    };
  }
  //env for production (here are the same than dev)
  return {
    env: {
      USERNAME: process.env.USERNAME,
      PASSWORD: process.env.PASSWORD,
      CLUSTER: process.env.CLUSTER,
      DB: process.env.DB,
    },
  };
};
