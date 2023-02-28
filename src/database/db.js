import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const connectDatabse = () => {
  mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.6rzjcgg.mongodb.net/test",
    {
      // useNewUrlParse: true,
      useUnifiedTopology: true
    }
  )
    .then(console.log("db connected"))
    .catch((err) => console.log(err));
};

export default { connectDatabse };