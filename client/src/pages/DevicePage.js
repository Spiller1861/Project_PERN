import React, {useEffect, useState} from 'react';
import bigStar from '../assets/bigStar.png'
import {useParams} from 'react-router-dom'
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';
import {fetchOneDevice} from "../http/deviceAPI";
import { useDispatch } from 'react-redux';
import { AddToBasket } from '../components/store/CreateBasket';

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    const dispatch = useDispatch();
    useEffect(() => {
        
     fetchOneDevice(id).then(data => setDevice(data))
    
    }, [])
    useEffect(()=>{
        console.log(device)
    },[device])
const AddToBasketMain = ()=>{

    alert('товар в корзине')
    dispatch(AddToBasket(device))
    
}
    return (
        <Container>
            <Row className='mt-3'>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <Form className='d-flex flex-column align-items-center '>
                        <h2>{device.name}</h2>
                        <div
                            className='d-flex align-items-center justify-content-center'
                            style={{background:`url(${bigStar}) no-repeat center center`, width:240, height:240, backgroundSize: 'cover', fontSize:64}}    
                        >
                            {device.rating}
                        </div>
                    </Form>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{width: 300, height:300, fontSize: 32, border:'5px solid lightgray'}}
                    >
                        <h3>От: {device.price} руб</h3>
                        <Button variant='outline-dark'
                        onClick={AddToBasketMain}
                        >Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h1>Характеристики: </h1>
                {device.info.map( (info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding:10}} >
                        {info.title}: {info.description}
                    </Row> 
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;