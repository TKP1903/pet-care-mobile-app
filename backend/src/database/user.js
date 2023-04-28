import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
   
  },
  gender: {
    type: String,
   
  },
  email: {
    type: String,
    
  },
  password: {
    type: String,
   
  },
  agreedToRules: {
    type: Boolean,
 
  },
  receiveNewsletter: {
    type: Boolean,
    
  },
  phone: {
    type: String,
   
  },
  aboutMe: {
    type: String,
    
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});




//   userSchema.methods.updateProfile = async function (updates) {
//     try {
//       const user = await this.model('User').findByIdAndUpdate(
//         this._id,
//         updates,
//         { new: true }
//       );
//       return user;
//     } catch (error) {
//       console.error(error);
//       throw new Error('Failed to update profile');
//     }
//   };


export const User = mongoose.model('User', userSchema);

