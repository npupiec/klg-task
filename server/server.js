const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const companyData = require('../server/data/json/company.json');

server.get('/api/data', (req, res, next) => {
  res.status(200).send(companyData)
})

server.listen(3000, () => {
  console.log('JSON serve listening on port 3000')
})
