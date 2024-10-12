const jwt=require('jsonwebtoken')

 const genneratetoken =(email)=>{
    const token=jwt.sign({email},process.env.JWT_SECRET,{
        expiresIn:'1d'
      })
      return token
}
module.exports={genneratetoken}