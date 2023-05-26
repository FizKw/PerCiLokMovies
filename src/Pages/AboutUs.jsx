import React from "react"
import Navbar from "../navbar"
import Pinceng from '../compoments/image/pinceng.jpg'
import Hapis from '../compoments/image/hapis.jpg'
import Epeng from '../compoments/image/epeng.jpg'
import Nggih from '../compoments/image/nggih.jpg'
import Footer from "../footer"

function AboutUs(){
    return (
        <div className="container mx-auto p-2">
            <Navbar />
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20 justify-center">
            <div className="card w-50 bg-base-100 shadow-xl glass">
              <figure className="px-10 pt-10 hover:s">
                <img src={Pinceng} alt="pinceng" className="rounded-xl" width="160" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Vincent Marlino</h2>
                <div className="card-actions">
                  <a href="https://www.instagram.com/marli.no">
                    <button className="btn btn-primary hover:transition-shadow ">Follow Me!!!</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="card w-50 bg-base-100 shadow-xl glass">
              <figure className="px-10 pt-10">
                <img src={Hapis} alt="apis" className="rounded-xl" width="160"/>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Hafizh Kumara Widyadhana</h2>
                <div className="card-actions">
                  <a href="https://www.instagram.com/haaa_kw">
                    <button className="btn btn-primary">Follow Me!!!</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="card w-50 bg-base-100 shadow-xl glass">
              <figure className="px-10 pt-10">
                <img src={Epeng} alt="epeng" className="rounded-xl" width="160"/>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Aditya Stephen Hung</h2>
                <div className="card-actions">
                  <a href="https://www.instagram.com/adityastpn_">
                    <button className="btn btn-primary">Follow Me!!!</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="card w-50 bg-base-100 shadow-xl glass">
              <figure className="px-10 pt-10">
                <img src={Nggih} alt="Nggih" className="rounded-xl" width="160"/>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Muhammad Lutfi Salinggih</h2>
                <div className="card-actions">
                  <a href="https://www.instagram.com/salinggih_">
                    <button className="btn btn-primary">Follow Me!!!</button>
                  </a>
                </div>
              </div>
            </div>
        </div>
          <Footer />
        </div>
    )
}

export default AboutUs