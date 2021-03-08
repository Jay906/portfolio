import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Header id="header" />
          <Projects id="projects" />
          <About id="about" />
          <Contacts id="contacts" />
          <Footer />
        </Route>
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
