const loginService = require('../services/login');
const enums = require('../constants/enums');

const loginController = (req, res) => {
  if (req.method === enums.HTTP_METHODS.POST) {
    loginService.googleAuth();
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message: 'Login successful'
    }))
  } else {
    res.writeHead(405, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({
      message: 'HTTP method not supported'
    }));
  }
};

module.exports = loginController;