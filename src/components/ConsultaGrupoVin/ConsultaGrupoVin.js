import React, { useCallback, useState } from 'react';
import { Form, Row, Col, FormGroup, Input, Container, InputGroup, Button, InputGroupAddon, DropdownToggle, Table } from 'reactstrap';
import api from '../../Api';
import axios from 'axios';
import MenuSuperior from '../menuSuperior/MenuSuperior'

const ConsultaGrupoVin = (props) => {
    const [grupovin, setGrupovin] = useState([]);

    const grupovinfor = useCallback(() => {
        axios.get('http://192.168.0.62:3334/selectGrupVinFor251Controller/')
            .then(response => {
                setGrupovin(response.data);
                console.log(response.data)
            })
    },
        []);

    return (
        <React.Fragment>
            <MenuSuperior />
            <div className="font fundo">
                <Container className="themed-container" fluid={true}>
                    <Form>
                        <Row>
                            <Col>
                                <center>
                                    <FormGroup  >
                                        <Button onClick={grupovinfor} className="botao" color="primary">Buscar</Button> {/* chamando a função handlelogin que é de direcionamento das rotas */}
                                    </FormGroup>
                                </center>
                            </Col>
                        </Row>
                    </Form>
                    <Row>
                        <Form id="altura">
                            <Col sm="12" md={{ size: 6, offset: 3 }} >
                                <Table bordered style={{ margin: '5% 0 0 0' }}>
                                    <thead>
                                        <tr className="tabela">
                                            <th>Cód</th>
                                            <th>Descrição</th>
                                        </tr>
                                    </thead>
                                    {grupovin.map((grupovin, idx) => (

                                        <tbody key={idx} grupovin={grupovin}>
                                            <td>{grupovin.codigogrupo}</td>
                                            <td>{grupovin.descricao}</td>
                                        </tbody>
                                    ))}
                                </Table>
                            </Col>
                        </Form>
                    </Row>
                </Container>
            </div>

        </React.Fragment>
    )

}
export default ConsultaGrupoVin;