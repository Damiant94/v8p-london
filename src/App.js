import { HashRouter, Route, Switch} from "react-router-dom";
import './App.scss';
import Nav from "./Components/UI/Nav/Nav";

import Home from "./Components/Views/Home/Home";
import AboutUs from "./Components/Views/AboutUs/AboutUs";
import OurService from "./Components/Views/OurService/OurService";
import Bodywork from "./Components/Views/OurService/Bodywork/Bodywork";
import Repairs from "./Components/Views/OurService/Repairs/Repairs";
import Servicing from "./Components/Views/OurService/Servicing/Servicing";
import Tuning from "./Components/Views/OurService/Tuning/Tuning";
import SpecialOffers from "./Components/Views/SpecialOffers/SpecialOffers";
import Gallery from "./Components/Views/Gallery/Gallery";
import Contact from "./Components/Views/Contact/Contact";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About-us" component={AboutUs} />
          <Route exact path="/Our-service" component={OurService} />
          <Route exact path="/Our-service/Bodywork" component={Bodywork} />
          <Route exact path="/Our-service/Repairs" component={Repairs} />
          <Route exact path="/Our-service/Servicing" component={Servicing} />
          <Route exact path="/Our-service/Tuning" component={Tuning} />
          <Route exact path="/Special-offers" component={SpecialOffers} />
          <Route exact path="/Gallery" component={Gallery} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
