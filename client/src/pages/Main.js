import React from "react";
import { Slider } from "../components/Slider.js";
import "../style/Main.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {SHOP_ROUTE} from "../utils/consts";
import {useNavigate} from 'react-router-dom'
import card from '../assets/Card.jpg'
import vig from '../assets/Vig.jpg'
import choose from '../assets/Choose.jpg'
import qua from '../assets/Quality.jpg'

const Main = () => {
    const history = useNavigate()
    
  return (
    <section>
      <div>
        <Slider />
        <hr className="line"></hr>
        <div className="list">
        <Card style={{ width: "18rem" }}>
          <Card.Img width={50} height={200} src={card} />
          <Card.Body>
            <Card.Title>Удобно оплачивать</Card.Title>
            <Card.Text>
            Вы можете рассчитаться за покупку наличными деньгами или банковской картой при доставке,
             произвести оплату карточкой онлайн или оформить безналичный расчет — при этом цена не изменится.
            </Card.Text>
            <Button onClick={ () => history(SHOP_ROUTE) } variant="outline-dark">Скорее за покупками !!!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img width={50} height={200} src={vig} />
          <Card.Body>
            <Card.Title>Всегда честные цены</Card.Title>
            <Card.Text>
            Вы можете быть уверены: информация о цене и наличии товара всегда актуальна.
             Данные, указанные на сайте, обновляются автоматически.
            </Card.Text>
            <Button onClick={ () => history(SHOP_ROUTE) } variant="outline-dark">Скорее за покупками !!!</Button>
          </Card.Body>
        </Card>{" "}
        <Card style={{ width: "18rem" }}>
          <Card.Img width={50} height={180} src={choose} />
          <Card.Body>
            <Card.Title>Выбирать — одно удовольствие</Card.Title>
            <Card.Text>
            В нашем каталоге вы найдете подробные и достоверные описания и фотографии товаров.
             Наши профессиональные консультанты всегда готовы помочь вам советом и предоставить дополнительную информацию.
            </Card.Text>
            <Button onClick={ () => history(SHOP_ROUTE) } variant="outline-dark">Скорее за покупками !!!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img width={50} height={200} src={qua} />
          <Card.Body>
            <Card.Title>Мы гарантируем качество</Card.Title>
            <Card.Text> 
            В нашем онлайн-гипермаркете вы купите только сертифицированный товар по выгодным ценам.
             К каждой покупке прилагается кассовый чек — ваша защита как потребителя.
            </Card.Text>
            <Button onClick={ () => history(SHOP_ROUTE) } variant="outline-dark">Скорее за покупками !!!</Button>
          </Card.Body>
        </Card>
        </div>
      </div>
    </section>
  );
};

export default Main;
