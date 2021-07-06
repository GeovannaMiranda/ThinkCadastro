import React from 'react';
import { Form, Row, Col, FormGroup, Container, Button, } from 'reactstrap';

import MenuSuperior from '../menuSuperior/MenuSuperior'

const ConsultaGrupoFor = (props) => {
    return (
        <React.Fragment>
            <MenuSuperior />
            <div className="font body">
                <Container className="themed-container" fluid={true}>
                    <Form>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Button color="primary">Buscar</Button>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <ul>
                                        <li>Teste</li>
                                    </ul>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>

        </React.Fragment>
    )

}
export default ConsultaGrupoFor;