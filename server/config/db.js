const mongoose = require("mongoose");
try {
  await mongoose.connect("mongodb+srv://dbAdmin:rMhSiXkrdxTgoLxX@dbprac.x8dctco.mongodb.net/DonationBank?retryWrites=true&w=majority");
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
