import React, { useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import logo from '../../Rescources/images/logo.svg'
import gjeu4logo from '/files/logo.png'

function Layout() {
    let button
    let routing

    useEffect(() => {
        button = document.querySelector(".phone-menu")
        routing = document.querySelector(".routing")
        const links = document.getElementsByClassName("link")
        for (let i = 0; i < links.length; i++) {
            const elem = links[i];
            elem.addEventListener("click", () => {
                routing.classList.remove("active")
            })
        }
    }, [])

    function handleClick() {
        routing.classList.toggle("active")
    }

    function handleFeedbackClick() {
        document.getElementById('feedback').classList.remove('invalnurable')
    }

    return (
        <>
            <div className="header" id='header'>
                <div className='header-info'>
                    <div className='sub-header-info' id='images'>
                        <a className='link-img' target='_blank' href='https://dom.mosreg.ru/dom'><img src={logo} alt="" /></a>
                        <img id="main-logo" src={gjeu4logo} alt="" />
                    </div>
                    <div className='sub-header-info no-phone'>
                        <div className='v to-copy'>+7 (495) 583-57-29</div>
                        <div className='k'>Контактный телефон</div>
                    </div>
                    <div className='sub-header-info no-phone'>
                        <a target='_blank' href='mailto:info@gjeu-4.ru' className='v'>info@gjeu-4.ru</a>
                        <div className='k'>Сервисная почта</div>
                    </div>
                    <div className='sub-header-info no-phone'>
                        <a target='_blank' href='https://yandex.ru/maps/10740/mytischi/?ll=37.776565%2C55.929078&mode=poi&poi%5Bpoint%5D=37.776472%2C55.929095&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1006444961&z=17.85' className='v'>ул. Силикатная, д.16В</a>
                        <div className='k'>Наш адрес</div>
                    </div>
                    <div className='sub-header-info phone'>
                        <div className='phone-menu' onClick={handleClick}>
                            ≡
                        </div>
                    </div>
                </div>

                <ul className="routing">
                    <li>
                        <Link className={'link'} to="/">Главная</Link>
                    </li>
                    <li>
                        <Link className={'link'} to="/about">О компании</Link>
                    </li>
                    <li>
                        <Link className={'link'} to="/divisions/admin">Подразделения</Link>
                    </li>
                    <li>
                        <Link className={'link'} to="/services">Услуги</Link>
                    </li>
                    <li>
                        <Link className={'link'} to="/disclosure">Раскрытие информации</Link>
                    </li>
                    <li>
                        <Link className={'link'} to="/vacancies">Вакансии</Link>
                    </li>
                    <li className='phones-routing'>
                        {/* <div>
                            <p className='to-copy'>+7 (495) 584-00-00</p>
                            <span>Диспетчерская служба</span>
                        </div> */}
                        <div>
                            <p className='to-copy'>+7 (495) 583-57-29</p>
                            <span>Контактный телефон</span>
                        </div>
                    </li>
                </ul>
            </div>
            <h2 className='warning'>Это новая версия сайта! Она может содержать неполную информацию. При необходимости посетите старый сайт: <a href="https://gjeu-4.ru/" target='_blank'>https://gjeu-4.ru/</a></h2>
            <Outlet />
        </>
    );
}

export default Layout;