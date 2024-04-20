import Contact from "../models/contactModel.js";
export const saveContact= async (req,res,next)=>{
  const {name,company,email,phone_number,message} =  req.body ;
  console.log(name)
try{
    const contactSaved  =  await Contact.create({ name,company,email,phone_number,message });
  if(contactSaved){
      return res.json({status:true,msg:"Contact saved  successfully"})
  }else{
      return res.json({status:false,msg:"some thing went wrong"})

  }
}catch(error){
    return res.json({status:false,msg:"some thing went wrong"})
}
}
