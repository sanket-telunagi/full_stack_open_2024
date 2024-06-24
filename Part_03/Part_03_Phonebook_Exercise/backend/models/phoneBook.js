require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const url = process.env.MONGODB_URI;
console.log(`connecting to ${url}`);

mongoose
  .connect(url)
  .then((result) => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log("error connecting to mongodb", err.message);
  });

const phoneBookSchema = new mongoose.Schema({
  name: String,
  number: String,
});

phoneBookSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// const phoneBook = mongoose.model("Phone_Entry", phoneBookSchema);
// console.log(phoneBook);
// phoneBook.find({}).then((persons) => {
//   console.table(persons);
// });

module.exports = mongoose.model("Phone_Entry", phoneBookSchema);

// var name = "";
// var number = "";

// if (process.argv.length > 3) {
//   name = process.argv[3];
//   number = process.argv[4];
// }

// phoneBook.save().then((result) => {
//   result.forEach((phone) => {
//     console.log(`${phone.name} ${phone.number}`);
//   });
// });
