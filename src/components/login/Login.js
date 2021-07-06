import React from "react";
import { useHistory } from 'react-router-dom';
import "./Login.css";
import axios from 'axios'
import { Form, Container, Label, Input, Row, Col, FormGroup, Button} from 'reactstrap';
import think from '../img/logo_branca.png'



const Login = (props) => {
    return (
        <React.Fragment>
            <div className="body">
                <Container>
                   <Form>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <FormGroup>
                                    <Label for="Email">Email</Label>
                                    <Input placeholder="example@example.com" type="endereço" name="Email" id="email" required></Input>
                                </FormGroup>
                            </Col>
                        </Row>    
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <FormGroup>
                                    <Label for="Senha">Senha</Label>
                                    <Input placeholder="Ex:123ABc!" type="password" name="senha" id="senha" required></Input>
                                </FormGroup>
                            </Col>
                        </Row>
                            <Col >
                              <center>
                                <FormGroup>
                                    <Button type="submit" id="buttonlogin" className="efeito efeito-1 btn btn-light">LOGIN<i className="material-icons left"></i></Button>
                                </FormGroup>
                              </center>
                            </Col>
                    </Form>
                </Container>
            </div>
        </React.Fragment>
    )

}

export default Login;