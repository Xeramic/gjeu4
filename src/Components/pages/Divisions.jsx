import React from "react";
import { Link } from 'react-router-dom';

function Divisions() {
    return (
        <div className="division-left-menu">
            <Link to="/divisions/admin"><b>Администрация</b></Link>
            <div className="bar">
                <Link to="/divisions/rsu"><b>РС и СТУ</b></Link>
                <Link to="/divisions/reu-1">РЭУ-1</Link>
                <Link to="/divisions/reu-2">РЭУ-2</Link>
                <Link to="/divisions/reu-8">РЭУ-8</Link>
                <Link to="/divisions/reu-12">РЭУ-12</Link>
                <Link to="/divisions/reu-15">РЭУ-15</Link>
                <Link to="/divisions/ads">АДС</Link>
            </div>
        </div>
    )
}

export default Divisions;