import {gql} from 'apollo-boost'

const getProyeksQuery = gql`
{
	proyeks {
		nama
		alamat
		budget
		tanggal_mulai
		tanggal_selesai
		client{
			nama
			alamat
			no_kontak
			email
			id
		}
		id
	}
}
`

const getProyekQuery = gql`
	query($id: ID){
		proyek(id: $id) {
			nama
			alamat
			budget
			tanggal_mulai
			tanggal_selesai
			client{
				nama
				alamat
				no_kontak
				email
				id
			}
			id
		}
	}
`

const addProyek = gql`
mutation($nama:String!, $alamat:String!, $budget:Int!, $tanggal_mulai:String!, $tanggal_selesai:String!, $client_id:String!){
	addProyek(nama: $nama, alamat: $alamat, budget:$budget, tanggal_mulai:$tanggal_mulai, tanggal_selesai:$tanggal_selesai, client_id:$client_id){
		nama
		alamat
		budget
		tanggal_mulai
		tanggal_selesai
		id
	}
}
`

const hapusProyek = gql`
	mutation($id:ID!){
		hapusProyek(id: $id){
			nama
			alamat
			budget
			tanggal_mulai
			tanggal_selesai
			id
		}
	}
`

export{
    getProyeksQuery, getProyekQuery, addProyek, hapusProyek};