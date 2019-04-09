const loginController = require('../controllers/login');
const logoutController = require('../controllers/logout');

const routes = (req, res) => {
  console.log('INSIDE ROUTES');
  switch(req.url) {
    case '/auth/login':
      loginController(req, res);
      break;
    case '/auth/logout':
      logoutController(req, res);
      break;
    default:
      res.writeHead(404, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify({
        message: 'Not Found'
      }));
  }
};

module.exports = routes;