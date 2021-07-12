import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import "./Login.css";
import axios from 'axios'
import { Form, Container, Label, Input, Row, Col, FormGroup, Button, Media } from 'reactstrap';
import logo from '../img/logo_branca.png'
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import api from "../../Api";

const CssTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "white"
        },
        "& label": {
            color: "white"
        },
        "& .MuiInput-underline:before": {
            borderBottomColor: "white"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "white"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "white"
            },
            "&:hover fieldset": {
                borderColor: "white"
            },
            "&.Mui-focused fieldset": {
                borderColor: "white"
            }
        }
    }
})(TextField);

const Login = (props) => {
    // armazena o conteúdo digitado nos inputs
    const [usu_login, setLogin] = useState('');
    const [usu_senha, setSenha] = useState('');
    // captura cada caractere digitado no input  (estados)
    const [isActive1, setIsActive1] = useState(false); 
    const [isActive2, setIsActive2] = useState(false);
    // condição para cada caractere digitado e armazena nos estados
    function onChange1(ev) {
        const {nome, value} = ev.target;
        setLogin(value)
        if (ev !== '') {
            setIsActive1(true);
          } else {
            setIsActive1(false);
          }
    }

    function onChange2(ev) {
        const {name, value} = ev.target;
        setSenha(value)
        if (ev !== '') {
            setIsActive2(true);
          } else {
            setIsActive2(false);
          }
    }
    // função para direcionar as rotas (envia dados dos inputs para a api se estiver correto direcioa para a rota selecionado e se estiver errado retorna msg falha)
    const history = useHistory()
    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await api.get(`http://192.168.0.62:3334/usuarios/${usu_login}/${usu_senha}`);
            console.log(usu_login, usu_senha);
            history.push('/cadastrofornecedor')
        } catch (err) {
            alert('falha')
        }

    }


    return (
        <React.Fragment>
            <div className="corpo font">
                <Container>
                    <Form>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <FormGroup className="Titulo" >
                                    <center>THINK</center>
                                    <center id="center">CADASTRO FORNECEDOR</center>
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }} >
                                <FormGroup >
                                    <CssTextField
                                        className="Grupo1"
                                        id="standard-basic"
                                        label="Email"
                                        type="Text"
                                        value={usu_login} //passando valor para o estado de login 
                                        onChange={onChange1} //chamando a função de estados
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <FormGroup>
                                    <CssTextField
                                        className="Grupo2"
                                        id="standard-password-input"
                                        label="Senha"
                                        type="password"
                                        autoComplete="current-password"
                                        value={usu_senha}
                                        onChange={onChange2}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Col >
                           <center>
                                <FormGroup  >
                                  <Button onClick={handleLogin} className="botao btn btn-light">Login</Button> {/* chamando a função handlelogin que é de direcionamento das rotas */}
                                </FormGroup>
                            </center>
                        </Col>

                    </Form>
                    <Row display="flex">
                        <Col>
                            <FormGroup >
                                <Media className="log" src={logo} />
                            </FormGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )

}

export default Login; //exportado um compon