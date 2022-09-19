import * as React from 'react';
import CardSummary from "../components/Main-Page/Card-Summary";
import confirmed from "../assets/icons/confirmed.png";
import deaths from "../assets/icons/deaths.png";
import recovered from "../assets/icons/recovered.png";
import { useEffect, useState } from "react";
import { getAllSummary, getSummaryByCountry } from "../providers/Summary";
import {
  backgroundColor,
  textPrimary,
} from "../utils/Color-Pallete";
import { MDBIcon } from "mdb-react-ui-kit";
import { getAllCountries } from "../providers/Country";
import DetailSection from "../components/Main-Page/Detail-Section";
import Loader from "../components/Loader";

export default function MainPage() {
    const [summary, setSummary] = useState({
        isLoading: false
    });
    const [summaryId, setSummaryId] = useState({
        isLoading: false
    });
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState("");
    const [summaryCountry, setSummaryCountry] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getSummary = async () => {
        setSummary({
            ...summary,
            isLoading: true
        })
        const response = await getAllSummary();
        setTimeout(() => {
            setSummary({
                ...summary,
                confirmed: response.confirmed.value,
                recovered: response.recovered.value,
                deaths: response.deaths.value,
                lastUpdate: response.lastUpdate,
                isLoading: false
            });
        }, 1000)
    };

    const getSummaryIndonesia = async () => {
        setSummaryId({
            ...summaryId,
            isLoading: true
        })
        const response = await getSummaryByCountry("id");
        setTimeout(() => {
            setSummaryId({
                ...summaryId,
                confirmed: response.confirmed.value,
                recovered: response.recovered.value,
                deaths: response.deaths.value,
                lastUpdate: response.lastUpdate,
                isLoading: false
            });
        }, 1000)
    };

    const getCountries = async () => {
        const response = await getAllCountries();
        setCountries(response.countries);
    };

    
    useEffect(() => {
        getSummary();
        getSummaryIndonesia();
        getCountries();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getSummaryCountry = async (country) => {
        setIsLoading(true)
        const response = await getSummaryByCountry(country);
        setTimeout(() => {
            setSummaryCountry({
                ...summaryCountry,
                confirmed: response.confirmed.value,
                recovered: response.recovered.value,
                deaths: response.deaths.value,
                lastUpdate: response.lastUpdate,
            });
            setIsLoading(false)
        }, 1000)
    };  

    const handleChange = (e) => {
        if(e.target.value !== ""){
            setCountry(e.target.value);
            getSummaryCountry(e.target.value);
        }
        else {
            setCountry(e.target.value);
        }
    };

    return (
        <div
            className="min-vh-100"
            style={{ backgroundColor: backgroundColor, paddingTop: "70px" }}
        >
        <div className="container">
            <div className="mb-5">
                <h3 className="mb-3" style={{ color: textPrimary }}>
                    Summary
                </h3>
                {
                    summary.isLoading ? 
                    <Loader />
                    :
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <CardSummary
                                    image={confirmed}
                                    title="Total Confirmed"
                                    data={JSON.stringify(summary.confirmed)}
                                    isLoading={summary.isLoading}
                                />
                            </div>
                            <div className="col-auto">
                                <CardSummary
                                    image={recovered}
                                    title="Total Recovered"
                                    data={JSON.stringify(summary.recovered)}
                                    isLoading={summary.isLoading}
                                />
                            </div>
                            <div className="col-auto">
                                <CardSummary
                                    image={deaths}
                                    title="Total Deaths"
                                    data={JSON.stringify(summary.deaths)}
                                    isLoading={summary.isLoading}
                                />
                            </div>
                        </div>
                        <div className="text-end text-muted mt-1">
                            Last Update: {new Date(summary.lastUpdate).toLocaleString('id')}
                        </div>
                    </div>
                }
            </div>
            <div className="mb-5">
            <h3 className="mb-3" style={{ color: textPrimary }}>
                Summary:{" "}
                <span>
                    <MDBIcon flag="id" />
                    Indonesia
                </span>
            </h3>
            {
                summaryId.isLoading ?
                <Loader />
                :
                <div>
                    <div className="row justify-content-center">
                        <div className="col-auto">
                        <CardSummary
                            image={confirmed}
                            title="Total Confirmed"
                            data={JSON.stringify(summaryId.confirmed)}
                        />
                        </div>
                        <div className="col-auto">
                        <CardSummary
                            image={recovered}
                            title="Total Recovered"
                            data={JSON.stringify(summaryId.recovered)}
                        />
                        </div>
                        <div className="col-auto">
                        <CardSummary
                            image={deaths}
                            title="Total Deaths"
                            data={JSON.stringify(summaryId.deaths)}
                        />
                        </div>
                    </div>
                    <div className="text-end text-muted mt-1">
                        Last Update: {new Date(summaryId.lastUpdate).toLocaleString('id')}
                    </div>
                </div>
            }
            </div>
                <DetailSection countries={countries} summaryCountry={summaryCountry} country={country} handleChange={handleChange} isLoading={isLoading}/>
            </div>
        </div>
    );
}
