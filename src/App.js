import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Discover from "./Pages/Discover";
import Details from "./Pages/Details"
const App = () => {

  return (
    <main>
      <Routes>
        <Route path="/" Component={Home} exact/>
        <Route path="/discover/:genre" Component={Discover}/>
        <Route path="/aboutus" Component={AboutUs}/>
        <Route path="/details/:id" Component={Details}/>
      </Routes>
    </main>
  );
}

export default App;