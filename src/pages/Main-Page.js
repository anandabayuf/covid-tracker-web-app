import CardSummary from "../components/Card-Summary"
import confirmed from "../assets/icons/confirmed.png"
import deaths from "../assets/icons/deaths.png"
import recovered from "../assets/icons/recovered.png"

export default function MainPage () {

    return (
        <div className="row mr-2">
            <div className="col-3 mr-2">
            <CardSummary image={confirmed} title="Total Confirmed" data="1.000.000" />
            </div>
            <div className="col-3">
            <CardSummary image={recovered} title="Total Recovered" data="1.000.000" />
            </div>
            <div className="col-3">
            <CardSummary image={deaths} title="Total Deaths" data="1.000.000" />
            </div>
        </div>
        
    )
}