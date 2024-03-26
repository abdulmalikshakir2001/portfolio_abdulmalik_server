import Project from "../models/projectModel.js";

export  const  uploadProject = async (req,res,next) =>{
    const  {title,projectUrl} = req.body;

     if(!req.file) {
        return res.json({status:false,msg:"some thing went wrong"});
     }

    
    const {filename} = req.file;
    // console.log(filename)
    const projectUpload  =  await Project.create({ title,image:filename ,project_url:projectUrl});
    if(projectUpload){
        return res.json({status:true,msg:"project uploaded successfully"})
    }else{
        return res.json({status:false,msg:"some thing went wrong"})


    }
}

export const allProjects = async (req,res,next)=>{
    const allProjects  =  await Project.find({});
    return res.json({allProjects})
    
}