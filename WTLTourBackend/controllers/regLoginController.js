/* eslint-disable no-undef */
const User = require('../models/regLoginModel');
const bcrypt = require('bcryptjs');
// eslint-disable-next-line no-unused-vars
const jwt = require('jsonwebtoken');

// Register a new user
const registerUser = async (req, res) => {
  const { name, phone, email, password } = req.body;

  if (!name || !phone || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already registered' });
    }

    // Create new user
    const newUser = new User({ name, phone, email, password });
    await newUser.save();

    res.status(201).json({
      message: 'User registered successfully',
      userId: newUser._id,
      name: newUser.name,
      phone: newUser.phone,
      email: newUser.email,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

// Login user
const loginUser = async (req, res) => {
    console.log('✅ Login API Called'); // Debugging log
  
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      res.status(200).json({
        message: 'Login successful',
        userId: user._id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        role: user.role
      });
    } catch (error) {
      res.status(500).json({ message: 'Error logging in', error });
    }
  };
  

module.exports = { registerUser, loginUser};
