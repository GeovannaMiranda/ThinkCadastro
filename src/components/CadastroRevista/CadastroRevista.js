import React, { useCallback, useState } from 'react';
import { Form, FormGroup, Label, Input, Row, Col, Container, Button } from 'reactstrap';
import api from '../../Api';
import axios from 'axios';
import MenuSuperior from '../menuSuperior/MenuSuperior'

import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ptBR } from '@material-ui/core/locale';
import moment from 'moment';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

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
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [selectedDate2, setSelectedDate2] = React.useState(new Date());
    const [selectedDate3, setSelectedDate3] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log(date);
    };
    const handleDateChange2 = (date) => {
        setSelectedDate2(date);
        console.log(date);
    };
    const handleDateChange3 = (date) => {
        setSelectedDate3(date);
        console.log(date);
    };

    const datainicial = moment(selectedDate).format('YYYYMMDD')
    console.log(datainicial)

    const datainicial2 = moment(selectedDate2).format('YYYYMMDD')
    console.log(datainicial2)

    const datainicial3 = moment(selectedDate3).format('YYYYMMDD')
    console.log(datainicial3)


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

    const insertrevista = useCallback(() => {

        axios.post('http://192.168.0.62:3334/InsertRevFor251/' + codrevista + '/' + nomrevista + '/' + datainicial + '/' + datainicial + '/' + datainicial + '')
        console.log(codrevista, nomrevista, datainicial, datainicial, datainicial);
    },

        [codrevista, nomrevista, datainicial, datainicial, datainicial]);




    return (
        <React.Fragment>
            <MenuSuperior />
            <div className="font fundo">
                <Container className="themed-container" fluid={true}>
                    <Form id="altura">

                        <Row>
                            <Col sm={12} md={6} lg={6} xl={6}>
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
                            <Col sm={12} md={6} lg={6} xl={6}>
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
                            <Col sm={12} md={12} lg={4} xl={4}>
                                <FormGroup>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <Grid container justifyContent="space-around">
                                            <KeyboardDatePicker
                                                className="sele"
                                                disableToolbar
                                                
                                                locale={ptBR}
                                                variant="inline"
                                                format="yyyy/MM/dd"
                                                margin="normal"
                                                id="date-picker-inline"
                                                label="Data Lançamento"
                                                value={selectedDate}
                                                onChange={handleDateChange}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </Grid>
                                    </MuiPickersUtilsProvider>
                                </FormGroup>
                            </Col>
                            <Col sm={12} md={12} lg={4} xl={4}>
                                <FormGroup >
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <Grid container justifyContent="space-around">
                                            <KeyboardDatePicker
                                                className="sele"
                                                disableToolbar
                                                
                                                locale={ptBR}
                                                variant="inline"
                                                format="yyyy/MM/dd"
                                                margin="normal"
                                                id="date-picker-inline"
                                                label="Data Venda"
                                                value={selectedDate2}
                                                onChange={handleDateChange2}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </Grid>
                                    </MuiPickersUtilsProvider>
                                </FormGroup>
                            </Col>
                            <Col sm={12} md={12} lg={4} xl={4}>
                                <FormGroup>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <Grid container justifyContent="space-around">
                                            <KeyboardDatePicker
                                                className="sele"
                                                disableToolbar
                                                
                                                locale={ptBR}
                                                variant="inline"
                                                format="yyyy/MM/dd"
                                                margin="normal"
                                                id="date-picker-inline"
                                                label="Data Pré Lançamento"
                                                value={selectedDate3}
                                                onChange={handleDateChange3}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </Grid>
                                    </MuiPickersUtilsProvider>
                                </FormGroup>

                            </Col>
                        </Row>
                        <Row>
                            <Col >
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