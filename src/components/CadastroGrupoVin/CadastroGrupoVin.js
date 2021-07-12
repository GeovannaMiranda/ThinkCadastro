import React, { useCallback, useState } from 'react';
import { Form, FormGroup, Label, Input, Row, Col, Container, Button } from 'reactstrap';
import MenuSuperior from '../menuSuperior/MenuSuperior'
import api from '../../Api';
import axios from 'axios';
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

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
const CadastroGrupoVin = (props) => {
    const [cadgrupo, setCadgrupo] = useState([]);
    const [desc, setDesc] = useState([]);

    function onChange1(ev) {
        const {
            nome, value
        } = ev.target
        setCadgrupo(value);
        console.log(value);
    }
    function onChange2(ev) {
        const {
            nome, value
        } = ev.target
        setDesc(value);
        console.log(value);
    }

    const insertgrupovin = useCallback(() => {

        axios.post('http://192.168.0.62:3334/InsertGForvinc251Controller/' + cadgrupo + '/' + desc + '')

    },
        [cadgrupo, desc]);


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
                                        label="Código"
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <CssTextField
                                        className="Grupo1"
                                        onChange={onChange2}
                                        id="standard-basic"
                                        label="Descrição"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button onClick={insertgrupovin} type="submit" className="salvar" color="primary">Salvar</Button>{' '}
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default CadastroGrupoVin;