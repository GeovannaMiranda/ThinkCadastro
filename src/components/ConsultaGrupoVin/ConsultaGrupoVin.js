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
                                <FormGroup>
                                    <DropdownToggle caret onClick={grupovinfor} color="primary" className="botao">
                                        Buscar
                                    </DropdownToggle>

                                </FormGroup>
                            </Col>
                        </Row>
                       
                    </Form>
                    <Row>
                        <Table>
                            <thead>
                                <tr className="tabela">
                                    <th>Cód</th>
                                    <th>Descrição</th>
                                </tr>
                            </thead>
                                {grupovin.map((grupovin, idx) =>(
                                    
                                    <tbody key={idx} grupovin={grupovin}>
                                        <td>{grupovin.codigogrupo}</td>
                                        <td>{grupovin.descricao}</td>
                                    </tbody>
                                ))}
                            
                        </Table>
                    </Row>
                </Container>
            </div>

        </React.Fragment>
    )

}
export default ConsultaGrupoVin;