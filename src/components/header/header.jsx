import React from "react";
import ReactDOM from "react-dom";

export default function Header(){
    return(             
        <header>
            <h1>Expense Tracker</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Vault</a></li>
                <li><a href="#">Tracker</a></li>
            </ul>
        </header>
    )
}