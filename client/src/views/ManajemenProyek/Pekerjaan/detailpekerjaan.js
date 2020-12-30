import React, {Component} from  'react'
import { graphql } from 'react-apollo';
import { Link, Redirect } from 'react-router-dom';
import * as compose from 'lodash.flowright';
import Barang from '../Barang/Barang';
import Swal from 'sweetalert2';
import { getPekerjaanQuery, hapusPekerjaan } from '../queries/pekerjaanqueries';
import {getBarangsQuery, getBarangQuery, addBarang, hapusBarang} from '../queries/barangqueries'; 
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
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
    Progress
  } from 'reactstrap';

class DetailPekerjaan extends Component {

  displayPekerjaan() {
    const { pekerjaan } = this.props.data;
    if (pekerjaan) {
      return (
        <Container>
          <Label>Nama Pekerjaan</Label>
          <Input placeholder={pekerjaan.nama_pekerjaan} disabled/>
          <Label>Tanggal Mulai</Label>
          <Input placeholder={pekerjaan.tanggal_mulai} disabled />
          <Label>Tanggal Selesai</Label>
          <Input placeholder={pekerjaan.tanggal_selesai} disabled/>
          <Label>Penanggung Jawab</Label>
          <Input placeholder={pekerjaan.pj_id.nama} disabled/>
        </Container>
      );
    }
  }

    render(){
        return(
            <Container>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Detail Pekerjaan
                  <Button size="sm" color="danger" className="float-right mb-0">
                    Hapus
                  </Button>
                  <Button size="sm" color="warning" className="float-right mb-0">
                    Ubah
                  </Button>
                </CardHeader>
                <CardBody>
                  <Container>
                    <Row>
                      {this.displayPekerjaan()}
                    </Row>
                  </Container>
                </CardBody>
              </Card>
              <Barang pekerjaan_id={this.props.match.params.id}/>
            </Container>
        );
    }
}

export default compose(
    graphql(getPekerjaanQuery, {
      options: (props) => {
        return {
          variables: {
            id: props.match.params.id
          }
        }
      }
    }),
    graphql(hapusPekerjaan, { name: "hapusProyek" }),
    graphql(getBarangsQuery, { name: "getBarangsQuery" }),
    graphql(getBarangQuery, { name: "getBarangQuery" }),
    graphql(addBarang, { name: "addBarang" }),
    graphql(hapusBarang, { name: "hapusBarang" }),
  )(DetailPekerjaan);