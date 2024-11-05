import React from "react"
import ReactDOM from "react-dom"

export default function Vault(){
    const Vault = [
        {
            "storage-name":"Bank of baroda",
            "specific-amount":15000
        }
    ]
    
    const vault_element = Vault.map(item => {
        return (
                <div className="card">
                    <h2 className="name-of-storage">{item["storage-name"]}</h2>
                    <p className="specific-amount">{item["specific-amount"]}</p>              
                </div>
        )
    })

    return (
        <div id="vault">
            <div id="left-side">
                <h2>Total balance:</h2>
                <p id="total-amount">1,53,098</p>
                <div className="balance-change">
                    <div className="box-1">
                        <span className="balance-change-symbol green">^</span>
                        <p className="balance-change-amount green">1500</p>
                    </div>
                </div>
            </div>
            <div id ="right-side">
                {vault_element}
            </div>
        </div>
    )
}