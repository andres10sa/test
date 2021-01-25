import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
//Views
import Fetch from "./view/Fetch";
import Ship from "./view/Ship";
import Planet from "./view/Planet";
//Context
import FetchProvider from "./context/FetchContext";
import ShipProvider from "./context/ShipContext";
import PlanetProvider from "./context/PlanetContext";

function App() {
  return (
    <Router>
      <FetchProvider>
        <ShipProvider>
          <PlanetProvider>
            <Header />
            <Switch>
              <Route exact path="/" component={Fetch} />
              <Route exact path="/fastest-ship" component={Ship} />
              <Route exact path="/planet-terrain" component={Planet} />
            </Switch>
            <Footer />
          </PlanetProvider>
        </ShipProvider>
      </FetchProvider>
    </Router>
  );
}

export default App;
