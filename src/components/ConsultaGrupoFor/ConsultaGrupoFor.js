import React, { useState, useCallback } from 'react';
import { Form, Row, Col, FormGroup, Container, Button, Table, DropdownToggle } from 'reactstrap';
import axios from 'axios';
import api from '../../Api';
import MenuSuperior from '../menuSuperior/MenuSuperior';



const ConsultaGrupoFor = (props) => {
  const [grupofor, setGrupofor] = useState([]);

  const grupofor251 = useCallback(() => {
      axios.get('http://192.168.0.62:3334/SelectGrupFor251Controller/')
          .then(response => {
              setGrupofor(response.data);
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
                                    <DropdownToggle onClick={grupofor251} caret color="primary" className="botao">
                                        Buscar
                                    </DropdownToggle>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <FormGroup className="tabela">
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Cód</th>
                                            <th>Descrição</th>
                                        </tr>
                                    </thead>
                                    {grupofor.map((grupofor, idx) => (

                                        <tbody key={idx} grupofor={grupofor}>
                                            <td>{grupofor.codigogrupo}</td>
                                            <td>{grupofor.descricao}</td>
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
export default ConsultaGrupoFor;