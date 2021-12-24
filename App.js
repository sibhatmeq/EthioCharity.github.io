import React, {Component} from "react";

import About from "./About";
import Blog from "./pages/Blog";
import Donate from "./pages/Donate";
import Event from "./pages/Event";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Single from "./pages/Single";
import Volunteer from "./pages/Volunteer";
import Team from "./Team";
import Home1 from "./Home1";
import {BrowserRouter as Router, Switch, Route,BrowserRouter } from 'react-router-dom';
import Causes from "./pages/Causes";
import Org_pages from "./component/Organization_pages/Org_pages";
import YeFestulaMerja from "./component/Organization_pages/YeFestulaMerja/YeFestulaMerja";
import MudayFestula from "./component/Organization_pages/YeFestulaMerja/MudayYeFestula";
import MakedoniaFestula from "./component/Organization_pages/YeFestulaMerja/MakedoniaYeFestula";
import GergesonFestula from "./component/Organization_pages/YeFestulaMerja/GergesonYeFestula";
import MerryJoyFestula from "./component/Organization_pages/YeFestulaMerja/MerryJoyYeFestula";
import Register from "./component/Register/Register";
import MudayYeAregawiyan from "./component/Organization_pages/YeAregawiyanMerja/MudayYeAregawiyan";
import MakedoniaYeAregawiyan from "./component/Organization_pages/YeAregawiyanMerja/MakedoniaYeAregawiyan";
import GergesonYeAregawiyan from "./component/Organization_pages/YeAregawiyanMerja/GergesonYeAregewiyan";

import MakedoniaHetsanat from "./component/Organization_pages/YeHetsanatMerja/MakedoniaHetsanat";
import MudayHetsanat from "./component/Organization_pages/YeHetsanatMerja/MudayHetsanat";
import YeAregawiyanMerja from "./component/Organization_pages/YeAregawiyanMerja/YeAregawiyanMerja";
import YehetsanatMerja from "./component/Organization_pages/YeHetsanatMerja/YehetsanatMerja";
import MaterailDonate from "./component/MaterialDonate/MaterailDonate";
import Environment from "./component/Organization_pages/Environmental/Environmental";
import ArenguadeAshara from './component/Organization_pages/Environmental/AreguadeAshara'
import YeAemeroHumuman from './component/Organization_pages/YeAemroHumuman/YeAemeroHumuman';
import HealthAndFood from "./component/Organization_pages/FoodAndHealth/HealthAndFood";
import AemroHemuman from "./component/Organization_pages/YeAemroHumuman/AemroHemuman"
import Signup from './component/Register/Signup/Signup';
import Detail from './component/Organization_pages/DetailPages/DetailPages' ;

import {DataProvider} from './context_providers/data.js' ;
function App() {
  return (
      <BrowserRouter>
      <Router>
      <DataProvider>
        <div>
          <Switch>
            <Route exact path="/"><Home1/></Route>
            <Route exact path="/About"><About/></Route>
            <Route exact path="/Causes"><Causes/></Route>
            <Route exact path="/Donate"><Donate/></Route>
            <Route exact path="/Event"><Event/></Route>
            <Route exact path="/Contact"><Contact/></Route>
            <Route exact path="/Service"><Service/></Route>
            <Route exact path="/Blog"><Blog/></Route>
            <Route exact path="/Volunteer"><Volunteer/></Route>
            <Route exact path="/Single"><Single/></Route>
            <Route exact path="/Team"><Team/></Route>
            <Route exact path="/Org_pages"><Org_pages/></Route>

            <Route exact path="/YeFestulaMerja"><YeFestulaMerja /></Route>
            <Route exact path="/MudayYeFestula"><MudayFestula/></Route>
            <Route exact path="/MakedoniaYeFestula"><MakedoniaFestula/></Route>
            <Route exact path="/GergesonYeFestula"><GergesonFestula/></Route>
            <Route exact path='/MerryJoyYeFestula' ><MerryJoyFestula/></Route>
            <Route exact path="/Register"><Register/></Route>
            <Route exact path="/YeAregawiyanMerja"><YeAregawiyanMerja/></Route>
            <Route exact path="/GergesonYeAregewiyan"><GergesonYeAregawiyan/></Route>
            <Route exact path="/MakedoniaYeAregawiyan"><MakedoniaYeAregawiyan/></Route>
            <Route exact path="/MudayYeAregawiyan"><MudayYeAregawiyan/></Route>
            <Route exact path="/YehetsanatMerja"><YehetsanatMerja/></Route>
            <Route exact path="/MakedoniaHetsant"><MakedoniaHetsanat/></Route>
            <Route exact path="/MudayHetsanat"><MudayHetsanat/></Route>
            <Route exact path="/MaterailDonate"><MaterailDonate/></Route>
            <Route exact path="/Environmental"><Environment/></Route>
            <Route exact path="/AreguadeAshara"><ArenguadeAshara/></Route>
            <Route exact path="/YeAemeroHumuman"><YeAemeroHumuman/></Route>


            <Route exact path="/HealthAndFood/:id"><HealthAndFood/></Route>
            <Route exact path="/AemroHemuman"> <AemroHemuman/></Route>
            <Route exact path="/Signup"> <Signup/></Route>
            <Route exact path="/detail/:id"><Detail/></Route>



          </Switch>
        </div>
        </DataProvider>
      </Router>
      </BrowserRouter>

    
  );
}

export default App;
