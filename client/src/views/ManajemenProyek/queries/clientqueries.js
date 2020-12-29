import {gql} from 'apollo-boost';

const getClientsQuery = gql`
{
	clients {
		nama
		alamat
		no_kontak
		email
		id
	}
}
`
const addClient = gql`
	mutation($nama:String!, $alamat:String!, $no_kontak:String!, $email:String!){
		addClient(nama: $nama, alamat: $alamat, no_kontak:$no_kontak, email:$email){
			nama
			alamat
			no_kontak
			email
			id
		}
	}
`

const hapusClient = gql`
	mutation($id:ID!){
		hapusClient(id: $id){
			nama
			alamat
			no_kontak
			email
			id
		}
	}
`

export { getClientsQuery, addClient, hapusClient};