import { React, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import slideImg1 from '../../Rescources/images/slide_4.png';
import slideImg2 from '../../Rescources/images/slide_3.png';
import slideImg3 from '../../Rescources/images/slide_2.png';
import top1Img from '../../Rescources/images/top-1.png';
import top2Img from '../../Rescources/images/top-2.png';
import top3Img from '../../Rescources/images/top-3.png';
import emailjs from '@emailjs/browser';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';

function Main() {
    useEffect(() => {
        document.getElementById('feedback').classList.add('invalnurable')
        document.getElementById('slide3-image').classList.add('slide-animated')
        document.getElementById('slide3-image').classList.remove('invisible')
    }, []);

    function handleChange() {
        document.getElementById('slide1-image').classList.remove('slide-animated')
        document.getElementById('slide1-image').classList.add('invisible')
        document.getElementById('slide2-image').classList.remove('slide-animated')
        document.getElementById('slide2-image').classList.add('invisible')
        document.getElementById('slide3-image').classList.remove('slide-animated')
        document.getElementById('slide3-image').classList.add('invisible')
    }
    
    function handleTransitionEnd() {
        document.getElementById('slide1-image').classList.add('slide-animated')
        document.getElementById('slide1-image').classList.remove('invisible')
        document.getElementById('slide2-image').classList.add('slide-animated')
        document.getElementById('slide2-image').classList.remove('invisible')
        document.getElementById('slide3-image').classList.add('slide-animated')
        document.getElementById('slide3-image').classList.remove('invisible') 
    }

    function handleFeedbackClick() {
        document.getElementById('feedback').classList.remove('invalnurable')
    }

    function handleFeedbackExit() {
        document.getElementById('feedback').classList.add('invalnurable')
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        document.getElementById('feedback').classList.add('invalnurable')

        if (document.getElementById('msg-name').value != "" &&
        document.getElementById('msg-email').value != "" &&
        document.getElementById('msg-content').value != "") {
            emailjs
            .sendForm('service_p1htvur', 'template_10euoce', form.current, {
              publicKey: 'RdaWZeFar97bPbQ7q',
            })
            .then(
              () => {
                console.log('SUCCESS!');
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );
        } else {
            alert("Все поля являются обязательными!")
        }
    };

    return (
        <div className="main">
            <div className="feedback-box" id="feedback">
                <form ref={form} onSubmit={sendEmail} className="feedback">
                    <div onClick={handleFeedbackExit} className="feedback-exit"><p>✖</p></div>
                    <h2>Напишите нам!</h2>
                    <label>Ваше ФИО</label>
                    <input className="info-input" id="msg-name" type="text" name="name" placeholder="Введите ФИО.."/>
                    <label>Ваша электронная почта</label>
                    <input className="info-input" id="msg-email" type="text" name="email" placeholder="Введите электронную почту.."/>
                    <label>Ваш адрес</label>
                    <input className="info-input" id="msg-email" type="text" name="adress" placeholder="Введите адрес.."/>
                    <label>Ваше обращение</label>
                    <textarea className="info-input" id="msg-content" type="text" name="message" placeholder="Введите содержание письма.."/>
                    <button className="send">Отправить</button>
                </form>
            </div>
            <Swiper 
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{delay: 5000}}
            effect='coverflow'
            coverflowEffect={{rotate: 30, slideShadows: true}}
            speed={600}
            onSlideChange={() => handleChange}
            onTransitionEnd={() => handleTransitionEnd}
            onInit={() => document.getElementById('slide1-image').classList.remove('invisible')}
            >
                <SwiperSlide>
                    <div className='slide-contain'>
                        <div className='slide-desc'>
                            <div className='slide-main-text'>
                              <h2 className='title'>Мы всегда вас услышим - оставляйте обращение и оно обязательно будет рассмотрено</h2>
                              <p className='description'></p>
                            </div>
                            <button onClick={handleFeedbackClick} className='return-message-btn'>Напишите нам</button>
                        </div>
                        <img src={slideImg3} alt="" id="slide3-image" className="slide-img" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide-contain'>
                        <div className='slide-desc'>
                            <div className='slide-main-text'>
                                <h2 className='title'>Более 100 видов услуг для вашего комфорта</h2>
                                <p className='description'></p>
                            </div>
                            <ul className='slide-points'>
                                <li><span>Высокое качество исполнения</span></li>
                                <li><span>Низкие цены и оперативная обратная связь</span></li>
                                <li><span>На все работы предостовляется гарантия</span></li>
                            </ul>
                        </div>
                        <img src={slideImg2} alt="" id="slide2-image" className="slide-img" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide-contain'>
                        <div className='slide-desc'>
                            <div className='slide-main-text'>
                                <h2 className='title'>«Наш Дом»: новый стандарт управляющих организаций МО</h2>
                                <p className='description'></p>
                            </div>
                            <ul className='slide-points'>
                                <li><span>Высокий уровень сервиса</span></li>
                                <li><span>Услуги под ключ</span></li>
                                <li><span>Принцип одного окна</span></li>
                            </ul>
                            <a className='return-message-btn' href='https://dom.mosreg.ru/dom' target='_blank'>Подробнее</a>
                        </div>
                        <img src={slideImg1} alt="" id="slide1-image" className="slide-img" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="page-4">
                <h2 className="title-page">Электронная приемная</h2>
                <div className="main-content">
                    <div className="left-box">
                        <h3>Напишите нам!</h3>
                        <p>Если у вас есть какие-то проблемы или вопросы, оставьте сообщение нашей электронной приемной по почте</p>
                    </div>
                    <button onClick={handleFeedbackClick} className="feedback-btn">Напишите нам</button>
                </div>
            </div>
            <div className="page-2">
                <h2 className="title-page">Будьте уверены в своем комфорте - о нем мы позаботимся</h2>
                <div className="main-content">  
                    <div className="main-desc">
                        <div className="main-desc-left">
                            <h3>Краткая информация</h3>
                            <p><span>12 марта 2020г.</span> МУП ГЖЭУ-4 реорганизовано в форме преобразования в <span>«Акционерное общество ГЖЭУ-4»</span> <br/> <br/>(Постановлением Главы городского округа Мытищи от 07.12.2019г..№4887 «Об условиях приватизации муниципального унитарного предприятия «Городское жилищно-эксплуатационное управление №4»).</p>
                        </div>
                        <div className="main-desc-right">
                            <h3>Наши услуги:</h3>
                            <ul>
                                <li><p>Управление жилищным фондом</p></li>
                                <li><p>Эксплуатация жилищного фонда</p></li>
                                <li><p>Предоставление коммунальных услуг</p></li>
                                <li><p>Ремонт и замена сантехоборудования</p></li>
                                <li><p>Газосварочные работы</p></li>
                                <li><p>Установка и обслуживание водосчетчиков</p></li>
                                <li><p>Газосварочные работы</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-bottom-menu">
                        <div className="manage">
                            <div className="manage-content">
                                <h3 className="manage-content-title">Управление жилищным фондом</h3>
                                <a href="../../Rescourses/files/gjeu-dogovor-upravleniya-mkd-red-2020.doc" download>Договор управления многоквартирным домом с приложениями <span>(Скачать)</span></a>
                            </div>
                            <p className="with-arrow">Управление жилищным фондом</p>
                        </div>
                        <div className="manage">
                            <div className="manage-content">
                                <h3 className="manage-content-title">Эксплуатация жилищного фонда</h3>
                                <a href="http://83.222.25.155/assets/housing-stock-exploitation.pdf" download>Перечень услуг и работ по обслуживанию и содержанию <span>(Скачать)</span></a>
                            </div>
                            <p className="with-arrow">Эксплуатация жилищного фонда</p>
                        </div>
                        <div className="manage" id="water">
                            <div className="manage-content">
                                <h3 className="manage-content-title">Установка и обслуживание водосчетчиков</h3>
                                <table border="1" cellpadding="8" cellspacing="0" class="table">
                                    <thead>
                                    <tr>
                                    	<td>
                                    	</td>
                                    	<td>
                                    		<p align="center">
                                    			 Наименование работ
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p align="center">
                                    			 Количество шт.
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p align="center">
                                    			 Cтоимость
                                    		</p>
                                    	</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                    	<td>
                                    		<p align="center">
                                    			 1.
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p>
                                    			 Опломбирование приборов учета
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p align="center">
                                    			 1
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p align="center">
                                    			 1255,57
                                    		</p>
                                    	</td>
                                    </tr>
                                    <tr>
                                    	<td>
                                    		<p align="center">
                                    			 2.
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p>
                                    			 Установка водосчетчиков без учета отключения стояков и без стоимости материалов
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p align="center">
                                    			 1
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p align="center">
                                    			 2942,74
                                    		</p>
                                    	</td>
                                    </tr>
                                    <tr>
                                    	<td>
                                    		<p align="center">
                                    			 3.
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p>
                                    			 Установка водосчетчиков без учета отключения стояков и без стоимости материалов
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p align="center">
                                    			 2
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p align="center">
                                    			 5885,50
                                    		</p>
                                    	</td>
                                    </tr>
                                    <tr>
                                    	<td>
                                    		<p align="center">
                                    			 4.
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p>
                                    			 Установка водосчетчиков без учета отключения стояков и без стоимости материалов
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p align="center">
                                    			 3
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p align="center">
                                    			 8828,24
                                    		</p>
                                    	</td>
                                    </tr>
                                    <tr>
                                    	<td>
                                    		<p align="center">
                                    			 5.
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p>
                                    			 Установка водосчетчиков без учета отключения стояков и без стоимости материалов
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p align="center">
                                    			 4
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p align="center">
                                    			 11770,98
                                    		</p>
                                    	</td>
                                    </tr>
                                    <tr>
                                    	<td>
                                    		<p align="center">
                                    			 6.
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p>
                                    			 Замена водосчетчика без учета отключения стояков и без стоимости материалов
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p align="center">
                                    			 1
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p align="center">
                                    			 3529,82
                                    		</p>
                                    	</td>
                                    </tr>
                                    <tr>
                                    	<td>
                                    		<p align="center">
                                    			 7.
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p>
                                    			 Замена водосчетчика без учета отключения стояков и без стоимости материалов
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p align="center">
                                    			 2
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p align="center">
                                    			 7059,67
                                    		</p>
                                    	</td>
                                    </tr>
                                    <tr>
                                    	<td>
                                    		<p align="center">
                                    			 8.
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p>
                                    			 Замена водосчетчика без учета отключения стояков и без стоимости материалов
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p align="center">
                                    			 3
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p align="center">
                                    			 10589,50
                                    		</p>
                                    	</td>
                                    </tr>
                                    <tr>
                                    	<td>
                                    		<p align="center">
                                    			 9.
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p>
                                    			 Замена водосчетчика без учета отключения стояков и без стоимости материалов
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p align="center">
                                    			 4
                                    		</p>
                                    	</td>
                                    	<td>
                                    		<p align="center">
                                    			 14119,33
                                    		</p>
                                    	</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="with-arrow">Установка и обслуживание водосчетчиков</p>
                        </div>
                    </div>
                    <div className="bottom-bar">
                        <div className="houses bar-item">
                             <div className="bar-contex">
                                 <h2>302 дома</h2>
                                 <p>обслуживаются ежедневно</p>
                             </div>
                             <img src={top1Img} className="bar-item-image"/>
                        </div>
                        <div className="square bar-item">
                             <div className="bar-contex">
                                 <h2>1,1 млн м²</h2>
                                 <p>площадь покрытия</p>
                             </div>
                             <img src={top2Img} className="bar-item-image"/>
                        </div>
                        <div className="families bar-item">
                             <div className="bar-contex">
                                 <h2>40 000+</h2>
                                 <p>семей</p>
                             </div>
                             <img src={top3Img} className="bar-item-image"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-3">
                <h2 className="title-page">Приглашаем на работу!</h2>
                <div className="main-content">
                    <div className="left-content content-item">
                        <h3>Приемные дни</h3>
                        <ul>
                            <li><p className="main-desc">Генеральный директор - <span className="gray-text"><b>Понедельник</b> 15:00-17:00</span></p></li>
                            <li><p className="main-desc">Главный инженер - <span className="gray-text"><b>Среда</b> 15:00-17:00</span></p></li>
                        </ul>
                        <h3>Контакты</h3>
                        <ul>
                            <li><p className="main-desc">Наш адрес: <span className="gray-text"><b>141004, г. Мытищи Московской области, ул. Силикатная, д.16В</b></span></p></li>
                            <li><p className="main-desc">Контактный телефон: <span className="gray-text"><b>+7 (495) 583-57-29</b></span></p></li>
                        </ul>
                    </div>
                    <div className="right-content content-item">
                        <h3>Подразделения</h3>
                        <ul>
                            <li><Link to="/divisions/rsu"><b>РС и СТУ</b> (Ремонтно-строительный и слесарно-технический участок)</Link></li>
                            <li><Link to="/divisions/reu-1"><b>РЭУ-1</b> (Ремонтно-эксплуатационный участок № 1)</Link></li>
                            <li><Link to="/divisions/reu-2"><b>РЭУ-2</b> (Ремонтно-эксплуатационный участок № 2)</Link></li>
                            <li><Link to="/divisions/reu-8"><b>РЭУ-8</b> (Ремонтно-эксплуатационный участок № 8)</Link></li>
                            <li><Link to="/divisions/reu-12"><b>РЭУ-12</b> (Ремонтно-эксплуатационный участок № 12)</Link></li>
                            <li><Link to="/divisions/reu-15"><b>РЭУ-15</b> (Ремонтно-эксплуатационный участок № 15)</Link></li>
                            <li><Link to="/divisions/ads"><b>АДС</b> (Аварийно-диспетчерская служба)</Link></li>
                        </ul>
                    </div>
                    <div className="bottom-menu content-item">
                        <h3>Доступные должности</h3>
                        <div className="list-items">
                            <ul>
                                <li><p><b>Инженер</b> - з/п от 55 тыс. руб. </p></li>
                                <li><p><b>Инженер-сметчик</b> - з/п от 40 тыс. руб. </p></li>
                                <li><p><b>Техник - смотритель</b> - з/п от 40 тыс. руб. </p></li>
                                <li><p><b>Мастер по благоустройству и содержанию территорий</b> - з/п от 45 тыс. руб.</p></li>
                                <li><p><b>Электромонтер</b> - з/п от 60 тыс. руб. </p></li>
                                <li><p><b>Электрогазосварщик</b> - з/п от 80 тыс. руб. </p></li>
                            </ul>
                            <ul>
                                <li><p><b>Слесарь-сантехник</b> - з/п от 50 тыс. руб. </p></li>
                                <li><p><b>Кровельщик</b> - з/п от 60 тыс. руб. </p></li>
                                <li><p><b>Плотник</b> - з/п от 40 тыс. руб. </p></li>
                                <li><p><b>Подсобный рабочий</b> - з/п от 40 тыс. руб. </p></li>
                                <li><p><b>Дворник</b> - з/п от 55 тыс. руб. </p></li>
                                <li><p><b>Уборщик лестничных клеток</b> - з/п от 40 тыс. руб. </p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
