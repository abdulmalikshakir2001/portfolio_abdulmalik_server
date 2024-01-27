import fs from "fs";
import path from "path"
import multer  from "multer";

export const uploadImage = ()=>{
    const uploadFolder = './uploads';
// Ensure upload directory exists
fs.mkdirSync(uploadFolder, { recursive: true });
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, uploadFolder);
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });
return upload
}

// controller 
    // req.file
// front end 
    // const formData = new FormData();
    // formData.append('title', title);
    // formData.append('image', image);
    // also check fetchApiForm.tsx in utilites_function/  

