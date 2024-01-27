import Contact from "../models/contactModel.js";
export const saveContact= async (req,res,next)=>{
  const {name,email,message} =  req.body ;
try{
    const contactSaved  =  await Contact.create({ name,email,message });
  if(contactSaved){
      return res.json({status:true,msg:"Contact saved  successfully"})
  }else{
      return res.json({status:false,msg:"some thing went wrong"})

  }
}catch(error){
    return res.json({status:false,msg:"some thing went wrong"})
}
}
export const allContacts = async (req,res,next)=>{
  const allContactsArray  =  await Contact.find({ });
  return res.json({allContacts:allContactsArray})

}

export const deleteContact = async (req,res,next)=>{
  const {contactId} =  req.body
  try{
    const contactDeleted  =  await Contact.deleteOne({ _id: contactId });
    if(!contactDeleted){
      return res.json({status:false,msg:"Data not deleted"});
    }else{
      return res.json({status:true,msg:"Data  deleted successfully"});
    }
  }catch(error){
    return res.json({status:false,msg:"Data not deleted"});
  }
}


export const paginationContact = async (req,res,next)=>{

  let page = parseInt(req.query.page);
  let limit = parseInt(req.query.limit);
  let skip = (page - 1) * limit;
  // let endIndex = page * limit;
  // let result = data.slice(startIndex, endIndex);
  try{


  let result  =  await  Contact.find().skip(skip).limit(limit);
  let totalContacts = await Contact.countDocuments();
  
  
  

  return res.json({result,totalContacts});
  }catch(error){
    return res.json([])
  }
  
  
  
  

    

  
}