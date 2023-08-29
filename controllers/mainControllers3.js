
const JWT = require('jsonwebtoken')

const {BadRequestError} = require('../errors') //!  ../errors --same as--> ../errors/index.js

const login = async (req,res) => {
    const {username,password} = req.body


    if(!username || !password){
        throw new BadRequestError('Please provide email and Password')
    }

    const id = new Date().getDate()

    const token = JWT.sign( { id , username },process.env.JWT_SECRET,{expiresIn:'30d'} )
    
    res.status(200).json({msg:'user created',token})
}




const dashboard = async (req,res) => {

    const luckyNumber = Math.floor(Math.random()*100) 

    res.status(200).json({
         msg: `Hello ${req.user.username}`,
         secret : `here is your authorized data, and your lucky number is : ${luckyNumber}` 
        })

}

module.exports = { login, dashboard }