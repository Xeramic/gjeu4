import React from "react";
import pict1 from '../../Rescources/images/big.png'
import pict2 from '../../Rescources/images/top-1.png'
import pict3 from '../../Rescources/images/top-2.png'
import pict4 from '../../Rescources/images/top-3.png'

function About() {
    return (
        <div className="-about-main">
            <div className="-about-1">
                <div className="inner-about-1">
                    <div className="info">
                        <h2>О компании</h2>
                        <span>Управляющая организация АО «ГЖЭУ-4» специализируется на эксплуатации многоквартирных домов, осуществляя инженерное и санитарное обслуживание и работы по благоустройству территории</span>
                    </div>
                    <div className="picture">
                        <img src={pict1} alt="" />
                    </div>
                </div>
            </div>
            <div className="-about-2">
                <div className="inner-about-2">
                    <div className="stat">
                        <ul className="stat-list">
                            <li>
                                <div className="wr">
                                    <div className="inf">
                                        <span>302</span>
                                        дома
                                    </div>
                                    <div className="img">
                                        <img src={pict2} alt="" />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="wr">
                                    <div className="inf">
                                        <span>1,1</span>
                                        млн м²
                                    </div>
                                    <div className="img">
                                        <img src={pict3} alt="" />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="wr">
                                    <div className="inf">
                                        <span>40 000+</span>
                                        семей
                                    </div>
                                    <div className="img">
                                        <img src={pict4} alt="" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="info">
                        <div><p>Главные принципы в организации работы всех подразделений <b>АО ГЖЭУ-4</b>, которые являются залогом успеха всех начинаний - профессиональный подход, <b>высокое качество</b> в работе, постоянное расширение спектра услуг.</p></div>
                        <div><p><b>Коллектив АО ГЖЭУ-4</b> - это сплоченная команда профессионалов, способных решить самые сложные задачи, стоящие перед жилищно-коммунальной отраслью. На предприятии особое место отводится <b>подбору кадров</b>, профессиональной <b>подготовке специалистов</b>, <b>оснащению производства</b> современными техническими средствами, <b>внедрению</b> современных <b>технологий</b>.</p></div>
                        <div><p>Управляющая организация <b>АО ГЖЭУ-4</b> непрерывно развивается, набирает мощь, укрепляет свои позиции на рынке жилищно-коммунальных услуг.</p></div>
                        <div><p>Благодаря правильно выбранной и четко продуманной <b>стратегии</b> в деятельности предприятия осваиваются новые направления работы, достигается <b>максимальной высокий</b> уровень обслуживания, обеспечивается <b>финансовая устойчивость</b>, продолжается уверенное <b>движение вперед</b>, к достижению новых целей.</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;