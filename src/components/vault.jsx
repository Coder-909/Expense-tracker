import React from "react"
import ReactDOM from "react-dom"

export default function Vault(){
    return (
        <div id="vault">
            <div id="left-side">
                <h2>Total balance:</h2>
                <p id="total-amount">1,53,098</p>
                <div className="balance-change">
                    <span className="balance-change-symbol green">^</span>
                    <p className="balance-change-amount green">1500</p>
                </div>
            </div>
            <div id ="right-side">
                <div className="card">
                    <h2 className="name-of-storage">Bank of baroda</h2>
                    <p className="specific-amount"></p>
                    <div className="balance-change">
                        <span className="balance-change-symbol green">^</span>
                        <p className="balance-change-amount green">1500</p>
                    </div>                
                </div>
            </div>
        </div>
    )
}