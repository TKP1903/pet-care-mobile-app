import { User } from '../database/user.js';

//POST: REGISTERING THE USER
export const registerUser = async (req, res) => {
  const { fullName, email, password ,agreedToRules,receiveNewsletter} = req.body;

  try {
    const user = new User({
      fullName,
      email,
      password,
      agreedToRules,
      receiveNewsletter,
      // gender,
      // phone
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

