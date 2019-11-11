import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Drivers from "./components/Drivers";
import Teams from "./components/Teams";
import Races from "./components/Races";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="flex frame">
        <Router>
          <Sidebar />
          <div className="bodyDiv">
            <Header />
            <div className="content">
              <Route exact path="/" component={Drivers} />
              <Route path="/teams" component={Teams} />
              <Route path="/races" component={Races} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
