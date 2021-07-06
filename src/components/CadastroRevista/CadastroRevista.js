import React from 'react';
import { Form, FormGroup, Label, Input, Row, Col, Container } from 'reactstrap';
import MenuSuperior from '../menuSuperior/MenuSuperior'

const CadastroRevista = (props) => {
    return (
        <React.Fragment>
            <MenuSuperior />
            <div className="font body">
                <Container className="themed-container" fluid={true}>
                    <Form>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="cod">Código Revista</Label>
                                    <Input type="cod" name="" Codigo id="cod" required />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="nome">Nome Revista</Label>
                                    <Input type="nome" name="nome" id="name" />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="DataLancamento">Data Lançamento</Label>
                                    <Input type="DataL" name="DataLancamento" id="data" />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="DataVenda">Data Venda</Label>
                                    <Input type="DataV" name="Datavenda" id="datav" />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="DataPL">Data Pré Lançamento</Label>
                                    <Input type="DataPL" name="DataPreLancamento" id="datapl" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default CadastroRevista;