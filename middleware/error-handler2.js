
//! Err handler for custom err2 handlers bad request index js etc... 

const {CustomAPIError2} = require('../errors')
const {StatusCodes} = require('http-status-codes')

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError2) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Something went wrong try again later')
}

module.exports = errorHandlerMiddleware
