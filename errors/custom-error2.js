class CustomAPIError2 extends Error {
  constructor(message, statusCode) {
    super(message)
  }
}

module.exports = CustomAPIError2
