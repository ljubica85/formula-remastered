import React from 'react'
import { fetchAllRaces } from '../utils/api';

export default class Races extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          year: "2019",
          races: {}
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
    render(){
        return(
            <div>Races</div>
        )
    }
}