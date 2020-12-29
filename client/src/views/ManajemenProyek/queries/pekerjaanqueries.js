import {gql} from 'apollo-boost'

const getPekerjaansQuery = gql`
{
	pekerjaans {
		nama_pekerjaan
		tanggal_mulai
		tanggal_selesai
		pj_id{
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
		proyek{
			id
		}
		id
	}
}
`

const getPekerjaanQuery = gql`
	query($id: ID){
		pekerjaan(id: $id) {
			nama_pekerjaan
			tanggal_mulai
			tanggal_selesai
			pj_id{
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
			proyek{
				id
			}
			id
		}
	}
`

const addPekerjaan = gql`
mutation($nama_pekerjaan:String!, 
	$tanggal_mulai:String!, $tanggal_selesai:String!, $pj_id:String!, $proyek_id:String!){
	addPekerjaan(nama_pekerjaan: $nama_pekerjaan, tanggal_mulai:$tanggal_mulai, 
		tanggal_selesai:$tanggal_selesai, pj_id:$pj_id, proyek_id:$proyek_id){
		nama_pekerjaan
		tanggal_mulai
		tanggal_selesai
		id
	}
}
`

const hapusPekerjaan = gql`
	mutation($id:ID!){
		hapusPekerjaan(id: $id){
			nama_pekerjaan
			tanggal_mulai
			tanggal_selesai
			id
		}
	}
`

export {
    getPekerjaansQuery, getPekerjaanQuery, addPekerjaan, hapusPekerjaan};