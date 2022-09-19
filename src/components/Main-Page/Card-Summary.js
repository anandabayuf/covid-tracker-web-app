import * as React from 'react';
import { textPrimary } from "../../utils/Color-Pallete";

export default function CardSummary(props) {
    const cardStyle = {
        width: "350px",
        border: "none",
        padding: "10px",
        borderRadius: "20px",
        backgroundColor: props.title === "Total Confirmed" ? "#ffc107" : props.title === "Total Recovered" ?  "#198754" : "#dc3545"
    }

    const cardTitleStyle = {
        color: textPrimary
    }

    const cardTextStyle = {
        color: textPrimary,
        fontWeight: "bold"
    }

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return (
        <div className="card mb-3 shadow" style={cardStyle}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.image} className="img-fluid rounded-start" alt={props.image}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title" style={cardTitleStyle}>{props.title || ""}</h5>
                        <h3 className="card-text text-end" style={cardTextStyle}>{numberWithCommas(props.data || "")}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}