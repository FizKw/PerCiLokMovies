import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import { Link } from "react-router-dom";

function Nothing() {
  return (
    <div>
      <div className="container">
        <Navbar />
      </div>
      <div className="flex flex-col min-h-screen mx-auto pt-24">
          <div className="flex-grow text-center text-3xl">
            <p>
              Ngapain di Klik? <br />Kan udah dibilang 
              <Link to={`/nothing/secret`}>
                  <span>
                      {` Rahasia `}
                  </span>
              </Link>
              itu dirahasiakan bukan di 
              <Link to={`/`}>
                  <span>
                      {` Klik. `}
                  </span>
              </Link>
            </p>
          </div>
      
        <div className="flex-none">
            <Footer />  
        </div>
      </div>
      
    </div>
  );
}

export default Nothing;
