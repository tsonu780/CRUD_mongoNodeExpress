const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    ClientId: { type: String, required: true },
    AgencyId: {type:Number, ref:"Agent", required:true, default:null},
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    PhoneNumber: { type: String, required: true },
    TotalBill: { type: String, required: true },
})

module.exports = mongoose.model("Client", clientSchema);
