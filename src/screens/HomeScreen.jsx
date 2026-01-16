import React from "react";
import { Link } from "react-router-dom";
import NavBarCiao from "../navigation/BarNav";
import "../assets/styles/HomeScreen.css"


const HomePage = () => {
  return (
    <>


      <div className="landing-container">
        <div className="overlay"></div>


        <div className="landing-content text-center">
                  <h1 className="title">CIAO NUTRI!</h1>

          <p className="subtitle">
            Retos, planes y acompañamiento nutricional 
          </p>

          <div className="btn-group">
            <Link to="/planselect" className="btn-primary-lg">
              Elije tu plan
            </Link>

          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
