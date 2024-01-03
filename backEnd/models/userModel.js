import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true ,unique: true},
  password: {type: String, required: true},
  photo: {
    type: String,
    default: 'https://i.ibb.co/4pDNDk1/avatar.png'
  },
  phone: {type: String},
  bio: {
    type: String,
    default: 'bio'
  }
}, {
  timestamps: true
})


const User = mongoose.model('User', userSchema)
export default User