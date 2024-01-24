import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeName,ChangeSurname, ChangeAdress, ChangeNumber } from '../components/store/CreateBasket';
import "../style/profile.css"
const Profile = () => {

    const {name,surname,img,number,adress} = useSelector(state=>state.basket)
    const [names,setNames] = useState();
    const [boolName,setBoolName] = useState(false)
    const [surnames,setSurnames] = useState();
    const [boolSurname,setBoolSurname] = useState(false)
    const [numbers,setNumbers] = useState();
    const [boolNumber,setBoolNumber] = useState(false)
    const [adresss,setAdresss] = useState();
    const [boolAdress,setBoolAdress] = useState(false)
const dispatch = useDispatch();
const ChangeNames = () =>{
    if(names.trim()==="")
    {
        alert("error")
    }
    else{
    dispatch(ChangeName(names))
    }
}
const ChangeSurnames = () =>{
    if(surnames.trim()==="")
    {
        alert("Error")
    }
    else{
    dispatch(ChangeSurname(surnames))
    }
}
const ChangeNumbers = () =>{
    if(numbers.trim()==="")
    {
        alert("Error")
    }
    else{
    dispatch(ChangeNumber(numbers))
    }
}
const ChangeAdresss = () =>{
    if(adresss.trim()==="")
    {
        alert("Error")
    }
    else{
    dispatch(ChangeAdress(adresss))
    }
}
    return (
        <Container>
            <Row className='mt-4'>
                <div className='h'>
              <div className='mains'>
                <div
                className='img'
                >
                    <img src={img}/>
                </div>
                <div className='text'>
                    <div>
                       <div className='name'> Имя: {name} </div>
                       {
                        boolName && (
                            <>
                            <input 
                            placeholder='Имя'
                            value={names}
                            onChange={(e)=>setNames(e.target.value)}
                            ></input>
                            </>
                        )

                       }
                       <button className='blubtn' onClick={()=>{setBoolName(!boolName)
                       if(boolName)
                       {

                        ChangeNames()
                       }
                       }
                       
                    }>
                     {!boolName ? "Изменить" : "Сохранить"}
                       </button>
                      


                    </div>

                    <div>
                       <div className='surname'> Фамилия: {surname} </div>
                       {
                        boolSurname && (
                            <>
                            <input 
                            placeholder='фамилия'
                            value={surnames}
                            onChange={(e)=>setSurnames(e.target.value)}
                            ></input>
                            </>
                        )

                       }
                       <button className='blubtn' onClick={()=>{setBoolSurname(!boolSurname)
                       if(boolSurname)
                       {

                        ChangeSurnames()
                       }
                       }
                    }>
                     {!boolSurname ? "Изменить" : "Сохранить"}
                       </button>
                    </div>

                    <div>
                       <div className='number'> Номер телефона: {number} </div>
                       {
                        boolNumber && (
                            <>
                            <input 
                            placeholder='телефон'
                            value={numbers}
                            onChange={(e)=>setNumbers(e.target.value)}
                            ></input>
                            </>
                        )

                       }
                       <button className='blubtn' onClick={()=>{setBoolNumber(!boolNumber)
                       if(boolNumber)
                       {

                        ChangeNumbers()
                       }
                       }
                    }>
                     {!boolNumber ? "Изменить" : "Сохранить"}
                       </button>
                    </div>

                    <div>
                       <div className='adress'> Адрес: {adress} </div>
                       {
                        boolAdress && (
                            <>
                            <input 
                            placeholder='адрес'
                            value={adresss}
                            onChange={(e)=>setAdresss(e.target.value)}
                            ></input>
                            </>
                        )

                       }
                       <button className='blubtn' onClick={()=>{setBoolAdress(!boolAdress)
                       if(boolAdress)
                       {

                        ChangeAdresss()
                       }
                       }
                    }>
                     {!boolAdress ? "Изменить" : "Сохранить"}
                       </button>
                    </div>
                </div>
              </div>
              </div>
            </Row>
        </Container>
    );
};

export default Profile;