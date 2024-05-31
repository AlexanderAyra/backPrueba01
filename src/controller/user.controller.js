const { request, response } = require("express");

const getUsers = (req = request, res = response) => {
  res.send('Hola Mundo');
};

const postUsers = (req = request, res = response) => {
  res.send('hiciste un post');
  res.send('hiciste un post');
};

const putUsers = (req = request, res = response) => {
  res.send('hiciste un post');
};
module.exports = {
  getUsers,
};