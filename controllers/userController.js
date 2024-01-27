import User from '../models/userModel.js';
import joseToken from '../utility_functions/joseToken.js';


export  const authorizeUser = async (req,res,next)=>{
    try {
        // Find user by username
        const user = await User.findOne({ password: req.body.password });
        if (!user) {
          return res.status(400).json({ message: 'User not found' });
        }
        // generating token  
        const jwt =  await joseToken('abdulmalikshakir2001',{password:user['password']},'2h');
        // generating token  
        res.cookie('authToken',jwt).json({ status:true,  user });
      } catch (err) {
        res.status(500).json({status:false,  message: err.message });
      }
}

export const saveContact= (req,res,next)=>{
  const {name,email,message} =  req.body ;

}