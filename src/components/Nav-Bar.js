import gCovid from '../assets/icons/covid-tracker-logo.png'
export default function Navigasi(props){
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-5 mb-5">
      <a className="navbar-brand mx-3" href="#">
        <img src={gCovid} alt="..." height="36"/>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <h4><a className="nav-link" href="#">Beranda</a></h4>
          </li>
          <li className="nav-item">
          <h4><a className="nav-link" href="#">Tentang</a></h4>
          </li>
        </ul>
      </div>
    </nav>
  )
}