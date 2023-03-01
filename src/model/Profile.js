import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  usuario: {
    type: String,
    required: true
  },
  nome: {
    type: String
  },
  bio: {
    type: String
  },
  foto: {
    type: String
  },
  banner: {
    type: String
  },
  seguidores: {
    type: Array
  },
  assinantes: {
    type: Array
  },
  redes: {
    type: Array
  },
  posts: {
    type: Array
  }
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;