import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {graphql} from 'react-apollo';
import * as compose from 'lodash.flowright';
import Swal from 'sweetalert2';
import {getProyeksQuery, addProyek} from '../queries/proyekqueries';
import {getClientsQuery} from '../queries/clientqueries';
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

      displayProyek(){
        var data = this.props.getProyeksQuery;
        var no = 0;
        if(data.loading){
          return (<div>Loading Daftar Proyek...</div>);
        } else {
          return data.proyeks.map(proyek => {
            no++;
            return(
              <tr key={proyek.id}>
                <td>{no}</td>
                <td>{proyek.nama}</td>
                <td>{proyek.alamat}</td>
                <td>{proyek.budget}</td>
                <td>{proyek.tanggal_mulai}</td>
                <td>{proyek.tanggal_selesai}</td>
                <td>{proyek.client.nama}</td>
                <td>
                  <Link to={`/detailproyek/detailproyek/${proyek.id}`}>
                    <Button color="success" size="sm">
                      <a> Lihat </a>
                    </Button>
                  </Link>
                </td>
              </tr>
            );
          });
        }
      }

      displayClient(){
        var data = this.props.getClientsQuery;
        if(data.loading){
          return
        } else {
          return data.clients.map(client => {
            return(
              <option value={client.id}>{client.nama}</option>
            );
          });
        } 
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
                    <th>Alamat Proyek</th>
                    <th>Budget</th>
                    <th>Tanggal Mulai</th>
                    <th>Tanggal Selesai</th>
                    <th>Client</th>
                    <th>Detail Proyek</th>
                  </tr>
                  </thead>
                  <tbody align="center">
                      {this.displayProyek()}
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

      </div>

    );
  }
}

export default compose(
  graphql(getProyeksQuery, {name:"getProyeksQuery"}),
  graphql(addProyek, {name:"addProyek"}),
  graphql(getClientsQuery, {name:"getClientsQuery"})
)(DaftarProyek);
