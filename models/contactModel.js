import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2, 
    maxlength: 50,
  },
  company: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    match: /^\S+@\S+\.\S+$/
  },
  phone_number: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        if (!value) { 
          return true;
        }
        return /^\d+$/.test(value); 
      },
      message: 'Invalid phone number. Please enter digits only.',
    },
  },
  message: {
    type: String,
    
  },
}, {
  timestamps: true
});
const Contact = mongoose.model('Contact', contactSchema);
export default Contact;
