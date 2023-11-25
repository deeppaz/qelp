import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//layouts
import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";
//pages
import Home from "./pages/Home/Home";
import SavedEmails from "./pages/SavedEmails/SavedEmails";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/emails" element={<SavedEmails />} /> */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
