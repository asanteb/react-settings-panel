const http = require('http');
const webpack = require('webpack')
const config = require('./webpack.config')
const app = require('express')();
const server = http.createServer(app);
const compiler = webpack(config);
const PORT = 3021

const middleware = (app) => {
  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: config.output.publicPath
  }))
  app.use(require("webpack-hot-middleware")(compiler, { 
    path: "/__webpack_hmr",
    log: console.log,
    heartbeat: 10 * 1000  
  }))

  server.listen(PORT, () => {
    console.info(`Website is hosted on http://localhost:${PORT}`);
    console.info("\n ** Building webpack server. Please Wait! **\n")
  });

}
middleware(app)

//module.exports = middleware
