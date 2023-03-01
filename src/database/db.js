import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("strictQuery", false);

const connectDatabase = () => {
  mongoose.connect(
    process.env.DB_URI,
    {
      // useNewUrlParse: true,
      useUnifiedTopology: true
    }
  )
    .then(console.log("db connected"))
    .catch((err) => console.log(err));
};

export default { connectDatabase };