import { HashRouter, Switch, Route  } from "react-router-dom";
import Menu from "./common/Menu/index";
import AboutPage from "./features/about/AboutPage";
import HomePage from "./features/home/HomePage";
import Footer from "./common/Footer";
import OfferPage from "./features/offer/OfferPage";
import Realizations from "./features/realizations/RealizationsPage";
import ContactPage from "./features/contact/ContactPage";

const App = () => (
<HashRouter>
  <nav>
    <Switch> 
      <Route path="/o-firmie">
        <AboutPage />
      </Route>
      <Route path="/realizacje">
        <Realizations />
      </Route>
      <Route path="/oferta">
        <OfferPage />
      </Route>
      <Route path="/kontakt">
        <ContactPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
    <Menu />
    <Footer />
  </nav>
</HashRouter>
);

export default App;
