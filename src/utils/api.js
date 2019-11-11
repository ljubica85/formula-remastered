export function fetchAllDrivers(year){
    return (
        fetch(`https://ergast.com/api/f1/${year}/driverStandings.json`)
        .then(res => res.json())
    )
}

export function fetchAllTeams(year) {
    return fetch(`https://ergast.com/api/f1/${year}/constructorStandings.json`)
      .then(res => res.json())
}


export function fetchAllRaces(year) {
    return fetch(`https://ergast.com/api/f1/${year}/results/1.json`)
      .then(res => res.json())
  }
  
