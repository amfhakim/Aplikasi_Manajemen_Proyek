import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {graphql} from 'react-apollo';
import * as compose from 'lodash.flowright';
import Swal from 'sweetalert2';
import {getClientsQuery} from '../queries/queries';
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
              </tr>
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
                <i className="fa fa-align-justify"></i> Daftar Client
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
      </div>

    );
  }
}

export default compose(
    graphql(getClientsQuery, {name:"getClientsQuery"})
  )(DaftarClient);