import React, { Component } from 'react';
import Pekerjaan from '../Pekerjaan/Pekerjaan';
import { graphql } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import * as compose from 'lodash.flowright';
import Swal from 'sweetalert2';
import { getProyekQuery, hapusProyek } from '../queries/proyekqueries';
import { getPekerjaanQuery, getPekerjaansQuery, addPekerjaan } from '../queries/pekerjaanqueries';
import {getKaryawansQuery} from '../queries/queries';
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

class DetailProyek extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nama_pekerjaan: '',
      pe_tanggal_mulai: '',
      pe_tanggal_selesai: '',
      pj_id: '',
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

  displayProyek() {
    const { proyek } = this.props.data;
    if (proyek) {
      return (
        <Container>
          <Label>Nama Proyek</Label>
          <Input placeholder={proyek.nama} />
          <Label>Alamat Proyek</Label>
          <Input placeholder={proyek.alamat} />
          <Label>Budget Awal</Label>
          <Input placeholder={proyek.budget} />
          <Label>Tanggal Mulai</Label>
          <Input placeholder={proyek.tanggal_mulai} />
          <Label>Tanggal Selesai</Label>
          <Input placeholder={proyek.tanggal_selesai} />
        </Container>
      );
    }
  }

  onDelete(proyek_id) {
    Swal.fire({
      title: 'Apakah anda Yakin?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Saya Yakin!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.props.hapusProyek({
          variables: {
            id: proyek_id,
          },
          //refetchQueries:[{query:getProyeksQuery}],
        });
        Swal.fire(
          'Dihapus!',
          'Data Proyek Telah Dihapus',
          'success',
          <Redirect from='detailproyek/detailproyek' to='/daftarproyek/daftarproyek' />
        );
      }
    })
  }

  displayPJ(){
    var data = this.props.getKaryawansQuery;
    if(data.loading){
      return
    } else {
      return data.karyawans.map(karyawan => {
        return(
          <option value={karyawan.id}>{karyawan.nama}</option>
        );
      });
    } 
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Detail Proyek
                <Button size="sm" color="danger" className="float-right mb-0"
                  onClick={this.onDelete.bind(this, this.props.match.params.id)}>
                  Hapus
                </Button>
                <Button size="sm" color="warning" className="float-right mb-0">
                  Ubah
                </Button>
              </CardHeader>
              <CardBody>
                <Container>
                  <Row>
                    <Col xs="6">
                      {this.displayProyek()}
                    </Col>
                    <Col xs="6">
                      <Row>
                        <div className="text-center">TOTAL PROGRESS</div>
                        <div />
                        <div className="text-center">50%</div>
                        <Progress value={50} />
                      </Row>
                      <Row>
                          JUMLAH PEKERJA
                          
                      <div>
                        20
                          </div>
                      <Button size="sm" color="primary" className="float-right mb-0">
                        Lihat Presensi
                          </Button>
                      </Row>
                        
                    </Col>
                  </Row>
                </Container>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardHeader>
                Daftar Pekerjaan
                  <div className="text-center">
                  <Button size="sm" color="primary" onClick={this.toggleModal.bind(this)} className="float-right mb-0">
                    Tambah Pekerjaan
                    </Button>
                </div>
              </CardHeader>
              <CardBody>
                <Pekerjaan proyek_id={this.props.match.params.id}/>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Modal isOpen={this.state.modalIsOpen}>
          <ModalHeader>Form Tambah Pekerjaan</ModalHeader>
          <ModalBody>
            <Form onSubmit={(e) => { this.submitForm(e) }}>
              <FormGroup>
                <Label htmlFor="name">Nama Pekerjaan</Label>
                <Input type="text" id="jenis" placeholder="Masukkan Nama Pekerjaan" onChange={(e) => this.setState({ nama_pekerjaan: e.target.value })} required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Tanggal Mulai</Label>
                <Input type="date" id="tanggalmulai" placeholder="Masukkan Tanggal Mulai" onChange={(e) => this.setState({ tanggal_mulai: e.target.value })} required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Tanggal Selesai</Label>
                <Input type="date" id="tanggalselesai" placeholder="Masukkan Tanggal Selesai" onChange={(e) => this.setState({ tanggal_selesai: e.target.value })} required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Penanggung Jawab</Label>
                <Input type="select" name="nama_client" onChange={(e) =>this.setState({pj_id:e.target.value})} required>
                  <option value="">Pilih Penanggungjawab</option>
                  {this.displayPJ()}
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
  graphql(getProyekQuery, {
    options: (props) => {
      return {
        variables: {
          id: props.match.params.id
        }
      }
    }
  }),
  graphql(getPekerjaanQuery, { name: "getPekerjaanQuery" }),
  graphql(getPekerjaansQuery, { name: "getPekerjaansQuery" }),
  graphql(addPekerjaan, { name: "addPekerjaan" }),
  graphql(hapusProyek, { name: "hapusProyek" }),
  graphql(getKaryawansQuery, { name: "getKaryawansQuery" }),
)(DetailProyek);