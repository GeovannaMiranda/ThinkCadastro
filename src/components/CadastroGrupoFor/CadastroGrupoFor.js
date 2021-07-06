import React from 'react';
import { Form, FormGroup, Label, Input, Row, Col, Container } from 'reactstrap';
import MenuSuperior from '../menuSuperior/MenuSuperior'

const CadastroGrupoFor = (props) => {
    return (
        <React.Fragment>
            <MenuSuperior />
            <div className="font body">
                <Container className="themed-container" fluid={true}>
                    <Form>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="cod">Código Grupo</Label>
                                    <Input type="cod" name="" Codigo id="cod" required />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="nome">Descrição</Label>
                                    <Input type="nome" name="nome" id="name" />
                                </FormGroup>
                            </Col>
                        
                        </Row>
                    </Form>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default CadastroGrupoFor;