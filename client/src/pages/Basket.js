import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../style/Basket.css'
import { Button, Card, Col,Row } from 'react-bootstrap';
import Image from "react-bootstrap/Image"
import { Delete, DeleteFromBasket } from '../components/store/CreateBasket';
import star from '../assets/star.png'

const Basket = () => {
    const dispatch = useDispatch();
    const {basket,sum} = useSelector(state=>state.basket)
    const DeleteToBasket = (state) =>{
        dispatch(DeleteFromBasket(state))
    }
const Deletes = ()=>{
    dispatch(Delete())

}
    return (
        <section>
            <div className='wrapper'>
                <li className='row1'>
                    <ul>Товар</ul>
                    <ul>Количество {basket.length}</ul>
                    <ul>Стоимость {sum} руб</ul>    
                    <ul>
                        <Button
                        onClick={Deletes}
                        >
                            Очистить корзину 
                        </Button>
                        </ul>            
                </li>
            </div>
            <hr className='line'></hr>
            <div className='wrapper'>
                <li className='row2'>
                    <ul>
                    <Row className='d-flex'>
            {basket?.map(device =>
                <Col md={3} className={'mt-3 d-flex justify-content-center'} >
            <Card style={{width:150, cursor: 'pointer'}} border={'light'}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
                    <div className=' '> 
                        {device.price} руб
                    </div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
                <Button className='mt-2' variant='outline-danger' onClick={()=>DeleteToBasket(device)}>
                    Удалить из корзины
                </Button>
            </Card>
        </Col>
                )}
        </Row>
                    </ul>         
                </li>
            </div>
        </section>
    );
};

export default Basket;