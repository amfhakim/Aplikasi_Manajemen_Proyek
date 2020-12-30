import React, {Component} from 'react'
import { Container } from 'reactstrap';

class FormTambahBarang extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            success: false,
        };
    }

    submitForm(e) {
        e.preventDefault();
        this.props.addPekerjaan({
          variables: {
            nama_pekerjaan: this.state.nama_pekerjaan,
            tanggal_mulai: this.state.tanggal_mulai,
            tanggal_selesai: this.state.tanggal_selesai,
            pj_id:this.state.pj_id,
            proyek_id: this.props.match.params.id,
          },
          refetchQueries: [{ query: getPekerjaansQuery }]
        });
      }
    
      toggleModal() {
        this.setState({
          modalIsOpen: !this.state.modalIsOpen
        });
      }

    render(){
        return(
            <Container>
                <Modal isOpen={this.state.modalIsOpen}>
                    <ModalHeader>Form Tambah Data Barang</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={(e) => {this.submitForm(e)}}>
                        <FormGroup>
                            <Label htmlFor="name">Nama Barang</Label>
                            <Input type="text" id="name" placeholder="Masukkan Nama Barang" onChange={(e) =>this.setState({nama_barang:e.target.value})} required />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="name">Jenis Barang</Label>
                            <Input type="text" id="jenis" placeholder="Masukkan Jenis Barang" onChange={(e) =>this.setState({jenis_barang:e.target.value})} required />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="name">Satuan</Label>
                            <Input type="select" name="satuan" id="satuan" onChange={(e) =>this.setState({satuan:e.target.value})}>
                            <option>Satuan</option>
                            <option value="Kg">Kg</option>
                            <option value="Buah">Buah</option>
                            <option value="Meter">Meter</option>
                            <option value="Lembar">Lembar</option>
                            <option value="Liter">Liter</option>
                            <option value="Sak">Sak</option>
                            <option value="m">m</option>
                            <option value="m2">m2</option>
                            <option value="m3">m3</option>
                            <option value="Roll">Roll</option>
                            <option value="Kardus">Kardus</option>
                            <option value="Batang">Batang</option>
                            <option value="Truk">Truk</option>
                            <option value="Drum">Drum</option>
                            <option value="Takaran">Takaran</option>
                            <option value="Takaran">Unit</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="name">Harga Barang</Label>
                            <Input type="number" id="harga" placeholder="Masukkan Harga Barang" onChange={(e) =>this.setState({harga:e.target.value})} required />
                        </FormGroup>
                        <Button type="submit" color="primary">Submit</Button>
                        <Button color="danger" onClick={this.toggleModal.bind(this)}>Batal</Button>
                        </Form>
                    </ModalBody>  
                </Modal>
            </Container>
        )
    }
}

export default FormTambahBarang;