import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Card, Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { login, registration } from "../http/userAPI";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { useNavigate } from "react-router-dom";

const Auth = observer(() => {
const { user } = useContext(Context);
const location = useLocation();
const history = useNavigate();
const isLogin = location.pathname === LOGIN_ROUTE;

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [emailDirty, setEmailDirty] = useState("");
const [passwordDirty, setPasswordDirty] = useState("");
const [emailError, setEmailError] = useState("Email не может быть пустым");
const [passwordError, setPasswordError] = useState("Пароль не может быть пустым");
const [formValid, setFormValid] = useState(false)

useEffect(() => {
    if(emailError || passwordError){
        setFormValid(false)
    }
    else {
        setFormValid(true)
    }
},[emailError,passwordError])

const emailHandler = (e) => {
    setEmail(e.target.value)
    const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(e.target.value).toLowerCase())){
        setEmailError('Некорретный email')
    }
    else {
        setEmailError("")
    }
}

const passwordHandler = (e) => {
    setPassword(e.target.value)
    if(e.target.value.length < 2 || e.target.value.length > 12){
        setPasswordError('Пароль должен быть больше 2 и меньше 12')
        if(!e.target.value){
            setPasswordError("Пароль не может быть пустым")
        }
    } else {
        setPasswordError('')
    }
}

const blurHandler = (e) => {
    switch(e.target.name){
        case 'email':
            setEmailDirty(true)
            break
        case 'password':
            setPasswordDirty(true)
            break
    }
}

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
        console.log(data);
      } else {
        data = await registration(email, password);
      }
      user.setUser(data);
      user.setIsAuth(true);
      
      history(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form    m className="d-flex flex-column">
                    {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div> }
                    <Form.Control 
                        name="email"
                        className='mt-3' 
                        placeholder='Введите ваш email...' 
                        onBlur={e => blurHandler(e)}
                        value={email}
                        onChange={e => emailHandler(e)}
                    />
                    {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div> }
                    <Form.Control 
                        name="password"
                        className='mt-3' 
                        placeholder='Введите ваш password...' 
                        onBlur={e => blurHandler(e)}
                        value={password}
                        onChange={e => passwordHandler(e)}
                        type='password'
                    />    
          <Form className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                Нет аккаунта?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            )}
            <Button disabled={!formValid} variant={"outline-success"} onClick={click}>
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Form>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
