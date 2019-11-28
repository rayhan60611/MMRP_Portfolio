import React from 'react';
import {BrowserRouter, HashRouter} from "react-router-dom";
import './App.css';
import MyNavigationBar from "./NavBar/MyNavigationBar";
import MyRouter from "./Router/MyRouter";
import Footer from "./Page/Footer";
import MasterServices from "./MasterPages/MasterServices";
import MasterPortfolio from "./MasterPages/MasterPortfolio";
import UpperFooter from "./MasterPages/UpperFooter";
import MasterCover from "./MasterPages/MasterCover";
import Particles from "react-particles-js";
// const partiObj = {
//     particles: {
//         line_linked: {
//             shadow: {
//                 enable: true,
//                 color: "#01d100",
//                 blur: 1
//             }
//         },
//         number:{
//             value:150,
//             density:{
//                 enable:true,
//                 value_area:900
//
//             }
//         }
//     }
// }
function App() {
  return (
    <div className="App">
      <HashRouter>
          <MyNavigationBar/>
          <MyRouter/>
          <UpperFooter/>
          <Footer/>
      </HashRouter>
        {/*<Particles params={partiObj}/>*/}

    </div>

  );
}

export default App;
