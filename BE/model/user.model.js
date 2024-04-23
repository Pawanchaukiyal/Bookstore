import mongoose from "mongoose";


// Define the user schema
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a model using the user schema
const User = mongoose.model('User', userSchema);

// Export the User model
export default User;
