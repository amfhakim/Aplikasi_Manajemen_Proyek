import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import * as compose from 'lodash.flowright';
import { 
    Col,  
    Row, 
    Table, 
    Button,
    FormGroup,
    Label,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    Container
  } from 'reactstrap';
  import {getProyeksQuery, addProyek} from '../queries/queries';

class FormTambahProyek extends Component{

    constructor(props) {
        super(props);
        this.state = {
          nama_proyek:'',
          alamat_proyek: '',
          budget: 0,
          tanggal_mulai: '',
          tanggal_selesai: '',
          client_id: '',
          modalIsOpen: false,  
          success: false,
        };
      }

      submitForm(e){
        e.preventDefault();
        this.props.addProyek({
          variables:{
            nama: this.state.nama_proyek,
            alamat: this.state.alamat_proyek,
            budget: parseInt(this.state.budget),
            tanggal_mulai:this.state.tanggal_mulai,
            tanggal_selesai:this.state.tanggal_selesai,
            client_id:this.state.client_id
          },
          refetchQueries:[{query:getProyeksQuery}]
        });
    
      }

    toggleModal(){
        this.setState({
          modalIsOpen: ! this.state.modalIsOpen
        });
      }

    render(){
        return(
            <Container>
            <Modal isOpen={this.state.modalIsOpen}>
             <ModalHeader>Form Tambah Proyek</ModalHeader>
             <ModalBody>
               <Form onSubmit={(e) => {this.submitForm(e)}}>
                 <FormGroup>
                   <Label htmlFor="name">Nama Proyek</Label>
                   <Input type="text" id="name" placeholder="Masukkan Nama Proyek" onChange={(e) =>this.setState({nama_proyek:e.target.value})} required />
                 </FormGroup>
                 <FormGroup>
                   <Label htmlFor="name">Alamat Proyek</Label>
                   <Input type="text" id="jenis" placeholder="Masukkan Alamat Proyek" onChange={(e) =>this.setState({alamat_proyek:e.target.value})} required />
                 </FormGroup>
                 <FormGroup>
                   <Label htmlFor="name">Budget</Label>
                   <Input type="number" id="harga" placeholder="Masukkan Budget" onChange={(e) =>this.setState({budget:e.target.value})} required />
                 </FormGroup>
                 <FormGroup>
                   <Label htmlFor="name">Tanggal Mulai</Label>
                   <Input type="date" id="harga" placeholder="Masukkan Tanggal Mulai" onChange={(e) =>this.setState({tanggal_mulai:e.target.value})} required />
                 </FormGroup>
                 <FormGroup>
                   <Label htmlFor="name">Tanggal Selesai</Label>
                   <Input type="date" id="harga" placeholder="Masukkan Tanggal Selesai" onChange={(e) =>this.setState({tanggal_selesai:e.target.value})} required />
                 </FormGroup>
                 <FormGroup>
                   <Label htmlFor="name">Nama Client</Label>
                   <Input type="select" name="nama_client" onChange={(e) =>this.setState({client_id:e.target.value})} required>
                     <option value="">Pilih Client</option>
                     {this.displayClient()}
                   </Input> 
                 </FormGroup>
                 <Button type="submit" color="primary" onClick={this.toggleModal.bind(this)}>Submit</Button>
                 <Button color="danger" onClick={this.toggleModal.bind(this)}>Batal</Button>
               </Form>
             </ModalBody>  
           </Modal>
           </Container>
        )
    }
}

export default compose(
    graphql(getProyeksQuery, {name:"getProyeksQuery"}),
    graphql(addProyek, {name:"addProyek"})
  )(FormTambahProyek);