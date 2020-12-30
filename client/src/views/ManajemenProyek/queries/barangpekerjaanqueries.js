import {gql} from 'apollo-boost'

const getBarangPekerjaansQuery = gql`
{
	barangPekerjaans {
        jumlah
        barang_id{
            nama_barang
			jenis_barang
			satuan
			harga
			id
        }
        pekerjaan_id{
            nama_pekerjaan
            id
        }
        status
		id
	}
}
`

const getBarangPekerjaanQuery = gql`
	query($id: ID){
		barangPekerjaan(id: $id) {
            jumlah
            barang_id{
                nama_barang
                jenis_barang
                satuan
                harga
                id
            }
            pekerjaan_id{
                nama_pekerjaan
                id
            }
            status
            id
		}
	}
`

const addBarangPekerjaan = gql`
	mutation($barang_id:String!, $jumlah:Int!, $pekerjaan_id:String!, $status:Boolean!){
		addBarangPekerjaan(barang_id: $barang_id, jumlah: $jumlah, pekerjaan_id:$pekerjaan_id, status:$status){
			jumlah
			id
		}
	}
`

const hapusBarangPekerjaan = gql`
	mutation($id:ID!){
		hapusBarangPekerjaan(id: $id){
			id
		}
	}
`

export { getBarangPekerjaansQuery,
    getBarangPekerjaanQuery, addBarangPekerjaan, hapusBarangPekerjaan};