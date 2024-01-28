
import  express from "express"
import dotenv from 'dotenv';
import userRouter from "./routes/userRouter.js"
import projectRouter from "./routes/projectRouter.js"
import contactRouter from "./routes/contactRouter.js"
import mongodbConnect from "./utility_functions/mongodbConnect.js";
import cookieParser   from  'cookie-parser';
import { uploadImage } from "./utility_functions/uploadImage.js";
import path from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from "cors";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);





const app = express()
dotenv.config();
const port  =  process.env.PORT
mongodbConnect();
// routes and middlewares start
app.use(express.json());
app.use(cookieParser());


app.use(cors());


app.use('/api/auth',userRouter)
// upload project image 
const upload =  uploadImage();
app.use('/api/project',upload.single('image'), projectRouter)
app.use('/api/files',express.static(path.join(__dirname,'/uploads')))
app.use('/api/contact', contactRouter)
// routes and middlewares end

// data table start 


// data table end
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});



