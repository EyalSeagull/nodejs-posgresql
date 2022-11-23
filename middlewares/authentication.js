async function authenticationMiddleware(req, res, next) {
  console.log(`authenticationMiddleware`);
  next();
}

module.exports = authenticationMiddleware;
