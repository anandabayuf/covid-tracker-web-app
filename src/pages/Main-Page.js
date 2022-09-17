import CardSummary from "../components/Card-Summary"
import confirmed from "../assets/icons/confirmed.png"
import deaths from "../assets/icons/deaths.png"
import recovered from "../assets/icons/recovered.png"
import { useEffect, useState } from "react";

export default function MainPage () {
    const [data, setData] = useState({});

    useEffect(() => {

    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <CardSummary image={confirmed} title="Total Confirmed" data="1.000.000" />
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