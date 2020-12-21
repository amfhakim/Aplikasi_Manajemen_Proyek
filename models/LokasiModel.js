const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LokasiSchema = new Schema({
    alamat: String,
    koordinat: String,
    proyek_id: String,

});

module.exports = mongoose.model('Lokasi', LokasiSchema);