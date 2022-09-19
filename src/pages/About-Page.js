import * as React from 'react';
import { backgroundColor } from "../utils/Color-Pallete";
import barkah from "../assets/images/barkah.jpg"
import bayu from "../assets/images/bayu.jpg"
import indra from "../assets/images/indra.jpg"
import rizka from "../assets/images/rizka.jpg"
import samuel from "../assets/images/samuel.jpg"
import yacob from "../assets/images/yacob.jpg"
import faqih from "../assets/images/faqih.jpeg"
import ivan from "../assets/images/ivan.jpeg"
import CardPerson from "../components/About-Page/Card-Person";

function AboutPage() {
  let teams = [
    {
      name: "Bayu",
      pic: bayu,
      email: "anandabayu090@gmail.com",
      wa: "+62 812-2172-3798"
    },
    {
      name: "Rizka ",
      pic: rizka,
      email: "Rizkaagustin02@gmail.com",
      wa: "+62 851-5654-8788"
    },
    {
      name: "Barkah",
      pic: barkah,
      email: "Barkahsuhandii@gmail.com",
      wa: "+62 898-6680-125"
    },
    {
      name: "Ivan",
      pic: ivan,
      email: "ivanapriana128@gmail.com",
      wa: "62 813-1462-4973"
    },
    {
      name: "Faqih",
      pic: faqih,
      email: "ahmadfaqih796@gmail.com",
      wa: "+62 821-8277-1538"
    },
    {
      name: "Indra",
      pic: indra,
      email: "indracjy@gmail.com",
      wa: "+62 877-8457-3407"
    },
    {
      name: "Yaqub",
      pic: yacob,
      email: "yaqubhdn@gmail.com",
      wa: "+62 877-2983-9645"
    },
    {
      name: "Samuel",
      pic: samuel,
      email: "samuelsdavilantinovn@gmail.com",
      wa: "+62 896-5705-5232"
    }
  ]

  return (
    <div
      className="min-vh-100"
      style={{ backgroundColor: backgroundColor, paddingTop: "70px" }}
    >
      <div className="container">
        <h3 className="mb-3">About</h3>
        <h5 className="text-center mb-3">Team 2 - Juara Coding</h5>
        <div className="row justify-content-center align-items-center g-4">
              {
                teams.map((person, index) => {
                  return (
                    <CardPerson person={person} index={index} key={index}/>
                  )
                })
              }
        </div>
      </div>
    </div>
  )
}

export default AboutPage;