import React, { useCallback, useState } from 'react';
import { Form, FormGroup, Label, Input, Row, Col, Container, Button } from 'reactstrap';
import api from '../../Api';
import axios from 'axios';
import MenuSuperior from '../menuSuperior/MenuSuperior'

import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core';

const CssTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "black"
        },
        "& label": {
            color: "black"
        },
        "& .MuiInput-underline:before": {
            borderBottomColor: "black"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "black"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "black"
            },
            "&:hover fieldset": {
                borderColor: "black"
            },
            "&.Mui-focused fieldset": {
                borderColor: "black"
            }
        }
    }
})(TextField);

const CadastroRevista = (props) => {
    const [codrevista, setCodrevista] = useState([]);
    const [nomrevista, setNomrevista] = useState([]);
    const [datlancamento, setDatlancamento] = useState([]);
    const [datvenda, setDatvenda] = useState([]);
    const [datprelancamento, setDatprelancamento] = useState([]);

    function onChange1(ev) {
        const {
            name, value
        } = ev.target;
        setCodrevista(value);
        console.log(value);

    }

    function onChange2(ev) {
        const {
            nome, value
        } = ev.target;
        setNomrevista(value);
        console.log(value);
    }

    function onChange3(ev) {
        const {
            nome, value
        } = ev.target;
        setDatlancamento(value);
        console.log(value);
    }

    function onChange4(ev) {
        const {
            nome, value
        } = ev.target;
        setDatvenda(value);
        console.log(value);
    }

    function onChange5(ev) {
        const {
            nome, value
        } = ev.target;
        setDatprelancamento(value);
        console.log(value);
    }

    const insertrevista = useCallback(() => {

        axios.post('http://192.168.0.62:3334/InsertRevFor251/' + codrevista + '/' + nomrevista + '/' + datlancamento + '/' + datvenda + '/' + datprelancamento + '')
    },

        [codrevista, nomrevista, datlancamento, datvenda, datprelancamento]);




    return (
        <React.Fragment>
            <MenuSuperior />
            <div className="font fundo">
                <Container className="themed-container" fluid={true}>
                    <Form id="altura">
                    
                        <Row>
                            <Col>
                                <FormGroup>
                                    <CssTextField
                                        onChange={onChange1}
                                        className="Grupo1"
                                        id="standard-basic"
                                        label="Código Revista"
                                        type="Text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <CssTextField
                                        onChange={onChange2}
                                        className="Grupo1"
                                        id="standard-basic"
                                        label="Nome Revista"
                                        type="Text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                    <Form id="altura" >
                        <Row>
                            <Col>
                                <FormGroup >
                                    <FormControl className="sele">
                                        <CssTextField
                                            onChange={onChange3}
                                            className="linha"
                                            id="standard-basic"
                                            label="Data Lançamento"
                                            type="Text"
                                        />
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup >
                                    <FormControl className="sele">
                                        <CssTextField
                                            onChange={onChange4}

                                            id="standard-basic"
                                            label="Data Venda"
                                            type="Text"
                                        />
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <FormControl className="sele">
                                        <CssTextField
                                            onChange={onChange5}
                                            className="linha"
                                            id="standard-basic"
                                            label="Data Pré Lançamento"
                                            type="Text"
                                        />
                                    </FormControl>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button onClick={insertrevista} type="submit" className="salvar" color="primary">Salvar</Button>{' '}
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default CadastroRevista;