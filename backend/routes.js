const akses = require("express").Router();
const SepatuModel = require("./model.js");

akses.route("/").get((req, res) => {
    SepatuModel.find()
    .then((shoes) => res.status(200).json(shoes))
    .catch((error) => res.status(400).json(error.message));
});

akses.route("/delete/:id").delete((req, res) => {
    SepatuModel.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Data Sepatu Berhasil Dihapus"))
    .catch((error) => res.status(400).json(error.message))
});

akses.route("/update/:id").put((req, res) => {
    SepatuModel.findByIdAndUpdate(req.params.id, req.body, {new : true})
    .then((updatedShoes) => res.status(200).json(updatedShoes))
    .catch((error) => res.status(400).json(error.message));
});

akses.route("/add").post((req, res ) => {
    SepatuModel.create(req.body)
    .then((createdShoes) => res.status(200).json(createdShoes))
    .catch((error) => res.status(400).json(error.message));
})

module.exports = akses;