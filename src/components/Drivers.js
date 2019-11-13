import React from "react";
import { fetchAllDrivers } from "../utils/api";
import Table from "./Table";

export default class Drivers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "2019",
      drivers: []
    };
  }
  getDrivers(year) {
    fetchAllDrivers(year).then(drivers => {
      this.setState({
        drivers: drivers.MRData.StandingsTable.StandingsLists[0].DriverStandings
      });
    });
  }
  componentDidMount() {
    this.getDrivers(this.state.year);
  }
  render() {
    return (
      <React.Fragment>
        <h2>Drivers Championship Standings</h2>
        <Table
          number={4}
          head={`Drivers Championship Standings-${this.state.year}`}
        >
          {this.state.drivers.map(
            ({ position, points, Driver, Constructors }) => {
              const {
                driverId,
                givenName,
                familyName,
                nationality,
                url
              } = Driver;

              let driverName = url.split("/").pop();
              if (driverName === "Nino_Farina") driverName = "Giuseppe_Farina";

              return (
                <tr key={driverId}>
                  <td className='head'>{position}</td>
                  <td>
                    {givenName} {familyName}
                  </td>
                  <td>{Constructors[0].name}</td>
                  <td className='head'>{points}</td>
                </tr>
              );
            }
          )}
        </Table>
      </React.Fragment>
    );
  }
}
