const quotes = require('./quotes.json');

const service = {};

service.getAll = () => Promise.resolve(quotes);

export default service;
