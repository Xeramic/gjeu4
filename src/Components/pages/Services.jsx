import { React, useEffect, useState } from "react";
import Service from './services/Service.jsx';

function Services() {
    const [santech, setSantech] = useState();
    const [electric, setElectric] = useState();
    const [plotnitzkie, setPlotnitzkie] = useState();
    const [water, setWater] = useState();

    function displayElem(id, classname, displayMode) {
        let arr = [...document.getElementsByClassName(classname)]

        arr.forEach(e => {
            e.style.display = "none"
        })

        document.getElementById(id).style.display = displayMode
    }

    async function getServices() {
        const response = await fetch("http://83.222.25.155/assets/documents/services.json")
        const json = await response.json()
        console.log(json)
        let output = []

        const santechServs = json.santech
        output = []
        santechServs.forEach(e => {
            output.push(<Service name={e.name} price={e.price} />)
        })
        setSantech(output)
        
        const electricServs = json.electric
        output = []
        electricServs.forEach(e => {
            output.push(<Service name={e.name} price={e.price} />)
        })
        setElectric(output)

        const plotnitzkieServs = json.plotnitzkie
        output = []
        plotnitzkieServs.forEach(e => {
            output.push(<Service name={e.name} price={e.price} />)
        })
        setPlotnitzkie(output)

        const waterServs = json.water
        output = []
        waterServs.forEach(e => {
            output.push(<Service name={e.name} price={e.price} />)
        })
        setWater(output)
    }

    useEffect(() => {
        getServices()
    }, []);

    return (
        <div>
            <div className="-services-1">
                <div className="-services-gui">
                    <div onClick={() => displayElem("1", "-services-group", "flex")}>
                        <h2 >Сантехника и отопление</h2>
                    </div>
                    <div onClick={() => displayElem("2", "-services-group", "flex")}>
                        <h2 >Электрика</h2>
                    </div>
                    <div onClick={() => displayElem("4", "-services-group", "flex")}>
                        <h2 >Плотницкие работы</h2>
                    </div>
                    <div onClick={() => displayElem("5", "-services-group", "flex")}>
                        <h2 >Установка и обслуживание водосчетчиков</h2>
                    </div>
                    <div className="pricelist-down">
                        <h2>Скачать прайс-лист</h2>
                    </div>
                </div>
                <div className="-services-container">
                    <div id="1" className="-inner-services -services-group">
                        <h1>Сантехника и отопление</h1>
                        <div className="-services-grid">
                            {santech}
                        </div>
                    </div>
                    <div id="2" className="-inner-services -services-group">
                        <h1>Электрика</h1>
                        <div className="-services-grid">
                            {electric}
                        </div>
                    </div>
                    <div id="3" className="-inner-services -services-group">
                        <h1>Информационные услуги</h1>
                        <div className="-services-grid">
                        </div>
                    </div>
                    <div id="4" className="-inner-services -services-group">
                        <h1>Плотницкие работы</h1>
                        <div className="-services-grid">
                            {plotnitzkie}
                        </div>
                    </div>
                    <div id="5" className="-inner-services -services-group">
                        <h1>Установка и обслуживание водосчетчиков</h1>
                        <div className="-services-grid">
                            {water}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;