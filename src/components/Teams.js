import React from "react";
import { fetchAllTeams } from "../utils/api";

export default class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "2019",
      teams: {}
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
    return <div>Teams</div>;
  }
}
