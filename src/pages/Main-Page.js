import CardSummary from "../components/Card-Summary"
import confirmed from "../assets/icons/confirmed.png"
import deaths from "../assets/icons/deaths.png"
import recovered from "../assets/icons/recovered.png"
import { useEffect, useState } from "react";
import { getSummary } from "../providers/Summary";
import { backgroundColor, textPrimary } from "../utils/Color-Pallete";

export default function MainPage () {
    const [data, setData] = useState({});
    
    const getData = async () => {
        const response = await getSummary();
        setData({
            confirmed: response.confirmed.value,
            recovered: response.recovered.value,
            deaths: response.deaths.value
        })
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <div className="min-vh-100" style={{backgroundColor: backgroundColor, paddingTop: "70px"}}>
            <div className="container">
                <h3 className="mb-3" style={{color: textPrimary}}>Summary</h3>
                <div className="row">
                    <div className="col-4">
                        <CardSummary image={confirmed} title="Total Confirmed" data={JSON.stringify(data.confirmed)} />
                    </div>
                    <div className="col-4">
                        <CardSummary image={recovered} title="Total Recovered" data={JSON.stringify(data.recovered)} />
                    </div>
                    <div className="col-4">
                        <CardSummary image={deaths} title="Total Deaths" data={JSON.stringify(data.deaths)} />
                    </div>
                </div>
            </div>
        </div>
    )
}