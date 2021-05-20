import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/main.scss";

import Header from "./components/Header";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";

import LanguageSwitcher from "./components/LanguageSwitcher";
import useFetch from "./hooks/useFetch";

/* import Footer from './components/Footer'; */

function App() {
  // get entity data

  const [entity, loading] = useFetch(
    process.env.REACT_APP_BASE_URL + "config/entity.php?web=true"
  );

  console.log(entity);

  return (
    <Router>
      <div className="App">
        <LanguageSwitcher />
        <Header entity={entity} />
        <Switch>
          {!loading && (
            <>
              <Route exact path="/" entity={entity} component={Index} />
              <Route path="/about" entity={entity} component={About} />
              <Route path="/contact" entity={entity} component={Contact} />
              <Route path="/menu" entity={entity} component={Menu} />
            </>
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;