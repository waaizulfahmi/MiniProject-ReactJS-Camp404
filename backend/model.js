const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ShoesSchema = new Schema(
    {
        nama : {type: String, required: true},
        jumlah : {type: Number, required: true},
        harga : {type: Number, required: true},

    }, 
    { collection : "koleksiSepatu"}
);

module.exports = mongoose.model("SepatuModel", ShoesSchema);