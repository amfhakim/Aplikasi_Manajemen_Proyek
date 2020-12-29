const graphql = require ('graphql');
const _ = require('lodash');
const path = require('path');
const Proyek = require('./models/ProyekModel')
const Divisi = require('./models/DivisiModel');
const Karyawan = require('./models/KaryawanModel');
const Akun = require('./models/AkunModel');
const Client = require('./models/ClientModel');
const Pekerjaan = require('./models/PekerjaanModel');
const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
	GraphQLList,
	GraphQLSchema,
	GraphQLNonNull,
} = graphql;

const ProyekType = new GraphQLObjectType({
	name: 'Proyek',
	fields: () => ({
		id: {type: GraphQLID},
		nama: {type:GraphQLString},
		alamat: {type: GraphQLString},
		budget: {type: GraphQLInt},
		tanggal_mulai: {type: GraphQLString},
		tanggal_selesai: {type: GraphQLString},
        client:{
            type: ClientType,
			resolve(parent,args){
                return Client.findById({_id: parent.client_id});
            }
		}
    })    
});

const DivisiType = new GraphQLObjectType({
	name: 'Divisi',
	fields: () => ({
		id: {type: GraphQLID},
		nama: {type:GraphQLString},
		karyawans:{
			type: new GraphQLList(KaryawanType),
			resolve(parent,args){
				return Karyawan.find({divisi_id: parent.id});
			}
		},
	})
});

const KaryawanType = new GraphQLObjectType({
	name: 'Karyawan',
	fields: () => ({
		id: {type: GraphQLID},
		nama: {type:GraphQLString},
		tanggal_lahir: {type:GraphQLString},
		jenis_kelamin: {type:GraphQLString},
		agama: {type:GraphQLString},
		tempat_lahir: {type:GraphQLString},
		alamat: {type:GraphQLString},
		no_kontak: {type:GraphQLString},
		email: {type:GraphQLString},
		jabatan: {type:GraphQLString},
		gaji: {type:GraphQLInt},
		divisi: {
			type: DivisiType,
			resolve(parent,args){
				return Divisi.findById(parent.divisi_id);
			}
		},
    })
});

const AkunType = new GraphQLObjectType({
	name: "Akun",
	fields: () => ({
		id: {type: GraphQLID},
		username: {type: GraphQLString},
		password: { type: GraphQLString},
		karyawan: {
			type: KaryawanType,
			resolve(parent,args){
				return Karyawan.findById(parent.karyawan_id);
			}
		},
	})
});

const ClientType = new GraphQLObjectType({
	name: "Client",
	fields: () => ({
		id: {type: GraphQLID},
		nama: {type: GraphQLString},
        alamat: { type: GraphQLString},
        no_kontak: { type: GraphQLString},
        email: { type: GraphQLString},
		proyeks: {
            type: new GraphQLList(ProyekType),
			resolve(parent,args){
				return Proyek.find({client_id: parent.id});
			}
		},
	})
});

const BarangType = new GraphQLObjectType({
	name: 'Barang',
	fields: () => ({
		id: {type: GraphQLID},
		nama_barang: {type:GraphQLString},
		jenis_barang: {type:GraphQLString},
		satuan: {type:GraphQLString},
		harga: {type: GraphQLInt},
	})
});

const PekerjaanType = new GraphQLObjectType({
	name: 'Pekerjaan',
	fields: () => ({
		id: {type: GraphQLID},
		nama_pekerjaan: {type:GraphQLString},
		tanggal_mulai: {type:GraphQLString},
		tanggal_selesai: {type:GraphQLString}, 
		pj_id: {
            type: KaryawanType,
			resolve(parent,args){
				return Karyawan.findById({_id: parent.pj_id});
			}
		},
		proyek: {
			type: ProyekType,
			resolve(parent,args){
				return Proyek.findById({_id: parent.proyek_id});
			}
		}
    })
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		proyek:{
			type: ProyekType,
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return Proyek.findById(args.id);
			}
        },
        proyeks:{
			type: new GraphQLList(ProyekType),
			resolve(parent,args){
				return Proyek.find({});
			}
		},
		client:{
			type: ClientType,
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return Client.findById(args.id);
			}
		},
		clients:{
			type: new GraphQLList(ClientType),
			resolve(parent,args){
				return Client.find({});
			}
        }, 
        karyawan:{
			type: KaryawanType,
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return Karyawan.findById(args.id);
			}
		},
		karyawans:{
			type: new GraphQLList(KaryawanType),
			resolve(parent,args){
				return Karyawan.find({});
			}
        }, 
        divisi:{
			type: DivisiType,
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return Divisi.findById(args.id);
			}
		},
		divisis:{
			type: new GraphQLList(DivisiType),
			resolve(parent,args){
				return Divisi.find({});
			}
        }, 
        akun:{
			type: AkunType,
			args: {
					username:{type:GraphQLString},
				 	password:{type:GraphQLString},
				  },
			resolve(parent,args){
				return Akun.findOne({username: args.username, password: args.password});
			}
		},
		akuns:{
			type: new GraphQLList(AkunType),
			resolve(parent,args){
				return Akun.find({});
			}
        }, 
		pekerjaan:{
			type: PekerjaanType,
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return Pekerjaan.findById(args.id);
			}
		},
		pekerjaans:{
			type: new GraphQLList(PekerjaanType),
			resolve(parent,args){
				return Pekerjaan.find({});
			}
		},
		barang:{
			type: BarangType,
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return Barang.findById(args.id);
			}
		},
		barangs:{
			type: new GraphQLList(BarangType),
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return Barang.find({});
			}
		}, 
    }
});

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addProyek:{
			type: ProyekType,
			args:{
				nama: {type: new GraphQLNonNull(GraphQLString)},
				alamat: {type: new GraphQLNonNull(GraphQLString)},
				budget: {type: new GraphQLNonNull(GraphQLInt)},
				tanggal_mulai: {type: new GraphQLNonNull(GraphQLString)},
				tanggal_selesai: {type: new GraphQLNonNull(GraphQLString)},
				client_id: {type: new GraphQLNonNull(GraphQLString)},
			},
			resolve(parent,args){
				let proyek = new Proyek({
					nama: args.nama,
					alamat: args.alamat,
					budget: args.budget,
					tanggal_mulai: args.tanggal_mulai,
					tanggal_selesai: args.tanggal_selesai,
					client_id: args.client_id,
				});
				return proyek.save();
			}
        },
        updateProyek:{
			type: ProyekType,
			args: {
				id:{type:GraphQLID},
				karyawan_id: {type: new GraphQLNonNull(GraphQLString)},
			},
			resolve(parent, args){
				return Proyek.findOneAndUpdate({_id: args.id}, {karyawan_id: args.karyawan_id})
			}
        },
        hapusProyek:{
			type: ProyekType,
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return Proyek.deleteOne({_id:args.id});
			}
        },
        
		addClient:{
			type: ClientType,
			args:{
				nama: {type: new GraphQLNonNull(GraphQLString)},
				alamat: {type: new GraphQLNonNull(GraphQLString)},
				email: {type: new GraphQLNonNull(GraphQLString)},
				no_kontak: {type: new GraphQLNonNull(GraphQLString)}
			},
			resolve(parent,args){
				let client = new Client({
					nama: args.nama,
					alamat: args.alamat,
					email: args.email,
					no_kontak: args.no_kontak
				});
				return client.save();
			}
        },
		hapusClient:{
			type: ClientType,
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return Client.deleteOne({_id:args.id});
			}
		},
		updateClient:{
			type: ClientType,
			args: {
				id:{type:GraphQLID},
				nama: {type: new GraphQLNonNull(GraphQLString)},
				alamat: {type: new GraphQLNonNull(GraphQLString)},
				email: {type: new GraphQLNonNull(GraphQLString)},
				no_kontak: {type: new GraphQLNonNull(GraphQLString)}
			},
			resolve(parent, args){
				return Client.findOneAndUpdate({_id: args.id}, {nama: args.nama, alamat:args.alamat, email:args.email, noTlp:args.no_kontak})
			}
		},
		addPekerjaan:{
			type: PekerjaanType,
			args:{
				nama_pekerjaan: {type: new GraphQLNonNull(GraphQLString)},
				tanggal_mulai: {type: new GraphQLNonNull(GraphQLString)},
				tanggal_selesai: {type: new GraphQLNonNull(GraphQLString)}, 
				pj_id: {type: new GraphQLNonNull(GraphQLString)},
				proyek_id: {type: new GraphQLNonNull(GraphQLString)}
			},
			resolve(parent,args){
				let pekerjaan = new Pekerjaan({
					nama_pekerjaan: args.nama_pekerjaan,
					tanggal_mulai: args.tanggal_mulai,
					tanggal_selesai: args.tanggal_selesai,
					pj_id: args.pj_id,
					proyek_id: args.proyek_id
				});
				return pekerjaan.save();
			}
        },
		hapusPekerjaan:{
			type: PekerjaanType,
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return Pekerjaan.deleteOne({_id:args.id});
			}
		},
		updatePekerjaan:{
			type: PekerjaanType,
			args: {
				jenis_pekerjaan: {type: new GraphQLNonNull(GraphQLString)},
				nama_pekerjaan: {type: new GraphQLNonNull(GraphQLString)},
				spesifikasi_teknis: {type: new GraphQLNonNull(GraphQLString)},
				tanggal_mulai: {type: new GraphQLNonNull(GraphQLString)},
				tanggal_selesai: {type: new GraphQLNonNull(GraphQLString)},
			},
			resolve(parent, args){
				return Pekerjaan.findOneAndUpdate({_id: args.id}, {
					jenis_pekerjaan: args.jenis_pekerjaan,
					nama_pekerjaan: args.nama_pekerjaan,
					spesifikasi_teknis: args.spesifikasi_teknis,
					tanggal_mulai: args.tanggal_mulai,
					tanggal_selesai: args.tanggal_selesai})
			}
        },      
    }
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
});