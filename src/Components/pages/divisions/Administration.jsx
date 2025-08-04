import React from "react";
import gendir from '../../../Rescources/images/portrets/gendir.jpg';
import zamdir1 from '../../../Rescources/images/portrets/Elmova_Elena.jpg';
import profkom from '../../../Rescources/images/portrets/zalalova.jpg';
import proizvod from '../../../Rescources/images/portrets/mashay.jpg';
import urotder from '../../../Rescources/images/portrets/volin.jpg';
import planeconom from '../../../Rescources/images/portrets/navarnova.jpg';
import energetic from '../../../Rescources/images/portrets/kuzmichev.jpg';
import otdelkadrov from '../../../Rescources/images/portrets/Vorobeva_Marina_Petrovna.jpg';
import Divisions from "../Divisions";

function Ads() {
    return (
        <div className="rsu-division">
            <Divisions />
            <div className="division-content">
                <h2 className="title">Администрация</h2>
                <div className="main-desc">
                    <ul className="portrets-list">
                        <p><b>Адрес:</b> 141004 М.О. г.Мытищи ул.Силикатная д.16-В</p>
                        <li>
                            <img className="avatar" src={gendir} alt="" />
                            <div className="portret-desc">
                                <h3>Генеральный директор</h3>
                                <p>Агеев Антон Филиппович</p>
                            </div>
                        </li>
                        <li>
                            {/* <img className="avatar" src={geninj} alt="" /> */}
                                <div className="portret-desc">
                                <h3>Главный инженер</h3>
                                <p></p>
                            </div>
                        </li>
                        <li>
                            <img className="avatar" src={profkom} alt="" />
                            <div className="portret-desc">
                                <h3>Заместитель генерального директора</h3>
                                <p>Залялова Виктория Валерьевна</p>
                            </div>
                        </li>
                        <li>
                            <img className="avatar" src={zamdir1} alt="" />
                            <div className="portret-desc">
                                <h3>Заместитель генерального директора</h3>
                                <p>Эльмова Елена Михайловна</p>
                            </div>
                        </li>
                        <li>
                            <div className="portret-desc">
                                <h3>Главный бухгалтер</h3>
                                <p>Провоторова Юлия Николаевна</p>
                            </div>
                        </li>
                        <li>
                            <img className="avatar" src={proizvod} alt="" />
                            <div className="portret-desc">
                                <h3>Начальник производственно-технического отдела</h3>
                                <p>Машай Светлана Владимировна</p>
                            </div>
                        </li>
                        <li>
                            <img className="avatar" src={urotder} alt="" />
                            <div className="portret-desc">
                                <h3>Начальник юридического отдела</h3>
                                <p>Волин Николай Иванович</p>
                            </div>
                        </li>
                        <li>
                            <img className="avatar" src={planeconom} alt="" />
                            <div className="portret-desc">
                                <h3>Начальник планово-экономического отдела</h3>
                                <p>Наварнова Екатерина Сергеевна</p>
                            </div>
                        </li>
                        <li>
                            <img className="avatar" src={energetic} alt="" />
                            <div className="portret-desc">
                                <h3>Главный энергетик</h3>
                                <p>Кузьмичев Иван Дмитриевич</p>
                            </div>
                        </li>
                        <li>
                            <img className="avatar" src={otdelkadrov} alt="" />
                            <div className="portret-desc">
                                <h3>Начальник отдела кадров</h3>
                                <p>Воробьева Марина Петровна</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Ads;