import React from "react";
import { fetchAllTeams } from "../utils/api";
import Table from "./Table";


export default class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "2019",
      teams: []
    };
  }
  getTeams(year) {
    fetchAllTeams(year).then(teams => {
      this.setState({
        teams:
          teams.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
      });
      console.log(this.state.teams);
    });
  }
  componentDidMount() {
    this.getTeams(this.state.year);
  }
  render() {
    return (
      <React.Fragment>
        <h2>Constructors Championship</h2>
        <Table
          number={4}
          head={`Constructors Championship Standings-${this.state.year}`}
        >
          {this.state.teams.map(({ position, points, Constructor }) => {
            const { constructorId, name, nationality, url } = Constructor;

            return (
              <tr key={constructorId}>
                <td className='head'>{position}</td>
                <td>
                  {name}
                </td>
                <td>Details</td>
                <td className='head'>{points}</td>
              </tr>
            );
          })}
        </Table>
      </React.Fragment>
    );
  }
}
