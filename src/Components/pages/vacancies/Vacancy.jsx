import React from "react";

function Vacancy(props) {
    return (
        <div className="-vacancy-card" onClick={props.onClick}>
            <div>
                <h2>{props.name}</h2>
                <img src={props.img} alt="" />
            </div>
            <p>{props.salary}</p>
        </div>
    )
}

export default Vacancy;