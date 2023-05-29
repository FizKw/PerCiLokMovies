import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Discover from "./Pages/Discover";
import Details from "./Pages/Details"
import Nothing from "./Pages/Nothing"
import Secret from "./Pages/Secret"
const App = () => {

  return (
    <main>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/discover/:genre" Component={Discover}/>
        <Route path="/aboutus" Component={AboutUs}/>
        <Route path="/details/:id" Component={Details}/>
        <Route path="/nothing" Component={Nothing} />
        <Route path="/nothing/secret" Component={Secret} />
      </Routes>
    </main>
  );
}

export default App;