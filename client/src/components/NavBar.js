import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, SHOP_ROUTE, PROFILE_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';


const NavBar = () => {
  const {sum} = useSelector(state=>state.basket)
    const history = useNavigate()

    const {user} = useContext(Context)
    
  console.log(user.role)    

    const logOut = () => {
      history(MAIN_ROUTE)
      user.setUser({})
      user.setIsAuth(false)
      localStorage.removeItem('token')
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href={MAIN_ROUTE}>Lucrum-shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Button variant={"dark"} onClick={ () => history(SHOP_ROUTE) }>Каталог</Button>
              <Button variant={"dark"} onClick={ () => history(BASKET_ROUTE) }>Корзина</Button>
            </Nav>
            {
                user.isAuth ? 
                <Nav>
                  {user.role == 'ADMIN' ?
                    <Button
                        variant={"dark"}
                        onClick={ () => history(ADMIN_ROUTE)}
                    >
                    Админ панель
                    </Button> : ''}
                    <Button variant={"dark"} onClick={ () => history(PROFILE_ROUTE) }>Профиль</Button>
                    <Button
                        variant={"danger"}
                        onClick={ () => logOut()}
                    >
                    Выйти
                    </Button>  
                </Nav>
                :
                <Nav>
                    <Button variant={"dark"} onClick={ () => history(LOGIN_ROUTE) }>Авторизация</Button>
                </Nav>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };

export default NavBar;