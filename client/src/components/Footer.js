import React from 'react';
import {observer} from "mobx-react-lite";
import '../style/Main.css'
import {useNavigate} from 'react-router-dom'
import {Button} from "react-bootstrap";
import {BASKET_ROUTE, SHOP_ROUTE, MAIN_ROUTE} from "../utils/consts";
import vk from '../img/vkontakte.png'
import inst from '../img/instagram.png'
import tel from '../img/telegram.png'
import fac from '../img/facebook.png'



const Footer = observer(() => {
    const history = useNavigate()

    return (
        <footer className="footer">
        <div className="wrapper-footer">
           <div className="lifooter">
              <div className="firstpartlifooter">
                <p>Lucrum-shop</p>
                <p>+375(44)464-37-84</p>
              </div>
              <div className="secondpartlifooter">
                <Button variant={"dark"} onClick={ () => history(MAIN_ROUTE)}>Главная</Button>
                <Button variant={"dark"} onClick={ () => history(BASKET_ROUTE)}>Корзина</Button>
                <Button variant={"dark"} onClick={ () => history(SHOP_ROUTE)}>Каталог</Button>
              </div>
              <div className="thirdpartlifooter">
                <div className='fir'>
                    <img src={inst} width={50} className="pointer"/>
                    <img src={vk} width={50} className="pointer"/>
                </div>
                <div className='sec'>
                    <img src={tel} width={50} className="pointer"/>
                    <img src={fac} width={50} className="pointer"/>
                </div>
              </div>
           </div>
        </div>
     </footer>
    );
});

export default Footer;