import mongoose from "mongoose";



const petDetailsSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
   
    },
  pet_name: {
    type: String,
  
  },
  species: {
    type: String,
   
  },
  breed: {
    type: String,
   
  },

  size:{type: String},

  gender: {
    type: String,
   
  },
  birthdate: {
    type: Date,
   
  },
  neutered: {
    type: Boolean,
   
  },
  vaccinated: {
    type: Boolean,
   
  },
  friendly_with_dogs: {
    type: Boolean,
   
  },
  friendly_with_cats: {
    type: Boolean,
  
  },
  friendly_with_kids_under_10: {
    type: Boolean,
  
  },
  friendly_with_kids_over_10: {
    type: Boolean,
   
  },
  microchipped: {
    type: Boolean,
  
  },
  purebred: {
    type: Boolean,
    
  },

  nursery_name:{ type: String},
 
  created_at: {
    type: Date,
    default: Date.now,
    required: true
  },
  updated_at: {
    type: Date,
    default: Date.now,
    required: true
  },
});


export const PetDetails = mongoose.model('PetDetails', petDetailsSchema);