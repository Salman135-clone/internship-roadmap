const winston = require('winston');

const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.errors({ stack: true }),
        winston.format.json(),
        winston.format.prettyPrint()
    ),
    transports: [
        new winston.transports.Console()
    ],
});

module.exports = logger;