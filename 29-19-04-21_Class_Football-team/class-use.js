class Player {
  constructor(fullName, position) {
    this.id = Date.now();
    this.position = position;
    [this.firstName, this.lastName] = fullName.split(" ");
  }
}

class Team {
  constructor(teamName, city) {
    this.teamName = teamName;
    this.city = city;
    this.players = [];
    this.sectUp = document.querySelector("#up");
    this.sectDown = document.querySelector("#down");
  }

  addTeam(team) {
    this.renderTeam(team);
  }

  addPlayer(player) {
    this.players.push(player);
    this.renderPlayer(player);
  }

  renderTeam(team) {
    let output = `<h1>Командa: "${team.teamName}" из города ${team.city}`;
    this.sectUp.innerHTML = output;
  }

  renderPlayer() {
    let output = "";
    this.players.forEach((player) => {
      output = `<div id="player_${player.id}"> Игрок ${player.lastName} ${player.firstName} в роли "${player.position}"</div>`;
    });
    this.sectDown.innerHTML += output;
    // this.addDeletePlayer();
  }

  // addDeletePlayer() {
  //   const div = document.querySelectorAll("div");
  //   div.forEach (div =>{
  //       div.addEventListener ("click", (event) => {
  //           event.preventDefault();
  //           let [, id] = event.target.id.split("_");
  //           const idx = this.players.findIndex(
  //             (player) => player.id.toString() === id
  //           );
  //           if (idx === -1) {
  //             return;
  //           }
  //           this.players.splice(idx, 1);
  //           this.renderPlayer();
  //         });
  //   });
}

let players = new Team();

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const newTeam = new Team(
    document.querySelector("#teamName").value,
    document.querySelector("#city").value
  );
  players.addTeam(newTeam);

  const newPlayer = new Player(
    document.querySelector("#fullName").value,
    document.querySelector("#position").value
  );
  document.querySelector("#fullName").value = "";
  document.querySelector("#position").value = "";
  players.addPlayer(newPlayer);
});
