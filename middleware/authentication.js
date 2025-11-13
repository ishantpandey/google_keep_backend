const { varifyUser } = require("../service/auth");

async function restrictUser(req,res,next){
 const token=req.cookies?.tokens;
  if(!token) {return res.json({msg:"tokens not found"})}

 const user=varifyUser(token)

 if(!user) {return res.json({msg:"user not found"})}
 req.user=user

next()
} 

module.exports={restrictUser};