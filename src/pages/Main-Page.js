import CardSummary from "../components/Card-Summary"
import confirmed from "../assets/icons/confirmed.png"
import deaths from "../assets/icons/deaths.png"
import recovered from "../assets/icons/recovered.png"
import { useEffect, useState } from "react";
import { getSummary } from "../providers/Summary";

export default function MainPage () {
    const [data, setData] = useState({});
    
    const getData = async () => {
        const response = await getSummary();
        setData({
            confirmed: response.confirmed.value,
        })
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <CardSummary image={confirmed} title="Total Confirmed" data={JSON.stringify(data.confirmed)} />
                </div>
                <div className="col-4">
                    <CardSummary image={recovered} title="Total Recovered" data={JSON.stringify(data.recovered.value) || ""} />
                </div>
                <div className="col-4">
                    <CardSummary image={deaths} title="Total Deaths" data={JSON.stringify(data.deaths.value) || ""} />
                </div>
            </div>
        </div>
    )
}