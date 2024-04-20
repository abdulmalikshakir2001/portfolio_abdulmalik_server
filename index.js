import express from 'express';
import bodyParser from 'body-parser'; 
import dotenv from 'dotenv';
import contactRouter from "./routes/contactRouter.js"
import mongodbConnect from "./utility_functions/mongodbConnect.js";
import cors from 'cors';

const app = express();
dotenv.config();
const port = process.env.PORT || 3001; 
mongodbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});
app.use('/api/contact', contactRouter)


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
export default app;