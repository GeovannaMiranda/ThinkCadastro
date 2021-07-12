import React, { useCallback, useEffect, useState } from 'react';
import { Form, FormGroup, Row, Col, Container, Label, Input, Button } from 'reactstrap';
import axios from 'axios'
import MenuSuperior from '../menuSuperior/MenuSuperior'
import './CadastroFornecedor.css'
import api from '../../Api';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { InputLabel } from '@material-ui/core';




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



const CadastroFornecedor = (props) => {

    const [seguimento, setSeguimento] = useState(null);
    const [isActive1, setIsActive1] = useState(false); 

    function onChange1(ev) {
        const {name, value} = ev.target;
        setSeguimento(value); console.log(value);
        if (ev !== '') {
            setIsActive1(true);
        } else {
            setIsActive1(false);
        }
    }

    const [seguimentogestao, setSeguimentogestao] = useState(null);
    const [isActive2, setIsActive2] = useState(false); 

    function onChange2(ev) {
        const {name, value} = ev.target;
        setSeguimentogestao(value); console.log(value);
        if (ev !== '') {
            setIsActive2(true);
        } else {
            setIsActive2(false);
        }
    }

    const [revistaparalelo, setResvistaparalelo] = useState(null);
    const [isActive3, setIsActive3] = useState(false); 

    function onChange3(ev) {
        const {name, value} = ev.target;
        setResvistaparalelo(value); console.log(value);
        if (ev !== '') {
            setIsActive3(true);
        } else {
            setIsActive3(false);
        }
    }

    const [revista, setRevista] = useState(null);
    const [isActive4, setIsActive4] = useState(false); 

    function onChange4(ev) {
        const {name, value} = ev.target;
        setRevista(value); console.log(value);
        if (ev !== '') {
            setIsActive4(true);
        } else {
            setIsActive4(false);
        }
    }

    const [grupo, setGrupo] = useState(null);
    const [isActive5, setIsActive5] = useState(false); 

    function onChange14(ev) {
        const {name, value} = ev.target;
        setGrupo(value); console.log(value);
        if (ev !== '') {
            setIsActive5(true);
        } else {
            setIsActive5(false);
        }
    }
    
    const [codigo, setCodigo] = useState(null);

    function onChange5(ev){
        const{
            nome,value
        } = ev.target
        setCodigo(value)
        console.log(value)
    }

    const [nome, setNome] = useState(null);

    function onChange6(ev){
        const{
            nome,value
        } = ev.target
        setNome(value)
        console.log(value)
    }
    
    const [primeironome, setPrimeironome] = useState(null);

    function onChange7(ev){
        const{
            nome,value
        } = ev.target
        setPrimeironome(value)
        console.log(value)
    }

    const [comissao, setComissao] = useState(null);

    function onChange8(ev){
        const{
            nome,value
        } = ev.target
        setComissao(value)
        console.log(value)
    }
    
    const [acrescimo, setAcrescimo] = useState(null);

    function onChange9(ev){
        const{
            nome,value
        } = ev.target
        setAcrescimo(value)
        console.log(value)
    }

    const [vinculo, setVinculo] = useState(null);

    function onChange10(ev){
        const{
            nome,value
        } = ev.target
        setVinculo(value)
        console.log(value)
    }

    const [cpfcnpj, setCpfcnpj] = useState(null);

    function onChange11(ev){
        const{
            nome,value
        } = ev.target
        setCpfcnpj(value)
        console.log(value)
    }

    const [grupovin, setGrupovin] = useState(null);

    function onChange12(ev){
        const{
            nome,value
        } = ev.target
        setGrupovin(value)
        console.log(value)
    } 
    
    const [grupofor, setGrupofor] = useState(null);

    function onChange13(ev){
        const{
            nome,value
        } = ev.target
        setGrupofor(value)
        console.log(value)
    }

    const [ativo, setAtivo] = useState(null)

    function onChange15 (ev){
       const{
           nome,value
       } = ev.target
       setAtivo(value)
       console.log(value)
    }

    const insertcadfornecedor = useCallback(() => {
        
        axios.post('http://192.168.0.62:3334/insert/' + codigo + '/' + nome + '/' + primeironome + '/' + seguimento + '/' + seguimentogestao + '/' + revistaparalelo + '/'+ revista + '/' + comissao + '/' + acrescimo + '/' + vinculo + '/' + cpfcnpj + '/' + grupovin + '/' + grupofor + '/' + grupo + '/' + ativo +'') 
    },

    [codigo,nome,primeironome,seguimento,seguimentogestao, revistaparalelo, revista,comissao,acrescimo,vinculo,cpfcnpj,grupovin,grupofor,grupo,ativo]);

    const [selectrevista, setSelectrevista] = useState([])
    useEffect(() => {
        axios.get('http://192.168.0.62:3334/selectrevista/')
            .then(response => {
                setSelectrevista(response.data);
                console.log(response.data)
            })
    },
        []);

    return (
        <React.Fragment>
            <MenuSuperior />
            <div className="font fundo">

                <Container className="container-theme" fluid={true}>
                    <Form>
                        <Row>
                            <Col>
                                <FormGroup >
                                    <CssTextField
                                        onChange={onChange5}
                                        className="Grupo1"
                                        id="standard-basic"
                                        label="Código"
                                        type="Text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <CssTextField
                                        onChange={onChange6}
                                        className="Grupo1"
                                        id="standard-basic"
                                        label="Nome"
                                        type="Text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <CssTextField
                                        onChange={onChange7}
                                        className="Grupo1"
                                        id="standard-basic"
                                        label="Primeiro Nome"
                                        type="Text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>

                    <Form id="altura">
                        <Row>
                            <Col>
                                <FormGroup>
                                    <CssTextField
                                        onChange={onChange8}
                                        className="Grupo2"
                                        id="standard-basic"
                                        label="Comissão"
                                        type="Text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup >
                                    <FormControl className="sele">
                                        <InputLabel  id="select-label">Seguimento</InputLabel>
                                        <Select
                                            labelId="select-label"
                                            id="select"
                                            onChange={onChange1}                                           
                                        >
                                            <MenuItem  selected disabled value="">Selecione Opção</MenuItem>
                                            <MenuItem value="1">Modinha</MenuItem>
                                            <MenuItem value="2">Plus Size</MenuItem>
                                            <MenuItem value="10">Infantil</MenuItem>
                                        </Select>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col >
                                <FormGroup >
                                    <FormControl className="sele">
                                        <InputLabel >Seguimento Gestão</InputLabel>
                                        <Select
                                            id="select"
                                            onChange={onChange2}
                                           
                                        >
                                            <MenuItem value="">Selecione Opção</MenuItem>
                                            <MenuItem value="1">Modinha</MenuItem>
                                            <MenuItem value="2">Plus Size</MenuItem>
                                            <MenuItem value="3">Jeans</MenuItem>
                                            <MenuItem value="4">Acessórios</MenuItem>
                                            <MenuItem value="5">Camisaria</MenuItem>
                                            <MenuItem value="6">Fitness</MenuItem>
                                            <MenuItem value="7">Promoção</MenuItem>
                                            <MenuItem value="8">Brinde</MenuItem>
                                            <MenuItem value="10">Infantil</MenuItem>
                                        </Select>
                                    </FormControl>
                                </FormGroup>
                            </Col>

                            <Col >
                                <FormGroup >
                                    <FormControl className="sele" >
                                        <InputLabel  id="select-label">Revista/Paralelo</InputLabel>
                                        <Select

                                            labelId="select-label"
                                            id="select"
                                            onChange={onChange3}
                                         
                                        >
                                            <MenuItem   selected disabled value="">Selecione Opção</MenuItem>
                                            <MenuItem value="1">Revista</MenuItem>
                                            <MenuItem value="2">Paralelo</MenuItem>
                                        </Select>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup >
                                    <FormControl className="sele" >
                                        <InputLabel id="select-label">Revista</InputLabel>
                                        <Select                                           
                                            labelId="select-label"
                                            id="select"
                                            onChange={onChange4} 
                                        >
                                            <MenuItem selected disabled value="">SELECIONE OPÇÃO</MenuItem>
                                            {selectrevista.map(selectrevista => (
                                                <MenuItem key={selectrevista.rev_num_rev} value={selectrevista.rev_num_rev}>{selectrevista.rev_nom}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <CssTextField
                                        onChange={onChange9}
                                        className="sele"
                                        id="standard-basic"
                                        label="Acrescimo"
                                        type="Text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>

                    <Form id="altura">
                        <Row>
                            <Col>
                                <FormGroup>
                                    <CssTextField
                                        onChange={onChange10}
                                        className="Grupo2"
                                        id="standard-basic"
                                        label="Vínculo"
                                        type="Text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup >
                                    <CssTextField
                                    onChange={onChange11}
                                        className="Grupo2"
                                        id="standard-basic"
                                        label="CPF/CNPJ"
                                        type="Text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup >
                                    <FormControl className="outro" >
                                        <InputLabel  id="select-label">Grupo</InputLabel>
                                        <Select
                                            labelId="select-label"
                                            id="select"
                                            onChange={onChange14} 
                                           
                                        >
                                            <MenuItem selected disabled value="">Selecione Opção</MenuItem>
                                            <MenuItem value="1">Fashion Club</MenuItem>
                                            <MenuItem value="2">Outros</MenuItem>
                                        </Select>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Form id="altura">
                                <Row>
                                    <Col>
                                        <FormGroup >
                                            <CssTextField
                                                onChange={onChange12}
                                                className="Grupo2"
                                                id="standard-basic"
                                                label="Grupo Vin"
                                                type="Text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup >
                                            <CssTextField
                                                onChange={onChange13}
                                                className="Grupo2"
                                                id="standard-basic"
                                                label="Grupo For"
                                                type="Text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup className="active">
                                            <Input onChange={onChange15} value={1} type="checkbox" name="ativo" id="ATIVO"></Input>
                                            <Label id="Ativo">Ativo</Label>
                                        </FormGroup>
                                    </Col>

                                </Row>
                            </Form>
                        </Row>
                        <Row>
                            <Col>
                                <Button onClick={insertcadfornecedor} className="salvar" color="primary">Salvar</Button>{' '}
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        </React.Fragment >

    );
}

export default CadastroFornecedor;