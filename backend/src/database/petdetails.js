import mongoose from "mongoose";

const mongoose = require('mongoose');

const petDetailsSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
    },
  pet_name: {
    type: String,
    required: true
  },
  species: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },

  size:{type: String},

  gender: {
    type: String,
    required: true
  },
  birthdate: {
    type: Date,
    required: true
  },
  neutered: {
    type: Boolean,
    default: false
  },
  vaccinated: {
    type: Boolean,
    default: false
  },
  friendly_with_dogs: {
    type: Boolean,
    default: true
  },
  friendly_with_cats: {
    type: Boolean,
    default: true
  },
  friendly_with_kids_under_10: {
    type: Boolean,
    default: true
  },
  friendly_with_kids_over_10: {
    type: Boolean,
    default: true
  },
  microchipped: {
    type: Boolean,
    default: false
  },
  purebred: {
    type: Boolean,
    default: false
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

const Pet = mongoose.model('PetDetails', petDetailsSchema);

module.exports = Pet;
