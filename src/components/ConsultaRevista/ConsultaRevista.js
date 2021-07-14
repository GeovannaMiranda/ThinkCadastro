import React, { useCallback, useState } from 'react';
import { Form, Row, Col, FormGroup, Input, Container, InputGroup, Button, Table, DropdownToggle } from 'reactstrap';
import api from '../../Api';
import axios from 'axios';
import MenuSuperior from '../menuSuperior/MenuSuperior'
import { FormControl } from '@material-ui/core';
import toDate from 'date-fns/esm/toDate/index';

const ConsultaRevista = (props) => {
    const [crevista, setCrevista] = useState([]);

    const revista = useCallback(() => {
        axios.get('http://192.168.0.62:3334/SelectRevFor251/')
            .then(response => {
                setCrevista(response.data);
                console.log(response.data)
            })
    },
        []);


    return (
        <React.Fragment>
            <MenuSuperior />
            <div className="font fundo">
                <Container className="themed-container" fluid={true}>
                    <Row>
                        <Form>
                            <center>
                                <FormGroup >
                                    <Button onClick={revista} className="botao " color="primary">Buscar</Button> {/* chamando a função handlelogin que é de direcionamento das rotas */}
                                </FormGroup>
                            </center>

                        </Form>
                    </Row>
                    <Row>
                        <Form id="altura">
                            <Col sm="12" md={{ size: 6, offset: 3 }} >
                                <FormGroup className="tabela">
                                    <Table bordered style={{margin:'5% 0 0 0'}}>
                                        <thead>
                                            <tr>
                                                <th>Cód</th>
                                                <th>Descrição</th>
                                            </tr>
                                        </thead>
                                        {crevista.map((crevista, idx) => (

                                            <tbody key={idx} crevista={crevista}>
                                                <td scope="row">{crevista.rev_num_rev}</td>
                                                <td>{crevista.rev_nom}</td>
                                            </tbody>
                                        ))}
                                    </Table>
                                </FormGroup>
                            </Col>
                        </Form>
                    </Row>
                </Container>
            </div>

        </React.Fragment>
    )

}
export default ConsultaRevista;