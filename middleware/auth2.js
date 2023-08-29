
//! this is for the custom err1 next route main2 will be for customerr2

const JWT = require('jsonwebtoken')

const {UnauthenticatedError} = require('../errors') //!  ../errors --same as--> ../errors/index.js

const authenticationMiddleware = async (req,res,next) => {
    // console.log(req.headers.authorization)
    
    const authHeader = req.headers.authorization;
    
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnauthenticatedError('No token Provided') // 401 - Auth ERROR 
    }
    
    const token = authHeader.split(' ')[1] 

    try{
        const decoded = JWT.verify(token,process.env.JWT_SECRET)
        const {id,username} = decoded
        req.user = {id,username}
        next()
    }
    catch(err){
        throw new UnauthenticatedError('Not Authorized to Access this route')
    }

}

module.exports = authenticationMiddleware