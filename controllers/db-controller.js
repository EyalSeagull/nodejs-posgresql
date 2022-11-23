const quotes = require('../services/quotes');

async function getMultiple(req, res) {
  try {
    res.json(await quotes.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting quotes `, err.message);
    res.status(err.statusCode || 500).json({ 'message': err.message });
  }
};

async function create(req, res) {
  try {
    res.json(await quotes.create(req.body));
  } catch (err) {
    console.error(`Error while posting quotes `, err.message);
    res.status(err.statusCode || 500).json({ 'message': err.message });
  }
}

module.exports = {
  getMultiple,
  create
};
