import covidtracklogo from "../assets/icons/covid-tracker-logo.png"
import { backgroundColor, textSecondary } from "../utils/Color-Pallete"
import { Link } from "react-router-dom"

export default function NavBar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow fixed-top" style={{backgroundColor: backgroundColor, borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px" }}>
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <span>
                        <img src={covidtracklogo} width="32" className="d-inline-block align-top" alt="" />
                        <span style={{color: textSecondary}}>  Covid Tracker</span>
                    </span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/"><span style={{color: textSecondary}}>Home</span></Link>
                        <Link className="nav-item nav-link" to="about"><span style={{color: textSecondary}}>About</span></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}