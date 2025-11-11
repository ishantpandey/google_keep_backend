const jwt=require('jsonwebtoken')
require('dotenv').config()

const secret=process.env.JWT_SECRET
const signUser=(user)=>{
  
return jwt.sign({
     id:user._id,
     name:user.names,
    email:user.email,
    password:user.password
},secret)

}

const varifyUser=(token)=>{
  return jwt.verify(token,secret)   
}

module.exports={signUser,varifyUser}