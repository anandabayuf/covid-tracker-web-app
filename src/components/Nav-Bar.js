import covidtracklogo from "../assets/icons/covid-tracker-logo.png"
import { backgroundColor, textSecondary } from "../utils/Color-Pallete"

export default function NavBar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow fixed-top" style={{backgroundColor: backgroundColor, borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px" }}>
            <div className="container">
                <a class="navbar-brand" href="/">
                    <span>
                        <img src={covidtracklogo} width="32" class="d-inline-block align-top" alt="" />
                        <span style={{color: textSecondary}}>  Covid Tracker</span>
                    </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/"><span style={{color: textSecondary}}>Home</span></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}