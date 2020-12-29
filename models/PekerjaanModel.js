const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PekerjaanSchema = new Schema({
	nama_pekerjaan: String,
	tanggal_mulai: String,
    tanggal_selesai: String,
	pj_id: String,
	proyek_id: String
});

module.exports = mongoose.model('Pekerjaan', PekerjaanSchema);