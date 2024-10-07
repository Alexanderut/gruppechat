
import React from 'react'
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Hjem from "./pages/Hjem";
import Om from "./pages/Om";
import Prosentregning from './pages/Prosentregning';


function App() {



  return (
    <div className="App">

<Router>
  <Nav/>
    <Routes>
      <Route path="/" element={ <Hjem/>} />
      <Route path="/om" element={ <Om/>} />
      <Route path="/prosentregning" element={ <Prosentregning/>} />



    </Routes>
</Router>

    </div>
  );
}

export default App;
