import React from 'react';
import {Form, FormGroup, Row, Col, Label, Input, Button} from 'reactstrap';


const CadastroFornecedor = (props) => {

    return (

         <div>    
            <Form> 
             <Row>
               <Col>
                <FormGroup >
                    <Label  for= "codigo">Código</Label>
                    <Input type="alfanumerico" name="Código" id="cod" />
                </FormGroup>
                </Col>
                <Col>
                <FormGroup>
                    <Label for = "nome">Nome</Label>
                    <Input type= "Nome" name="Nome" id="name" required/>
                </FormGroup>
                </Col>
                <Col>
                <FormGroup>
                    <Label for= "PNome">Primeiro Nome</Label>
                    <Input for= "PNome" name="PNome" id = "PNome" required/>
                </FormGroup>
                </Col>
             </Row>
            </Form>
            
            <Form>
             <Row>
              <Col>
               <FormGroup >
                    <Label for= "comissao">Comissão</Label>
                    <Input type="numero" name="comissao" id="comissao" />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup> 
                    <Label for= "Seguimento">Seguimento</Label>
                    <select id="Seguimentos" required>
                        <option selected disabled value = "">SELECIONE OPÇÃO</option>
                        <option value="1">MODINHA</option>
                        <option value="2">PLUS SIZE</option>
                        <option value="10">INFANTIL</option>
                    </select>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                    <Label for= "SeguimentoGestao" name="SeguimentoGestao" id="SeguimentoGestao">Seguimento Gestão</Label>
                    <select id="SeguimentoGestao" required>
                        <option selected disabled value = "">SELECIONE OPÇÃO</option>
                        <option value="1">MODINHA</option>
                        <option value="2">PLUS SIZE</option>
                        <option value="3">JEANS</option>
                        <option value="4">ACESSÓRIOS</option>
                        <option value="5">CAMISARIA</option>
                        <option value="6">FITNESS</option>
                        <option value="7">PROMOÇÃO</option>
                        <option value="8">BRINDE</option>
                        <option value="10">INFANTIL</option>
                    </select>
                </FormGroup>
             </Col>
             <Col>
                <FormGroup>
                    <Label id="revistaparalelo">Revista/Paralelo</Label>
                    <select id="Resvista" required>
                        <option selected disabled value = "">SELECIONE OPÇÃO</option> 
                        <option value="0">REVISTA</option>
                        <option value="1">PARALELO</option>
                    </select>
                </FormGroup>
             </Col>
             <Col>
                <FormGroup>
                    <Label for="revista">Revista</Label>
                    <select id="Revista" required>
                        <option selected disabled value = "">SELECIONE OPÇÃO</option> 
                        {/*Consumir Api com Axios*/}
                    </select>
                </FormGroup>
             </Col>
             <Col>
                <FormGroup>
                        <Label id="acrescimo">Acrescimo</Label>
                        <Input type="acrescimo" name="acrescimo" id="acrescimo"></Input>
                </FormGroup>
             </Col>
             </Row>
            </Form>
            
            <Form>
             <Row>
              <Col>
                <FormGroup>
                        <Label id="vinculo">Vinculo</Label>
                        <Input type="vinculo" name="Vinculo" id="vinculo"></Input>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                        <Label id="Cpf_cnpj">CPF/CNPJ</Label>
                        <Input type="numero" name="cpf_cnpj" id="cpfcnpj"></Input>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                        <Label id="grupo">Grupo</Label>
                     <select id="grupo">
                        <option selected disabled value = "">SELECIONE OPÇÃO</option>  
                        <option value="2">OUTROS</option>
                        <option value="1">FASHION CLUB</option>
                     </select>
                </FormGroup>
              </Col>
              <Form>
               <Row>
               <Col>
                <FormGroup>
                    <Label id="grupov">GrupoVin</Label>
                    <Input type="gupo" name="GrupoVin" id="Grupo"></Input>
                </FormGroup>
               </Col>
               <Col>
                <FormGroup>
                    <Label id="grupof">GrupoFor</Label>
                    <Input type="gupo" name="GrupoFor" id="Grupo"></Input>
                </FormGroup>
               </Col>
               <Col>
                <FormGroup>
                    <Input type="checkbox" name = "ativo" id="ATIVO"></Input>
                    <Label id="Ativo">Ativo</Label>
                </FormGroup> 
               </Col>

               </Row>
              </Form>
             </Row> 

             <Row>
              <Col>
                <Button>Salvar</Button>
              </Col>  
             </Row>  

            </Form>
            
         </div>
   
    );
}

export default CadastroFornecedor;