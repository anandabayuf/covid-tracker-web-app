import * as React from 'react';
import {Envelope, Whatsapp} from "react-bootstrap-icons"
import { textPrimary, otherColor } from "../../utils/Color-Pallete"

export default function CardPerson(props){
    const cardStyle = {
        width: "410px",
        border: "none",
        padding: "10px",
        borderRadius: "20px",
        backgroundColor: otherColor,
    }
    
    const cardTitleStyle = {
        color: textPrimary,
        fontWeight: "bold"
    }

    const cardTextStyle = {
        color: textPrimary,
        fontSize: "14px"
    }
    return (
        <div className="col-auto" key={props.index}>
            <div className="card mb-3 shadow" style={cardStyle}>
            <div className="row g-0">
                <div className="col-md-3 align-self-center">
                    <img src={props.person.pic} className="img-fluid rounded-circle" alt={props.person.name}/>
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <p className="card-title p-0 m-0" style={cardTitleStyle}>{props.person.name || ""}</p>
                        <p className="card-text p-0 m-0" style={cardTextStyle}><span><Envelope />: {props.person.email || ""}</span></p>
                        <p className="card-text p-0 m-0" style={cardTextStyle}><span><Whatsapp />: {props.person.wa || ""}</span></p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}