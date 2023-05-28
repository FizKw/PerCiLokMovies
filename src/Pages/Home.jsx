import React from "react";
import TopSearch from "../compoments/TopSearch";
import Navbar from "../navbar";
import Footer from "../footer";

function Home() {
  return (
    <div>
      <div className="container mx-auto mb-6">
        <Navbar />

        <TopSearch />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
