const express = require("express");
const routes = require('../routes/v1')

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.midlwares();
    this.router()
  }

  midlwares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  router() {
    this.app.use('/', routes)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Corriendo en el puerto ' + this.port);
    })
  }

}

module.exports = Server;