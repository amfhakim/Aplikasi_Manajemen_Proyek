const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProyekSchema = new Schema({
    nama: String,
    alamat: String,
    client_id: String,
    karyawan_id: String,
});

module.exports = mongoose.model('Proyek', ProyekSchema);