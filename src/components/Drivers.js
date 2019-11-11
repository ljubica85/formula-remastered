import React from "react";
import { fetchAllDrivers } from "../utils/api";

export default class Drivers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "2019",
      drivers: {}
    };
  }
  getDrivers(year) {
    fetchAllDrivers(year).then(drivers => {
      this.setState({
        drivers: drivers.MRData.StandingsTable.StandingsLists[0].DriverStandings
      });
      console.log(this.state.drivers);
    });
  }
  componentDidMount() {
    this.getDrivers(this.state.year);
  }
  render() {
    return <div>Drivers</div>;
  }
}
