import {gql} from 'apollo-boost';

const getVendorsQuery = gql`
{
	vendors {
		nama
		jenis_usaha
		id
	}
}
`

const getKaryawansQuery = gql`
{
	karyawans {
		nama
		tanggal_lahir
		jenis_kelamin
		agama
		tempat_lahir
		alamat
		no_kontak
		email
		jabatan
		divisi{
			nama
			id
		}
		id
	}
}
`
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

const getAkunQuery = gql`
	query($username: String!, $password: String!){
		akun(username: $username, password: $password) {
			username
			password
			id
			karyawan {
				nama
				tanggal_lahir
				jenis_kelamin
				agama
				tempat_lahir
				alamat
				no_kontak
				email
				jabatan
				divisi{
					nama
					id
				}
				id
			}
		}
	}
`

export {getVendorsQuery, 
	getKaryawansQuery,
getAkunQuery, getClientsQuery};