// Static team stats
const teamStats = {
  "Man City":    { goals: 96 , wins: 28 },
  "Arsenal":     { goals: 91, wins: 28 },
  "Liverpool":   { goals: 86, wins: 24 },
  "Aston Villa": { goals: 75, wins: 20 },
  "Tottenham":   { goals: 74, wins: 20 },
  "Chelsea":     { goals: 77, wins: 18 },
  "Newcastle":   { goals: 85 , wins: 18 },
  "Man United":  { goals: 57, wins: 18 },
  "West Ham":    { goals: 60, wins: 14 },
  "Crystal Palace": { goals: 57, wins: 13 },
  "Brighton":    { goals: 55, wins: 12 },
  "Bournemouth": { goals: 54, wins: 13 },
  "Fulham":      { goals: 55 , wins: 13 },
  "Wolves":      { goals: 50, wins: 13 },
  "Everton":     { goals: 40, wins: 13 },
  "Brentford":   { goals: 56, wins: 10 },
  "Nottingham Forest":   { goals: 49, wins: 9 },
  "Luton Town":  { goals: 52, wins: 6 },
  "Burnley":     { goals: 41, wins: 5 },
  "Luton Town":  { goals: 35, wins: 3 }
};

// Calculate score based on simple formula
function computeScore(stats) {
  return (stats.goals * 2) + (stats.wins * 3);
}

// Predict winner based on score comparison
function predictWinner() {
  const team1 = document.getElementById("team1").value;
  const team2 = document.getElementById("team2").value;
  const resultDiv = document.getElementById("result");

  if (!team1 || !team2) {
    resultDiv.textContent = "Please select two teams.";
    return;
  }

  if (team1 === team2) {
    resultDiv.textContent = "Please choose two different teams.";
    return;
  }

  const score1 = computeScore(teamStats[team1]);
  const score2 = computeScore(teamStats[team2]);

  if (score1 > score2) {
    resultDiv.textContent = `${team1} is predicted to win!`;
  } else if (score2 > score1) {
    resultDiv.textContent = `${team2} is predicted to win!`;
  } else {
    resultDiv.textContent = "It's too close to call!";
  }
}
