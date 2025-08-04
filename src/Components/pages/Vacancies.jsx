import { React, useRef, useEffect } from "react";
import Vacancy from "./vacancies/Vacancy";
import emailjs from '@emailjs/browser';

function Vacancies() {
    let input
    let text
    let file

    useEffect(() => {
        document.getElementById('anketa').classList.add('invalnurable')
        input = document.getElementById('file-field')
        text = document.getElementById('file-text')
        console.log(input, text)
    }, []);

    const form = useRef();

    function handleFeedbackExit() {
        document.getElementById('anketa').classList.add('invalnurable')
    }

    function handleFeedbackClick() {
        document.getElementById('anketa').classList.remove('invalnurable')
    }

    function handleChange() {
        file = input.files[0]
        text.innerHTML = file.name
    }

    const sendEmail = (e) => {
        e.preventDefault();

        document.getElementById('anketa').classList.add('invalnurable')

        if (document.getElementById('field').value != "") {
            emailjs
            .sendForm('service_p1htvur', 'template_n0gnrja', form.current, {
              publicKey: 'RdaWZeFar97bPbQ7q',
            })
            .then(
              () => {
                console.log('SUCCESS!');
              },
              (error) => {
                console.log('FAILED...', error.text);
              }
            );
        } else {
            alert("Все поля являются обязательными!")
        }
    };

    return (
        <div className="-vacancies-1">
            <div className="anketa" id='anketa'>
                <form ref={form} onSubmit={sendEmail} className="anketa-form">
                    <div onClick={handleFeedbackExit} className="anketa-exit"><p>✖</p></div>
                    <h2>Заполните анкету</h2>
                    <label>На какую должность претендуете</label>
                    <select name='vacancy' className='info-input vacancy'>
                        <option value='Инженер'>Инженер</option>
                        <option value='Инженер-сметчик'>Инженер-сметчик</option>
                        <option value='Техник-смотритель'>Техник-смотритель</option>
                        <option value='Электромонтер'>Электромонтер</option>
                        <option value='Электрогазосварщик'>Электрогазосварщик</option>
                        <option value='Слесарь-сантехник'>Слесарь-сантехник</option>
                        <option value='Кровельщик'>Кровельщик</option>
                        <option value='Плотник'>Плотник</option>
                        <option value='Подсобный рабочий'>Подсобный рабочий</option>
                        <option value='Дворник'>Дворник</option>
                        <option value='Уборщик лестничных клеток'>Уборщик лестничных клеток</option>
                    </select>
                    <label>Ваши ФИО</label>
                    <input className="info-input" id='field' type="text" name="name" placeholder="Введите ФИО.."/>
                    <label>Ваш контактный телефон</label>
                    <input className="info-input" id='field' type="text" name="tel" placeholder="Введите контактный телефон.."/>
                    <label>Ваша электронная почта</label>
                    <input className="info-input" id='field' type="text" name="email" placeholder="Введите электронную почту.."/>
                    {/* <label>Ваше резюме</label>
                    <label className="input-file">
                        <span className="input-file-text" id="file-text" type="text"></span>
                        <input type="file" id='file-field' name="resume" onChange={handleChange}/>
                        <span className="input-file-btn">Выберите файл</span>
                    </label> */}
                    <button className="send">Отправить</button>                    
                </form>
            </div>
            <div className="-vacancies-main">
                <h1>Приглашаем вас на работу (<a className='anketa-active' id='anketa-activate' onClick={handleFeedbackClick}>заполнить анкету</a>)</h1>
                <div className="-vacancies-inner">
                    <Vacancy onClick={handleFeedbackClick} name="Инженер" salary="З/П от 55 тыс. руб. " />
                    <Vacancy onClick={handleFeedbackClick} name="Инженер-сметчик" salary="З/П от 40 тыс. руб. " />
                    <Vacancy onClick={handleFeedbackClick} name="Техник-смотритель" salary="З/П от 40 тыс. руб. " />
                    <Vacancy onClick={handleFeedbackClick} name="Электромонтер" salary="З/П от 60 тыс. руб. " />
                    <Vacancy onClick={handleFeedbackClick} name="Электрогазосварщик" salary="З/П от 80 тыс. руб. " />
                    <Vacancy onClick={handleFeedbackClick} name="Слесарь-сантехник" salary="З/П от 50 тыс. руб. " />
                    <Vacancy onClick={handleFeedbackClick} name="Кровельщик" salary="З/П от 60 тыс. руб. " />
                    <Vacancy onClick={handleFeedbackClick} name="Плотник" salary="З/П от 40 тыс. руб. " />
                    <Vacancy onClick={handleFeedbackClick} name="Подсобный рабочий" salary="З/П от 40 тыс. руб. " />
                    <Vacancy onClick={handleFeedbackClick} name="Дворник" salary="З/П от 55 тыс. руб. " />
                    <Vacancy onClick={handleFeedbackClick} name="Уборщик лестничных клеток" salary="З/П от 40 тыс. руб. " />
                </div>
                <div className="-vacancies-number">
                    <div><p>Телефон отдела кадров:</p></div>
                    <div><p id="underline">+7 (495) 583-57-29</p></div>
                </div>
                
            </div>
        </div>
    )
}

export default Vacancies;