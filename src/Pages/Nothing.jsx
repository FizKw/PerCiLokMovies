import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import { Link } from "react-router-dom";

function Nothing() {
  return (
    <div>
      <div className="container mx-auto mt-24">
        <Navbar />
      </div>
      <div className="container mx- flex flex-col min-h-screen"> 
        <div className="flex-grow mt-8 text-center text-3xl">
        <p>Ngapain di Klik Kan udah dibilang 
            <Link to={`/nothing/secret`}>
                <span>
                    {` Rahasia `}
                </span>
            </Link>

             itu dirahasiakan bukan di 
             <Link to={`/PerCiLokMovies`}>
                <span>
                    {` Klik `}
                </span>
            </Link></p>
        </div>
        <div className="flex-none">
            <Footer />  
        </div>
      </div>
      
    </div>
  );
}

export default Nothing;
