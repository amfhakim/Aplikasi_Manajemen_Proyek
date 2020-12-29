import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {graphql} from 'react-apollo';
import * as compose from 'lodash.flowright';
import Swal from 'sweetalert2';
import {getKaryawansQuery} from '../queries/queries';
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

class DaftarPekerja extends Component {

    displayPekerja(){
        var data = this.props.getKaryawansQuery;
        var no = 0;
        if(data.loading){
          return (<div>Loading Daftar Pekerja...</div>);
        } else {
          return data.karyawans.map(pekerja => {
           
            if(pekerja.jabatan === "Pekerja" || 
            pekerja.jabatan === "Pekerja Ahli" ||
            pekerja.jabatan === "Asisten Pekerja"){
              no++;
              return(
                <tr key={pekerja.id}>
                  <td>{no}</td>
                  <td>{pekerja.nama}</td>
                  <td>{pekerja.jabatan}</td>
                  <td>{pekerja.gaji}</td>
                </tr>
            );
            }
            
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
                <i className="fa fa-align-justify"></i> Daftar Pekerja
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead align="center">
                  <tr>
                    <th>No</th>
                    <th>Nama Pekerja</th>
                    <th>Jabatan</th>
                    <th>Gaji Harian</th>
                  </tr>
                  </thead>
                  <tbody align="center">
                      {this.displayPekerja()}
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
      </div>

    );
  }
}

export default compose(
    graphql(getKaryawansQuery, {name:"getKaryawansQuery"})
  )(DaftarPekerja);