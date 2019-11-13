import React from "react";
import { fetchAllRaces } from "../utils/api";
import Table from "./Table";

export default class Races extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "2019",
      races: []
    };
  }
  getRaces(year) {
    fetchAllRaces(year).then(races => {
      this.setState({
        races: races.MRData.RaceTable.Races
      });
      console.log(this.state.races);
    });
  }
  componentDidMount() {
    this.getRaces(this.state.year);
  }
  render() {
    const addition = ["Round", "Grand Prix", "Circuit", "Date", "Winner"];
    return (
      <React.Fragment>
        <h2>Race Calendar</h2>
        <Table number={5} head={`Race Calendar - ${this.state.year}`}>
          <tr key={addition[0]} className='head'>
            {addition.map(data => {
              return <td>{data}</td>;
            })}
          </tr>
          {this.state.races.map(
            ({ Circuit, date, Results, round, raceName }) => {
              const { Location, circuitName } = Circuit;

              return (
                <tr key={round}>
                  <td>{round}</td>
                  <td>{raceName}</td>
                  <td>{circuitName}</td>
                  <td>{date}</td>
                  <td>{Results[0].Driver.familyName}</td>
                </tr>
              );
            }
          )}
        </Table>
      </React.Fragment>
    );
  }
}
