const mongoose = require("mongoose");

if (process.argv.lengh < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://telunagisanket:${password}@fso-cluster0.culetj5.mongodb.net/?retryWrites=true&w=majority&appName=FSO-Cluster0`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const phoneSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Phone_Entry = mongoose.model("Phone_Entry", phoneSchema);

const name = "";
const number = "";
if (process.argv.length > 3) {
  name = process.argv[3];
  number = process.argv[4];
}

const phone = new Phone_Entry({
  name: name,
  number: number,
});

phone.save().then((result) => {
  // console.log(result);
  console.log(`added ${result.name} number ${result.number} to phonebook`);
  mongoose.connection.close();
});
//
// console.log("phonebook:");
// Phone_Entry.find({}).then((result) => {
//   result.forEach((phone) => {
//     console.log(`${phone.name} ${phone.number}`);
//   });
//   mongoose.connection.close();
// });
