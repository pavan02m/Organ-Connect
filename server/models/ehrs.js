const mongoose = require("mongoose");

const ehrSchema = new mongoose.Schema({
    ehr_no : {
        type:String,
    },
    patient_name:{
        type : String,
    },
    allergies:{
        type:[String],
    },
    Family_medical_history:{
        type : [Object({
            condition:{
                type:String,
            },
            relationship :{
                type:String
            }
        })]
    },
    alcoholic:{
        type:Boolean
    },
    tobacco:{
        type:Boolean
    },
  },
  { timestamps: true }
);

const ehrModel = mongoose.model("ehrs",ehrSchema);
module.exports = ehrModel;