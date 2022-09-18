export default function CardSummary(props) {
    const cardStyle = {
        maxWidth: "300px"
    }

    return (
        <div className="card mb-3 shadow" style={cardStyle}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.image} className="img-fluid rounded-start" alt={props.image}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title || ""}</h5>
                        <h3 className="card-text text-end">{props.data}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}