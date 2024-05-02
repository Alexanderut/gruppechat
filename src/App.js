import { db } from "./firebase/firebase";
import { collection, getDocs } from "firebase/firestore"
import React, {useState, useEffect} from 'react'
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Hjem from "./pages/Hjem";
import Om from "./pages/Om";


function App() {


  return (
    <div className="App">

<Router>
  <Nav/>
    <Routes>
      <Route path="/" element={ <Hjem/>} />
      <Route path="/om" element={ <Om/>} />


    </Routes>
</Router>

    </div>
  );
}

export default App;
