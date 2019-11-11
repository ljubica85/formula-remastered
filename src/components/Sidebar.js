import React from "react";
import "../index.css";
import Logo from "../img/praviLogo.jpg";
import { GiHelmet, GiF1Car, GiCheckeredFlag } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const activeStyle = {
  backgroungColor: "rgb(20, 22, 22)"
};

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sidebar">
        <img src={Logo} alt="slika logo" className='logo' />
        <nav>
          <ul className="navList">
            <li>
              <NavLink to="/" exact activeStyle={activeStyle}>
                <span className="flex">
                  <div className="icon">
                    <GiHelmet size={35} />
                  </div>
                  <h3>Drivers</h3>
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/teams" activeStyle={activeStyle}>
                <span className="flex">
                  <div className="icon">
                    <GiF1Car size={35} />
                  </div>
                  <h3>Teams</h3>
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/races" activeStyle={activeStyle}>
                <span className="flex">
                  <div className="icon">
                    <GiCheckeredFlag size={35} />
                  </div>
                  <h3>Races</h3>
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
