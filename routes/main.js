const express = require("express")
const router = express.Router();

const {login,dashboard} = require("../controllers/mainControllers3")

const authMiddleware = require('../middleware/auth2')

router.route('/dashboard').get(authMiddleware, dashboard)

router.route('/login').post(login)


module.exports = router