import CardSummary from "../components/Card-Summary";
import confirmed from "../assets/icons/confirmed.png";
import deaths from "../assets/icons/deaths.png";
import recovered from "../assets/icons/recovered.png";
import { useEffect, useState } from "react";
import { getAllSummary, getSummaryByCountry } from "../providers/Summary";
import {
  backgroundColor,
  textPrimary,
  textSecondary,
} from "../utils/Color-Pallete";
import { MDBIcon } from "mdb-react-ui-kit";
import { getAllCountries } from "../providers/Country";
import Footer from "../components/Footer";
import DetailSection from "../components/Main-Page/Detail-Section";

export default function MainPage() {
  const [summary, setSummary] = useState({});
  const [summaryId, setSummaryId] = useState({});
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [summaryCountry, setSummaryCountry] = useState(null);

  const getSummary = async () => {
    const response = await getAllSummary();
    setSummary({
      ...summary,
      confirmed: response.confirmed.value,
      recovered: response.recovered.value,
      deaths: response.deaths.value,
      lastUpdate: response.lastUpdate,
    });
  };

  const getSummaryIndonesia = async () => {
    const response = await getSummaryByCountry("id");
    setSummaryId({
      ...summaryId,
      confirmed: response.confirmed.value,
      recovered: response.recovered.value,
      deaths: response.deaths.value,
      lastUpdate: response.lastUpdate,
    });
  };

  const getCountries = async () => {
    const response = await getAllCountries();
    console.log(response.countries.length);
    setCountries(response.countries);
  };

  useEffect(() => {
    getSummary();
    getSummaryIndonesia();
    getCountries();
  }, []);

  const getSummaryCountry = async (country) => {
    const response = await getSummaryByCountry(country);
    setSummaryCountry({
      ...summaryCountry,
      confirmed: response.confirmed.value,
      recovered: response.recovered.value,
      deaths: response.deaths.value,
      lastUpdate: response.lastUpdate,
    });
  };

  const handleChange = (e) => {
    setCountry(e.target.value);
    console.log(e.target.value);
    getSummaryCountry(e.target.value);
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
          <div className="row justify-content-center">
            <div className="col-auto">
              <CardSummary
                image={confirmed}
                title="Total Confirmed"
                data={JSON.stringify(summary.confirmed)}
              />
            </div>
            <div className="col-auto">
              <CardSummary
                image={recovered}
                title="Total Recovered"
                data={JSON.stringify(summary.recovered)}
              />
            </div>
            <div className="col-auto">
              <CardSummary
                image={deaths}
                title="Total Deaths"
                data={JSON.stringify(summary.deaths)}
              />
            </div>
          </div>
          <div className="text-end text-muted mt-1">
            Last Update: {new Date(summary.lastUpdate).toLocaleString()}
          </div>
        </div>
        <div className="mb-5">
          <h3 className="mb-3" style={{ color: textPrimary }}>
            Summary:{" "}
            <span>
              <MDBIcon flag="id" />
              Indonesia
            </span>
          </h3>
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
            Last Update: {new Date(summaryId.lastUpdate).toLocaleString()}
          </div>
        </div>
        <DetailSection countries={countries} summaryCountry={summaryCountry} handleChange={handleChange} />
      </div>
    </div>
  );
}
