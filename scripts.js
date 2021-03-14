function init() {
  window.addEventListener("load", function () {
    // Element selectors
    const takeOffBtn = document.getElementById("takeoff");
    const landBtn = document.getElementById("landing");
    const missionAbortBtn = document.getElementById("missionAbort");
    const upBtn = document.getElementById("upBtn");
    const downBtn = document.getElementById("downBtn");
    const rightBtn = document.getElementById("rightBtn");
    const leftBtn = document.getElementById("leftBtn");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let rocket = document.getElementById("rocket");
    let takeoff = false;
    rocket.style.top = "250px";
    rocket.style.left = "0px";

    // Take off button event
    takeOffBtn.addEventListener("click", function (event) {
      let prompt = window.confirm(
        "Confirm that the shuttle is ready for takeoff."
      );
      if (prompt === true) {
        takeoff = true;
        flightStatus.innerHTML = "Shuttle in flight";
        shuttleBackground.style.backgroundColor = "blue";
        rocket.style.top = "240px";
        spaceShuttleHeight.innerHTML = 10000;
      }
    });
    // Land button event
    landBtn.addEventListener("click", function (event) {
      window.alert("The shuttle is landing. Landing gear engaged.");
      flightStatus.innerHTML = "The shuttle has landed.";
      shuttleBackground.style.backgroundColor = "green";
      spaceShuttleHeight.innerHTML = 0;
      rocket.style.top = "250px";
      rocket.style.left = "0px";
      takeoff = false;
    });
    // Mission abort button event
    missionAbortBtn.addEventListener("click", function (event) {
      prompt = window.confirm("Confirm that you want to abort the mission.");
      if (prompt === true) {
        flightStatus.innerHTML = "Mission aborted.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
        rocket.style.top = "250px";
        rocket.style.left = "0px";
        takeoff = false;
      }
    });
    // Directional buttons
    // Up button
    upBtn.addEventListener("click", function (event) {
      if (takeoff === true) {
        let counter = Number(spaceShuttleHeight.innerHTML);
        if (counter < 250000) {
          counter += Number(10000);
        }
        spaceShuttleHeight.innerHTML = counter;
        let currRocketTop = rocket.style.top;
        let topNumber = Number(
          currRocketTop.slice(0, currRocketTop.length - 2)
        );
        let newTopNumber = topNumber - 10;
        if (newTopNumber < 0) {
          newTopNumber = 0;
        }
        rocket.style.top = newTopNumber + "px";
      } else {
        window.alert("Rocket has not taken off");
      }
    });
    // Down button
    downBtn.addEventListener("click", function (event) {
      if (takeoff === true) {
        let counter = Number(spaceShuttleHeight.innerHTML);
        if (counter > 10000) {
          counter -= Number(10000);
        } else {
          window.alert("You have to land!");
        }
        spaceShuttleHeight.innerHTML = counter;
        let currRocketTop = rocket.style.top;
        let topNumber = Number(
          currRocketTop.slice(0, currRocketTop.length - 2)
        );
        let newTopNumber = topNumber + 10;
        if (newTopNumber > 240) {
          newTopNumber = 240;
        }
        rocket.style.top = newTopNumber + "px";
      } else {
        window.alert("Rocket has not taken off");
      }
    });
    // Left button
    leftBtn.addEventListener("click", function (event) {
      if (takeoff === true) {
        let currRocketLeft = rocket.style.left;
        let currNumber = Number(
          currRocketLeft.slice(0, currRocketLeft.length - 2)
        );
        let newNumber = currNumber - 10;
        if (newNumber < -350) {
          newNumber = -350;
        }
        rocket.style.left = newNumber + "px";
      } else {
        window.alert("Rocket has not taken off");
      }
    });
    // Right button
    rightBtn.addEventListener("click", function (event) {
      if (takeoff === true) {
        let currRocketLeft = rocket.style.left;
        let currNumber = Number(
          currRocketLeft.slice(0, currRocketLeft.length - 2)
        );
        let newNumber = currNumber + 10;
        if (newNumber > 350) {
          newNumber = 350;
        }
        rocket.style.left = newNumber + "px";
      } else {
        window.alert("Rocket has not taken off");
      }
    });
  });
}

init();
