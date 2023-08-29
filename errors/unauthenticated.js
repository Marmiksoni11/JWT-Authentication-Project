const CustomAPIError2 = require('../errors/custom-error2')
const {StatusCodes} = require('http-status-codes')

class UnauthenticatedError extends CustomAPIError2  {
    constructor(message) {
      super(message)
      this.statusCode = StatusCodes.UNAUTHORIZED
    }
  }
  
  module.exports = UnauthenticatedError