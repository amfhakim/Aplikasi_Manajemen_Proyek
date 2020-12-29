import React, {Component} from  'react'
import { graphql } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import * as compose from 'lodash.flowright';
import Swal from 'sweetalert2';
import { getPekerjaanQuery, hapusPekerjaan } from '../queries/pekerjaanqueries';
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
    render(){
        return(
            <Container>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Detail Proyek
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
                  </Row>
                </Container>
              </CardBody>
            </Card>
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
  )(DetailPekerjaan);