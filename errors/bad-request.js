const CustomAPIError2 = require('../errors/custom-error2')
const {StatusCodes} = require('http-status-codes')

class BadRequest extends CustomAPIError2  {
    constructor(message) {
      super(message)
      this.statusCode = StatusCodes.BAD_REQUEST
    }
  }
  
  module.exports = BadRequest