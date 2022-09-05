const USSHelloWorld = {
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
};

const alien1 = {
  hull: Math.floor(Math.random() * (6 /*max*/ - 3 /*min*/ + 1) + 3 /*min*/),
  firepower: Math.floor(Math.random() * (4 - 2 + 1) + 2),
  accuracy: (Math.random() * (8 - 6) + 6) / (10).toFixed(2),
};

const alien2 = {
  hull: Math.floor(Math.random() * (6 /*max*/ - 3 /*min*/ + 1) + 3 /*min*/),
  firepower: Math.floor(Math.random() * (4 - 2 + 1) + 2),
  accuracy: (Math.random() * (8 - 6) + 6) / (10).toFixed(2),
};

const alien3 = {
  hull: Math.floor(Math.random() * (6 /*max*/ - 3 /*min*/ + 1) + 3 /*min*/),
  firepower: Math.floor(Math.random() * (4 - 2 + 1) + 2),
  accuracy: (Math.random() * (8 - 6) + 6) / (10).toFixed(2),
};

const alien4 = {
  hull: Math.floor(Math.random() * (6 /*max*/ - 3 /*min*/ + 1) + 3 /*min*/),
  firepower: Math.floor(Math.random() * (4 - 2 + 1) + 2),
  accuracy: (Math.random() * (8 - 6) + 6) / (10).toFixed(2),
};

const alien5 = {
  hull: Math.floor(Math.random() * (6 /*max*/ - 3 /*min*/ + 1) + 3 /*min*/),
  firepower: Math.floor(Math.random() * (4 - 2 + 1) + 2),
  accuracy: (Math.random() * (8 - 6) + 6) / (10).toFixed(2),
};

const alien6 = {
  hull: Math.floor(Math.random() * (6 /*max*/ - 3 /*min*/ + 1) + 3 /*min*/),
  firepower: Math.floor(Math.random() * (4 - 2 + 1) + 2),
  accuracy: (Math.random() * (8 - 6) + 6) / (10).toFixed(2),
};

const aliens = [alien1, alien2, alien3, alien4, alien5, alien6];

// console.log(USSHelloWorld, aliens);

let flag = true;

let attack = document.querySelector(".attackBtn");
const retreat = document.querySelector(".retreatBtn");
retreat.addEventListener("click", () => {
  escape();
  console.log("You escaped!");
});

while (flag) {
  // Gets my attackbtn to function in clg.
  attack.addEventListener("click", () => {
    if (fire() === "attack") {
      console.log(aliens);
      //USS attacks first alien
      if (USSHelloWorld.hull > 0 && aliens[0].hull > 0) {
        if (USSHelloWorld.accuracy > Math.random()) {
          aliens[0].hull = aliens[0].hull - USSHelloWorld.firepower;
          console.log("You hit the alien");
        } else {
          // if alien survives, it attacks
          if (aliens[0].accuracy > Math.random()) {
            USSHelloWorld.hull = USSHelloWorld.hull - aliens[0].firepower;
            console.log("You have been hit");
          }
        }
        //check the health of both players before you continue
        if (aliens[0].hull <= 0) {
          console.log("Alien is destroyed");
          aliens.shift();
          // break;
          flag = false;
          if (aliens.length === 5) {
            retreat.disabled = false;
          }
        }
        if (USSHelloWorld.hull <= 0) {
          console.log("You died");
        } else {
          console.log(USSHelloWorld.hull);
          console.log(aliens[0].hull);
          // continue;
        }
      }
    }
  });
  flag = false;
}

function fire() {
  console.log("fire");
  return "attack";
}

function escape() {
  console.log("retreat");
  return "You escaped";
}
