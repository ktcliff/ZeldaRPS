var humanScore = 0;
var computerScore = 0;

document.getElementById('Gemstone').onclick = playRock;
document.getElementById('Paraglider').onclick = playPaper;
document.getElementById('Master Sword').onclick = playScissors;

function playRock() {
  play("Gemstone");
}
function playPaper() {
  play("Paraglider");
}
function playScissors() {
  play("Master Sword");
}

function play(humanPlay) {
  
  computerPlay = getComputerPlay();
  
  document.getElementById('status').innerHTML = "<p>You played <strong>" +
   humanPlay + "</strong>. The bot played <strong>" + computerPlay + "</strong>.</p>";
  
  if(humanPlay == 'Gemstone') {
    if(computerPlay == 'Gemstone') {
      document.getElementById('status').innerHTML += "<p>You tied. :|</p>";
    } else if (computerPlay == 'Paraglider') {
      document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
      computerScore++;
    } else if (computerPlay == 'Master Sword') {
      document.getElementById('status').innerHTML += "<p>You win! :)</p>";
      humanScore++;
    }
  } else if (humanPlay == 'Paraglider') {
    if(computerPlay == 'Gemstone') {
      document.getElementById('status').innerHTML += "<p>You win! :)</p>";
      humanScore++;
    } else if (computerPlay == 'Paraglider') {
      document.getElementById('status').innerHTML += "<p>You tied. :|</p>";
    } else if (computerPlay == 'Master Sword') {
      document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
      computerScore++;
    }  
  } else if (humanPlay == 'Master Sword') {
    if(computerPlay == 'Gemstone') {
      document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
      computerScore++;
    } else if (computerPlay == 'Paraglider') {
      document.getElementById('status').innerHTML += "<p>You win! :)</p>";
      humanScore++;
    } else if (computerPlay == 'Master Sword') {
      document.getElementById('status').innerHTML += "<p>You tied. :|</p>";
    }  
  }
  
  document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('computerScore').innerHTML = computerScore;
  
}

function getComputerPlay() {
  var plays = ['Gemstone', 'Paraglider', 'Master Sword'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}