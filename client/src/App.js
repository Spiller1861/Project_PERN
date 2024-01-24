import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { check } from "./http/userAPI";

const App = observer(() => {
  const {user} = useContext(Context)
  const {loading, setLoading} = useState(true)

  useEffect(() => {
    check().then(data => {
        user.setUser(data)
        user.setIsAuth(true)
        })
    }, [])

  if (loading) {
    return <Spinner animation={"grow"}/>
  }

  const [state,setState] = useState(false)


    useEffect(()=>{

      console.log(user.isAuth)
        if(user.isAuth)
        {
           setState(true)
        } 
        else{
            setState(false)
        }
    
    
    },[ user.isAuth])


  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter state={state} />
      <Footer/>
    </BrowserRouter>
  );
});

export default App;
