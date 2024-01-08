import mongoose from 'mongoose'

const User = mongoose.model(
  'User',
  new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
      },
      password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6
      },
      role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
      }
    },
    {
      timestamps: true
    }
  )
)

export default User
