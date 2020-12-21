import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {graphql} from 'react-apollo';
import * as compose from 'lodash.flowright';
import Swal from 'sweetalert2';
import {getBarangsQuery, addBarangMutation, hapusBarangMutation} from '../queries/queries';
import { 
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

class DaftarProyek extends Component {

    constructor(props) {
        super(props);
        this.state = {
          nama_barang:'',
          jenis_barang: '',
          satuan: '',
          harga: '',
          modalIsOpen: false,  
          success: false,
        };
      }

    toggleModal(){
        this.setState({
          modalIsOpen: ! this.state.modalIsOpen
        });
      }
    

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Daftar Proyek
                <Button size="sm" color="primary"  onClick={this.toggleModal.bind(this)} className="float-right mb-0">
                  <i className="fa fa-plus"></i> Tambah Daftar Proyek
                </Button>
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead align="center">
                  <tr>
                    <th>No</th>
                    <th>Nama Proyek</th>
                    <th>Client</th>
                    <th>Alamat Proyek</th>
                    <th>Edit</th>
                    <th>Hapus</th>
                  </tr>
                  </thead>
                  <tbody align="center">
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
              </CardBody>
            </Card>
          </Col>
        </Row> 

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

      </div>

    );
  }
}

export default DaftarProyek;
