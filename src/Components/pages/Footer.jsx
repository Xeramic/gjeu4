import React from "react";
import logo from '../../Rescources/images/logo.svg';

function Footer() {
    return (
        <div className='-foot'>
            <div className='-inner'>
                <div className='top'>
                    <div className="sub-top-img">
                        <p><a className="left-bar-link" href="/"><img src={logo} alt="" /></a></p>
                    </div>
                    <div className="sub-top">
                        <div className="-info">
                            <p><a className="left-bar-link v" href="https://yandex.ru/maps/10740/mytischi/?ll=37.776565%2C55.929078&mode=poi&poi%5Bpoint%5D=37.776472%2C55.929095&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1006444961&z=17.85" target="_blank">ул. Силикатная, д.16В</a></p>
                            <p className="subtitle">Наш адрес</p>
                        </div>
                        <div className="-info">
                            <p><a className="left-bar-link v" href="mailto:info@gjeu-4.ru" target="_blank">info@gjeu-4.ru</a></p>
                            <p className="subtitle">Сервисная почта</p>
                        </div>
                    </div>
                    <div className="sub-top">
                        <a href="/about" className="page-link">О компании</a>
                        <a href="/divisions/rsu" className="page-link">Подразделения</a>
                        <a href="" className="page-link">Услуги</a>
                    </div>
                    <div className="sub-top">
                        <a href="" className="page-link">Информация</a>
                        <a href="" className="page-link">Раскрытие информации</a>
                        <a href="" className="page-link">Вакансии</a>
                    </div>
                    <div className="sub-top">
                        <div className="-info">
                            <p className="v">+7 (495) 583-57-29</p>
                            <p className="subtitle">Контактный телефон</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;