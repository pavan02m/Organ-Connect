const ehrModel = require("../models/ehrs");
const userModel = require("../models/users");
const bcrypt = require("bcryptjs"); 
const alert = require('alert');
const schedule=require("node-schedule");
const { sendmail } = require("../config/mail")

class User {

  async getAllUser(req, res) {
    try {
      let Users = await userModel
        .find({})
        .populate("user", "name email")
        .sort({ _id: -1 });
      if (Users) {
        return res.json({ Users });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async getSingleUser(req, res) {
    let { uId } = req.body;
    if (!uId) {
      return res.json({ error: "All filled must be required" });
    } else {
      try {
        let User = await userModel
          .findById(uId)
          .select("name email phoneNumber age gender blood_group address organ ehrNo userImage updatedAt createdAt");
        if (User) {
          return res.json({ User });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  async postAddUser(req, res) {
    let { allProduct, user, amount, transactionId, address, phone } = req.body;
    if (
      !allProduct ||
      !user ||
      !amount ||
      !transactionId ||
      !address ||
      !phone
    ) {
      return res.json({ message: "All filled must be required" });
    } else {
      try {
        let newUser = new userModel({
          allProduct,
          user,
          amount,
          transactionId,
          address,
          phone,
        });
        let save = await newUser.save();
        if (save) {
          return res.json({ success: "User created successfully" });
        }
      } catch (err) {
        return res.json({ error: error });
      }
    }
  }
  async postEditUser(req, res) {
    let { uId, name, phoneNumber, age, address, organ, blood_group } = req.body;
    if (!uId || !name || !phoneNumber || !age || !address || !organ || !blood_group) {
      return res.json({ message: "All filled must be required" })
    } else {
      let user = await userModel.findById(uId).select("ehrNo email updatedAt name");

      const isValid = await ehrModel.findOne({ehr_no : user.ehrNo});

      if(isValid.alcoholic == true){

        console.log("error while donating");
        let date=user.updatedAt
        schedule.scheduleJob("*/10 * * * * *",()=>{
            sendmail(["Medical", user.name, user.email]);
            console.log("hello",new Date().toString())
        })
        alert("You cant donate organ")
        return res.send({err : "You are not allowed to donate"});
      }

      let currentUser = userModel.findByIdAndUpdate(uId, {
        name: name,
        phoneNumber: phoneNumber,
        age: age,
        address: address,
        organ: organ,
        blood_group: blood_group,
        isDonar: true,
        updatedAt: Date.now(),
      });
      

      currentUser.exec((err, result) => {
        if (err) console.log(err);
        return res.json({ success: "User updated successfully" });
      });
    }
  }

  async getDeleteUser(req, res) {
    let { oId, status } = req.body;
    if (!oId || !status) {
      return res.json({ message: "All filled must be required" });
    } else {
      let currentUser = userModel.findByIdAndUpdate(oId, {
        status: status,
        updatedAt: Date.now(),
      });
      currentUser.exec((err, result) => {
        if (err) console.log(err);
        return res.json({ success: "User updated successfully" });
      });
    }
  }

  async changePassword(req, res) {
    let { uId, oldPassword, newPassword } = req.body;
    if (!uId || !oldPassword || !newPassword) {
      return res.json({ message: "All filled must be required" });
    } else {
      const data = await userModel.findOne({ _id: uId });
      if (!data) {
        return res.json({
          error: "Invalid user",
        });
      } else {
        const oldPassCheck = await bcrypt.compare(oldPassword, data.password);
        if (oldPassCheck) {
          newPassword = bcrypt.hashSync(newPassword, 10);
          let passChange = userModel.findByIdAndUpdate(uId, {
            password: newPassword,
          });
          passChange.exec((err, result) => {
            if (err) console.log(err);
            return res.json({ success: "Password updated successfully" });
          });
        } else {
          return res.json({
            error: "Your old password is wrong!!",
          });
        }
      }
    }
  }
}

const ordersController = new User();
module.exports = ordersController;
