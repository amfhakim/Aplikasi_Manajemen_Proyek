import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {graphql} from 'react-apollo';
import * as compose from 'lodash.flowright';
import Swal from 'sweetalert2';
import {getBarangsQuery} from '../queries/barangqueries';
import {getBarangPekerjaanQuery, getBarangPekerjaansQuery, 
  addBarangPekerjaan, hapusBarangPekerjaan} from '../queries/barangpekerjaanqueries';
import {
    Container,
  Card, 
  CardBody, 
  CardHeader, 
  Col, 
  Pagination, 
  PaginationItem, 
  PaginationLink, 
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
} from 'reactstrap';

class Barang extends Component {

  constructor(props) {
    super(props);
    this.state = {
      barang_id:'',
      jumlah_barang: 0,
      modalIsOpen: false,  
      success: false,
      pekerjaan_id:''
    };
  }

  toggleModal(){
    this.setState({
      modalIsOpen: ! this.state.modalIsOpen
    });
  }

  submitForm(e){
    e.preventDefault();
    this.toggleModal();
    this.props.addBarangPekerjaan({
      variables:{
        barang_id: this.state.barang_id,
        jumlah: parseInt(this.state.jumlah_barang),
        pekerjaan_id: this.props.pekerjaan_id,
        status: false
      },
      refetchQueries:[{query:getBarangPekerjaansQuery}]
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Data Barang Berhasil Disimpan',
      showConfirmButton: true,
    })
  }

  onDelete(barang_id){
    Swal.fire({
      title: 'Apakah anda Yakin?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Saya Yakin!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.props.hapusBarang({
          variables:{
            id: barang_id,        
          },
          refetchQueries:[{query:getBarangsQuery}],
        });
        Swal.fire(
          'Dihapus!',
          'Data Barang Telah Dihapus',
          'success'
        )
      }
    })
  }

  displayBarang(){
    var data = this.props.getBarangsQuery;
    var no = 0;
    if(data.loading){
      return (<div>Loading Daftar Barang...</div>);
    } else {
      return data.barangs.map(barang => {
        if(barang.jenis_barang !== 'Perkakas'){
           no++;
          return(
            <option value={barang.id}>{barang.nama_barang}</option>
          );
        }  
      });
    }
  }

  displayBarangPekerjaan(){
    var data = this.props.getBarangPekerjaansQuery;
    var no = 0;
    if(data.loading){
      return (<div>Loading Daftar Barang...</div>);
    } else {
      return data.barangPekerjaans.map(bp => {
           no++;
          return(
            <tr key={bp.id}>
              <td>{no}</td>
              <td>{bp.barang_id.nama_barang}</td>
              <td>{bp.jumlah}</td>
              <td>{String(bp.status)}</td>
              <td>
                    <Button color="warning" size="sm">
                      <a> Edit </a>
                    </Button>
              </td>
              <td>
                    <Button color="danger" size="sm">
                      <a> Hapus </a>
                    </Button>
              </td>
            </tr>
          );
      });
    }
  }

  submitBarang(){
    Swal.fire({
      title: 'Apakah anda Yakin? anda tidak akan dapat mengubah lagi setelah ini',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Saya Yakin!'
    }).then((result) => {
        Swal.fire(
          'Submit Berhasil!',
          'Data Barang Telah Disubmit',
          'success'
        )
      }
    )
  }

  render() {
    return (
        <Container>
          {console.log(this.props.pekerjaan_id)}
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Daftar Barang
                <Button size="sm" color="primary" className="float-right mb-0" onClick={this.toggleModal.bind(this)}>
                  <i className="fa fa-plus"></i> Tambah Barang
                </Button>
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead align="center">
                  <tr>
                    <th>No</th>
                    <th>Nama Barang</th>
                    <th>Jumlah</th>
                    <th>Status</th>
                    <th>Edit</th>
                    <th>Hapus</th>
                  </tr>
                  </thead>
                  <tbody align="center">
                    {this.displayBarangPekerjaan()}
                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav>
                <Button size="sm" color="primary" className="float-right mb-0">
                  Submit
                </Button>
              </CardBody>
            </Card> 

            <Modal isOpen={this.state.modalIsOpen}>
            <ModalHeader>Form Tambah Data Barang</ModalHeader>
            <ModalBody>
                <Form onSubmit={(e) => {this.submitForm(e)}}>
                <FormGroup>
                    <Label htmlFor="name">Nama Barang</Label>
                    <Input type="select" name="barang_id" id="barang" onChange={(e) =>this.setState({barang_id:e.target.value})} required>
                    <option value="">Nama Barang</option>
                    {this.displayBarang()}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="name">Jumlah Barang</Label>
                    <Input type="number" id="jenis" placeholder="Masukkan Jumlah Barang" onChange={(e) =>this.setState({jumlah_barang:e.target.value})} required />
                </FormGroup>
                <Button type="submit" color="primary">Submit</Button>
                <Button color="danger" onClick={this.toggleModal.bind(this)}>Batal</Button>
                </Form>
            </ModalBody>  
            </Modal>
        </Container>
    );
  }
}

export default compose(
  graphql(getBarangsQuery, {name:"getBarangsQuery"}),
  graphql(getBarangPekerjaansQuery, {name:"getBarangPekerjaansQuery"}),
  graphql(getBarangPekerjaanQuery, {name:"getBarangPekerjaanQuery"}),
  graphql(addBarangPekerjaan, {name:"addBarangPekerjaan"}),
  graphql(hapusBarangPekerjaan, {name:"hapusBarangPekerjaan"})
)(Barang);
