import { otherColor, textPrimary, textSecondary } from "../utils/Color-Pallete";

export default function CardSummary(props) {
    const cardStyle = {
        maxWidth: "310px",
        border: "none",
        padding: "10px",
        borderRadius: "20px",
        backgroundColor: otherColor
    }

    const cardTitleStyle = {
        color: textPrimary
    }

    const cardTextStyle = {
        color: textSecondary,
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