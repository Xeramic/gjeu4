import React from "react";

function Service(props) {
    return (
        <div className="service">
            <h2>{props.name}</h2>
            <p>Цена: {props.price}руб</p>
        </div>
    )
}

export default Service;