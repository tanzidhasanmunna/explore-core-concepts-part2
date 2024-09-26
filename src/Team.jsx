import React, { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);
  const teamStyle = {
    border: "2px solid purple",
    padding: "15px",
    margin: "15px",
    borderRadius: "15px",
  };

  return (
    <div style={teamStyle}>
      <h3>Players: {team}</h3>
      <button onClick={() => setTeam(team + 1)}>Add Player</button>
      <button onClick={() => setTeam(team - 1)}>Remove Player</button>
    </div>
  );
}
