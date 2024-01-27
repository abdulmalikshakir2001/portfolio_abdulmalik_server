import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  password: {
    type: String,
    default:"adminAsmai@2001"
  },

}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);
export default User;
