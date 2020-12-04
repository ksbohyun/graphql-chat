import mongoose from "mongoose";
import Blog from "./model";
const uri =
  "mongodb+srv://matching:matching@matching.wafti.mongodb.net/matching?retryWrites=true&w=majority";
module.exports = () => {
  mongoose.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) console.error(err);
      console.log("DB connected");
    }
  );
  Blog;
};
