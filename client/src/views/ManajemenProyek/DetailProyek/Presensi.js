import React, {Component} from 'react'
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
    FormGroup,
    Label,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
  } from 'reactstrap'
import pivottable from 'react-pivottable'

class Presensi extends Component{
    render(){
        return(
            <Container>
                <Card>
                    <CardHeader>
                        Presensi Pekerja
                    </CardHeader>
                    <CardBody>
                        <pivottable/>
                    </CardBody>
                </Card>
            </Container>
        );
    }
}

export default Presensi;