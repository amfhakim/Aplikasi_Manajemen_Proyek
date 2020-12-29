import {gql} from 'apollo-boost';


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
		gaji
		divisi{
			nama
			id
		}
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

export { getKaryawansQuery,
getAkunQuery};