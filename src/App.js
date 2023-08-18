import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Secret from "./Secret";
import Nav from "./Nav";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/secret" element={<Secret />} />
          </Routes>

          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
