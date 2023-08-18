import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Secret from "./Secret";
import Nav from "./Nav";
import Footer from "./Footer";
import { useState } from "react";
import UserContext from "./UserContext";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  function toggleLoggedIn() {
    setLoggedIn(!loggedIn)
  }

  return (
    <div className="App">
      <BrowserRouter>

        <UserContext.Provider value={{
          loggedIn: loggedIn,
          toggleLoggedIn: toggleLoggedIn
        }}>

          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/secret" element={<Secret />} />
          </Routes>

          <Footer />
          
        </UserContext.Provider>

      </BrowserRouter>
    </div>
  );
}

export default App;
