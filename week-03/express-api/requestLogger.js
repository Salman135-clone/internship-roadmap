const expressWinston = require('express-winston');

const logger = require('../express-api/logger');

const requestLogger = expressWinston.logger({
    winstonInstance: logger,
    requestWhitelist: ["body", "query", "params"],
    responseWhitelist: ["statusCode", "body"],
})
module.exports = requestLogger;