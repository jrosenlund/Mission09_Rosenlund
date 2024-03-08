import React from 'react';
import './App.css';
import teams from './CollegeBasketballTeams.json';

function Header() {
  return (
    <div>
      <h1>Welcome to BBall Home</h1>
      <h3>Your go-to comprehensive list of NCAA basketball teams</h3>
    </div>
  );
}

// Interface for team class
interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

// Team object, returns single card
class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h2>{oneTeam.school}</h2>
        <h3>The {oneTeam.name}</h3>
        <h4>
          {oneTeam.city}, {oneTeam.state}
        </h4>
      </div>
    );
  }
}

// List of all team cards
function TeamList() {
  return (
    <div className="container">
      <div className="team-list">
        {teams.teams.map((team) => (
          <div>
            <div className="team-card">
              <Team {...team} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <TeamList />
    </div>
  );
}

export default App;
