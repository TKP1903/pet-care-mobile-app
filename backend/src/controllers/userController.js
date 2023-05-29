import { User } from '../database/user.js';
import {PetDetails} from '../database/petdetails.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//POST: REGISTERING THE USER
export const registerUser = async (req, res) => {
  const { fullName, email, password, agreedToRules, receiveNewsletter } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      fullName,
      email,
      password: hashedPassword,
      agreedToRules,
      receiveNewsletter,
    });
    await user.save();

    console.log('User saved:', user);
    res.status(200).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.log('Error saving user:', error);
    res.status(500).json({ error });
  }
};


//GET: GET ALL USER DETAILS
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.log('Error getting all users:', error);
    res.status(500).json({ error });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Validate password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email, id: user._id }, 'secret', { expiresIn: '1h' });

    res.status(200).json({ result: user, token });
    console.log("User logged in succesfully")
  } catch (error) {
    console.log('Error logging in user:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const addPetDetails=async(req,res) => {
  try {
    // create a new pet document using the request body
    const pet = new PetDetails({
      user_id: req.body.user_id,
      pet_name: req.body.pet_name,
      species: req.body.species,
      breed: req.body.breed,
      size: req.body.size,
      gender: req.body.gender,
      birthdate: req.body.birthdate,
      neutered: req.body.neutered,
      vaccinated: req.body.vaccinated,
      friendly_with_dogs: req.body.friendly_with_dogs,
      friendly_with_cats: req.body.friendly_with_cats,
      friendly_with_kids_under_10: req.body.friendly_with_kids_under_10,
      friendly_with_kids_over_10: req.body.friendly_with_kids_over_10,
      microchipped: req.body.microchipped,
      purebred: req.body.purebred,
      nursery_name: req.body.nursery_name
    });

    // save the pet document to the database
    const savedPet = await pet.save();

    // send the saved pet document as the response
    res.status(201).json(savedPet);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};