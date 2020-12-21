const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    nama: String,
    alamat: String,
    no_kontak: String,
    email: String,
});

module.exports = mongoose.model('Client', ClientSchema);