
let homeScore = document.getElementById('homeScore')
let countHome = 0

let awayScore = document.getElementById('awayScore')
let countAway = 0

function homeIncOne() {
  countHome += 1
  homeScore.textContent = countHome;
}

function awayIncOne() {
    countAway += 1
    awayScore.textContent = countAway;
}

function homeIncTwo() {
    countHome += 2
    homeScore.textContent = countHome;
}

function awayIncTwo() {
    countAway += 2
    awayScore.textContent = countAway;
}

function homeIncThree() {
    countHome += 3
    homeScore.textContent = countHome;
}

function awayIncThree() {
    countAway += 3
    awayScore.textContent = countAway;
}
  
  