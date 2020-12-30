const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BarangPekerjaanSchema = new Schema({
    barang_id: String,
    jumlah: Number,
    pekerjaan_id: String,
    status: Boolean
});

module.exports = mongoose.model('BarangPekerjaan', BarangPekerjaanSchema);