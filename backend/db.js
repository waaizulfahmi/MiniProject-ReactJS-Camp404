const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db_sepatu");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Koneksi Database Gagal..."));

db.once("open", () => {
    console.log("Koneksi berhasil...");
})