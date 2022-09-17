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
        console.log(response)
        setData(response)
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <CardSummary image={confirmed} title="Total Confirmed" data={JSON.stringify(data.confirmed.value) || ""} />
                </div>
                <div className="col-4">
                    <CardSummary image={recovered} title="Total Recovered" data="1.000.000" />
                </div>
                <div className="col-4">
                    <CardSummary image={deaths} title="Total Deaths" data="1.000.000" />
                </div>
            </div>
        </div>
    )
}