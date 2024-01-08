import User from './User.model'
import Key from './Key.model'

import mongoose from 'mongoose'
mongoose.Promise = global.Promise

const db: Database = {
  mongoose: mongoose,
  User: User,
  Key: Key
}

export default db
