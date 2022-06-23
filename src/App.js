import React from "react"
import Rice from "./Rice"
import {riceData} from "./riceData"

export default function App() {
    const riceTypes = riceData.map(rice => {
        return <Rice type={rice.type} />
    })
    return (
        <div>
           {riceTypes} 
        </div>
    )
}