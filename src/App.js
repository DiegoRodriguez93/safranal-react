import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/main.scss";

import Header from "./components/Header";
import Index from "./pages/Index";
import Chef from "./pages/Chef";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";

import LanguageSwitcher from "./components/LanguageSwitcher";
import useFetch from "./hooks/useFetch";

/* import Footer from './components/Footer'; */

function App() {
  const [data] = useFetch(
    process.env.REACT_APP_BASE_URL + "galeriaDeFotos/listarGaleria.php"
  );

  return (
    <Router>
      <div className="App">
        <LanguageSwitcher />
        <Header />
        <Switch>
          <Route exact path="/" imagenes={data} component={Index} />
          <Route path="/chef" imagenes={data} component={Chef} />
          <Route path="/contact" imagenes={data} component={Contact} />
          <Route path="/menu" imagenes={data} component={Menu} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
