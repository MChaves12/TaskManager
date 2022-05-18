const notFound = (request, response) =>
  response.status(404).send('Rota Inexistente');

module.exports = notFound;
