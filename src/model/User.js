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
  dataNascimento: {
    type: Date,
  },
  paisResidencia: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
});

const User = mongoose.model("User", UserSchema);

export default User;