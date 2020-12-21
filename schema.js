const graphql = require ('graphql');
const _ = require('lodash');
const path = require('path');
const Proyek = require('./models/proyekModel')
const Divisi = require('./models/divisiModel');
const Karyawan = require('./models/karyawanModel');
const Akun = require('./models/akunModel');
const Client = require('./models/clientModel');

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
        client:{
            type: ClientType,
			resolve(parent,args){
                return Client.findById({_id: parent.client_id});
            }
        },
        karyawan:{
            type: KaryawanType,
			resolve(parent,args){
                return Karyawan.findById({_id: parent.karyawan_id});
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
				client_id: {type: new GraphQLNonNull(GraphQLString)},
				karyawan_id: {type: new GraphQLNonNull(GraphQLString)},
			},
			resolve(parent,args){
				let proyek = new Proyek({
					nama: args.nama,
					alamat: args.alamat,
					client_id: args.client_id,
					karyawan_id: args.karyawan_id,
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
    }
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
});