const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProyekSchema = new Schema({
    nama: String,
    alamat: String,
    budget: Number,
    tanggal_mulai: String,
    tanggal_selesai: String,
    client_id: String,
});

module.exports = mongoose.model('Proyek', ProyekSchema);