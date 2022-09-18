function About() {
  let projects = [
    {
      name: "Bayu",
      pic: "..\assets\icons\bayu.jpg",
      email: "anandabayu090@gmail.com",
      wa: "+62 812-2172-3798"
    },
    {
      name: "Rizka ",
      pic: "..\assets\icons\rizka.jpg",
      email: "Rizkaagustin02@gmail.com",
      wa: "+62 851-5654-8788"
    },
    {
      name: "Barkah",
      pic: "..\assets\icons\barkah.jpg",
      email: "Barkahsuhandii@gmail.com",
      wa: "+62 898-6680-125"
    },
    {
      name: "Ivan",
      pic: "",
      email: "ivanapriana128@gmail.com",
      wa: "62 813-1462-4973"
    },
    {
      name: "Faqih",
      pic: "",
      email: "ahmadfaqih796@gmail.com",
      wa: "+62 821-8277-1538"
    },
    {
      name: "Indra",
      pic: "..\assets\icons\indra.jpg",
      email: "indracjy@gmail.com",
      wa: "+62 877-8457-3407"
    },
    {
      name: "Yaqub",
      pic: "..\assets\icons\yacob.jpg",
      email: "yaqubhdn@gmail.com",
      wa: "+62 877-2983-9645"
    },
    {
      name: "Samuel",
      pic: "..\assets\icons\samuel.jpg",
      email: "samuelsdavilantinovn@gmail.com",
      wa: "+62 896-5705-5232"
    }
  ]
  return (
    <>
      <div classname="row">
        <div className="col-md-4">
          <h1>About</h1>
          <h1>Team 2 - Juara Coding</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            {projects.map((project) => (
              <div className="col-md-6">
                <div className="card mb-4">
                  <img src={project.pic} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text"><small>{project.email}</small></p>
                    <p className="card-text"><small>{project.wa}</small></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default About;