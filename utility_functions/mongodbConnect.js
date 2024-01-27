import mongoose from 'mongoose';
export default function mongodbConnect(){
    mongoose.connect(process.env.MONGODB_CONNECTION_URL )
  .then(() => {
    console.log('MongoDB connected...');
  })
  .catch((err) => {
    console.log('Error in DB connection: ' + err);
  });
}