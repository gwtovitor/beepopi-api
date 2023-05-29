import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    require: true
  },
  username: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    select: false,
    require: true
  },
  paisResidencia: {
    type: String,
    require: true
  },
  dataNascimento: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
});

const User = mongoose.model("User", UserSchema);

export default User;