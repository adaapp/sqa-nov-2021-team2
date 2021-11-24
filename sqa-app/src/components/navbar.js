import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
    return (
        <div>
            <li>
                <Link to="/">Encryption 1</Link>
            </li>
            <li>
                <Link to="/Encryption 2">Encryption 2</Link>
            </li>
            <li>
                <Link to="/Encryption 3">Encryption 3</Link>
            </li>
            <li>
                <Link to="/Encryption 4">Encryption 4</Link>
            </li>
        </div>
    );
}
export default navbar;