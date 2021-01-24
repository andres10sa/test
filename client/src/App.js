import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
//Views
import Fetch from "./view/Fetch";
import FetchProvider from "./context/FetchContext";

function App() {
  return (
    <Router>
      <FetchProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Fetch} />
          <Route exact path="/fastest-ship" component={Fetch} />
          <Route exact path="/planet-terrain" component={Fetch} />
        </Switch>
        <Footer />
      </FetchProvider>
    </Router>
  );
}

export default App;
