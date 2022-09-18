import { textPrimary } from "../../utils/Color-Pallete"
import CardSummary from "../Card-Summary"
import confirmed from "../../assets/icons/confirmed.png"
import deaths from "../../assets/icons/deaths.png"
import recovered from "../../assets/icons/recovered.png"
export default function DetailSection(props){
    return (
        <div>
            <h3 className="mb-3" style={{color: textPrimary}}>Details</h3>
            <h5 className="mb-3" style={{color: textPrimary}}>Select Country to see details</h5>
            <select className="form-select mb-5 shadow" onChange={props.handleChange} style={{borderRadius: "10px"}}>
                <option value="">Select Countries</option>
                {
                    props.countries.map((country, index) => {
                        return (
                            <option value={country.iso3} key={index}>{country.name}</option>
                        )
                    })
                }
            </select>
            {
                props.summaryCountry === null ?
                <div></div>
                :
                <div>
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <CardSummary image={confirmed} title="Total Confirmed" data={JSON.stringify(props.summaryCountry.confirmed)} />
                        </div>
                        <div className="col-auto">
                            <CardSummary image={recovered} title="Total Recovered" data={JSON.stringify(props.summaryCountry.recovered)} />
                        </div>
                        <div className="col-auto">
                            <CardSummary image={deaths} title="Total Deaths" data={JSON.stringify(props.summaryCountry.deaths)} />
                        </div>
                    </div>
                    <div className="text-end text-muted mt-1">
                        Last Update: {(new Date(props.summaryCountry.lastUpdate)).toLocaleString('id')}
                    </div>
                </div>
            }
        </div>
    )
}