import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {graphql} from 'react-apollo';
import * as compose from 'lodash.flowright';
import Swal from 'sweetalert2';
import {getClientsQuery, addClient} from '../queries/clientqueries';
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

class DaftarClient extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nama_client:'',
      alamat_client: '',
      no_kontak_client: '',
      email_client: '',
      modalIsOpen: false,  
      success: false,
    };
  }

  submitForm(){
    this.props.addClient({
      variables:{
        nama: this.state.nama_client,
        alamat: this.state.alamat_client,
        no_kontak: this.state.no_kontak_client,
        email:this.state.email_client,
      },
      refetchQueries:[{query:getClientsQuery}]
    });
  }

    displayClient(){
        var data = this.props.getClientsQuery;
        var no = 0;
        if(data.loading){
          return (<div>Loading Daftar Client...</div>);
        } else {
          return data.clients.map(client => {
            no++;
            return(
              <tr key={client.id}>
                <td>{no}</td>
                <td>{client.nama}</td>
                <td>{client.alamat}</td>
                <td>{client.no_kontak}</td>
                <td>{client.email}</td>
                <td>
                    <Button color="warning" size="sm">
                      <a> ubah </a>
                    </Button>
                </td>
                <td>
                    <Button color="danger" size="sm">
                      <a> hapus </a>
                    </Button>
                </td>
              </tr>
            );
          });
        }
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
                <i className="fa fa-align-justify"></i> Daftar Client
                <Button size="sm" color="primary"  onClick={this.toggleModal.bind(this)} className="float-right mb-0">
                  <i className="fa fa-plus"></i> Tambah Client
                </Button>
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead align="center">
                  <tr>
                    <th>No</th>
                    <th>Nama Client</th>
                    <th>alamat</th>
                    <th>no_kontak</th> 
                    <th>email</th>
                    <th>ubah</th>
                    <th>hapus</th>
                  </tr>
                  </thead>
                  <tbody align="center">
                      {this.displayClient()}
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
          <ModalHeader>Form Tambah Client</ModalHeader>
          <ModalBody>
            <Form onSubmit={(e) => {this.submitForm(e)}}>
              <FormGroup>
                <Label htmlFor="name">Nama Client</Label>
                <Input type="text" id="name" placeholder="Masukkan Nama Client" onChange={(e) =>this.setState({nama_client:e.target.value})} required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Alamat Client</Label>
                <Input type="text" id="jenis" placeholder="Masukkan Jenis Barang" onChange={(e) =>this.setState({alamat_client:e.target.value})} required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">No Kontak</Label>
                <Input type="text" id="jenis" placeholder="Masukkan Jenis Barang" onChange={(e) =>this.setState({no_kontak_client:e.target.value})} required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Email</Label>
                <Input type="text" id="jenis" placeholder="Masukkan Jenis Barang" onChange={(e) =>this.setState({email_client:e.target.value})} required />
              </FormGroup>
              <Button type="submit" color="primary" onClick={this.toggleModal.bind(this)}>Submit</Button>
              <Button color="danger" onClick={this.toggleModal.bind(this)}>Batal</Button>
            </Form>
          </ModalBody>  
        </Modal>  
      </div>

    );
  }
}

export default compose(
    graphql(getClientsQuery, {name:"getClientsQuery"}),
    graphql(addClient, {name:"addClient"})
  )(DaftarClient);