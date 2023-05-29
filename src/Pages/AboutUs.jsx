import React from "react";
import Navbar from "../navbar";
import Pinceng from "../compoments/image/pinceng.jpg";
import Hapis from "../compoments/image/hapis.jpg";
import Epeng from "../compoments/image/epeng.jpg";
import Nggih from "../compoments/image/nggih.jpg";
import Footer from "../footer";
import Instagram from "../compoments/image/ig.png";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <div>
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <div className="container flex-grow mx-auto">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20 justify-center p-5">
              <div className="card w-50 bg-base-100 shadow-xl glass">
                <figure className="px-10 pt-10 hover:s">
                  <img
                    src={Pinceng}
                    alt="pinceng"
                    className="rounded-xl"
                    width="160"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Vincent Marlino</h2>
                  <p>
                    Terkadang tidak perlu lari dari kenyataan, jogging juga gapapa
                    kok
                  </p>
                  <div className="card-actions mt-auto">
                    <a href="https://www.instagram.com/marli.no">
                      <img
                        src={Instagram}
                        alt="Not Found"
                        className="w-10 h-10 rounded-md"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card w-50 bg-base-100 shadow-xl glass">
                <figure className="px-10 pt-10">
                  <img src={Hapis} alt="apis" className="rounded-xl" width="160" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Hafizh Kumara Widyadhana</h2>
                  <p>Rahasia itu harusnya dirahasiakan bukan di
                    <Link to={`/nothing`}>
                    <span>
                    {` klik`}
                    </span>
                    </Link>
                    </p>

                  <div className="card-actions mt-auto">
                    <a href="https://www.instagram.com/haaa_kw">
                      <img
                        src={Instagram}
                        alt="Not Found"
                        className="w-10 h-10 rounded-md"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card w-50 bg-base-100 shadow-xl glass">
                <figure className="px-10 pt-10">
                  <img src={Epeng} alt="epeng" className="rounded-xl" width="160" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Aditya Stephen Hung</h2>
                  <p>Jangan ngikutin gengsi, nanti ga makan.</p>
                  <div className="card-actions mt-auto">
                    <a href="https://www.instagram.com/adityastpn_">
                      <img
                        src={Instagram}
                        alt="Not Found"
                        className="w-10 h-10 rounded-md"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card w-50 bg-base-100 shadow-xl glass">
                <figure className="px-10 pt-10">
                  <img src={Nggih} alt="Nggih" className="rounded-xl" width="160" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Muhammad Lutfi Salinggih</h2>
                  <p>Aku ganteng dan semua orang tau</p>
                  <div className="card-actions mt-auto">
                    <a href="https://www.instagram.com/salinggih_">
                      <img
                        src={Instagram}
                        alt="Not Found"
                        className="w-10 h-10 rounded-md"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-none">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
