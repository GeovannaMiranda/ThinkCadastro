import React, { useCallback, useState } from 'react';
import { Form, Row, Col, FormGroup, Input, Container, InputGroup, Button, Table, DropdownToggle } from 'reactstrap';
import api from '../../Api';
import axios from 'axios';
import MenuSuperior from '../menuSuperior/MenuSuperior'
import { FormControl } from '@material-ui/core';

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
                    <Form >
                        <Row>
                            <Col>
                                <FormGroup>
                                    <FormControl className="buscar">
                                        <Button onClick={revista} caret color="primary" className="botao">
                                            Buscar
                                        </Button>
                                    </FormControl>
                                </FormGroup>

                            </Col>
                        </Row>
                    </Form>
                    <Form>
                        <Row>
                            <FormGroup>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Cód</th>
                                                <th>Descrição</th>
                                            </tr>
                                        </thead>
                                        {crevista.map((crevista, idx) => (

                                            <tbody key={idx} crevista={crevista}>
                                                <td>{crevista.rev_num_rev}</td>
                                                <td>{crevista.rev_nom}</td>
                                            </tbody>
                                        ))}
                                    </Table>
                            </FormGroup>
                        </Row>
                    </Form>
                </Container>
            </div>

        </React.Fragment>
    )

}
export default ConsultaRevista;