const { request, response } = require("express");

const getUsers = (req = request, res = response) => {
  res.send('Hola Mundo');
};

module.exports = {
  getUsers,
};