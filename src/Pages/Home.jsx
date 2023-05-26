import React from "react"
import TopSearch from "../compoments/TopSearch"
import Navbar from "../navbar"
import Footer from "../footer"


function Home () {
    return (
        
    <div className="container mx-auto m-2">
        <Navbar />
        
        <TopSearch />

        <Footer />
    </div>
    )
}

export default Home