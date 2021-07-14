import React, { useState } from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, Collapse, DropdownItem, DropdownMenu, UncontrolLedDropdownProps, DropdownToggle, NavbarText } from 'reactstrap';
import logo from '../img/logo_branca.png';
import './MenuSuperior.css';


const MenuSuperior = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="nav" expand="md">
        <NavbarBrand href="/"><img src={logo} className="imagen"></img></NavbarBrand>
        <NavbarToggler onClick={toggle} className="Hamburger" />
        <Collapse isOpen={isOpen} navbar>
          <Nav>
            <UncontrolledDropdown nav inNavbar href="/cadastrofornecedor">
              <DropdownToggle nav caret >
                CADASTRO FORNECEDOR
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/cadastrofornecedor">
                  Início
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                REVISTA
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/consultarevista">
                  Consulta
                </DropdownItem>
                <DropdownItem href="/cadastrorevista">
                  Cadastro
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                GRUPOFOR
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/consultagrupofor">
                  Consulta
                </DropdownItem>
                <DropdownItem href="/cadastrogrupofor">
                  Cadastro
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                GRUPOVIN
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/consultagrupovin">
                  Consulta
                </DropdownItem>
                <DropdownItem href="/cadastrogrupovin">
                  Cadastro
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav className="BotaoSair" >
            <NavItem >
              <NavLink href="/" className="btn"><i className="material-icons">exit_to_app</i>SAIR</NavLink>
            </NavItem>
          </Nav>

        </Collapse>
      </Navbar>
    </div >
  );
}

export default MenuSuperior;