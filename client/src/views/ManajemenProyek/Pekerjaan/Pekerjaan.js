import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';
import {getPekerjaansQuery, getPekerjaanQuery} from '../queries/pekerjaanqueries';
import { 
    Card, 
    CardBody, 
    CardHeader, 
    Col, 
    Container,
    Pagination, 
    PaginationItem, 
    PaginationLink, 
    Row, 
    Table, 
    Button,
  } from 'reactstrap';

class Pekerjaan extends Component {

  constructor(props) {
    super(props);
    this.state = {
      proyek_id: ''
    };
  }

  displayPekerjaan(){
    var data = this.props.getPekerjaansQuery;
    var no = 0;
    if(data.loading){
      return (<div>Loading Daftar Pekerjaan...</div>);
    } else {
      return data.pekerjaans.map(pekerjaan => {
        if(pekerjaan.proyek.id === this.props.proyek_id){
             no++;
          return(
            <tr key={pekerjaan.id}>
              <td>{no}</td>
              <td>{pekerjaan.nama_pekerjaan}</td>
              <td>{pekerjaan.tanggal_mulai}</td>
              <td>{pekerjaan.tanggal_selesai}</td>
              <td>{pekerjaan.pj_id.nama}</td>
              <td>
              <Link to={`/detailpekerjaan/detailpekerjaan/${pekerjaan.id}`}>
                    <Button color="success" size="sm">
                      <a> Lihat </a>
                    </Button>
                  </Link>
              </td>
            </tr>
          );
        }
       
      });
    }
  }

    render(){
        return(
          <Container>
                <Table hover bordered striped responsive size="sm">
                  <thead align="center">
                  <tr>
                    <th>No</th>
                    <th>Nama Pekerjaan</th>
                    <th>Tanggal Mulai</th>
                    <th>Tanggal Selesai</th>
                    <th>Penanggung Jawab</th>
                    <th>Lihat Detail</th>
                  </tr>
                  </thead>
                  <tbody align="center">
                {this.displayPekerjaan()}
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
          </Container>   
        );
    }
}

export default compose(
  graphql(getPekerjaansQuery, { name: "getPekerjaansQuery" })
)(Pekerjaan);