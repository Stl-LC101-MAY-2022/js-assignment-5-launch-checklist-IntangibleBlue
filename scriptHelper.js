// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let container = this.document.getElementById("missionTarget")
    container.innerHTML += `
    <div id="missionTarget">
        <h2>Mission Destination</h2>
                <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star} </li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src=${imageUrl}>
    </div>
    `;


   

}

function validateInput(testInput) {
    if (testInput === '') {
        return 'Empty';
    } else if (isNaN(testInput)) {
        return 'Not a Number';
    } else {
        return 'Is a Number';

    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!")
    } 
    else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure to enter valid information for each field!")
    }
    else if (validateInput(pilot) === "Not a Number" || validateInput(copilot) === "Not a Number" || validateInput(fuelLevel) === "Is a Number" || validateInput(cargoLevel) === "Is a Number") {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Copilot ${copilot} is ready for launch`;
    }
    if (fuelLevel < 10000) {
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "Red";
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
    } 
    if (fuelLevel >= 10000) {
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
        document.getElementById("launchStatus").style.color = "Green";
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
    }
}
        
    

async function myFetch() {
        let planetsReturned;
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        // response.json().then(function(json) {
        // console.log(planetsReturned[[Math.floor(Math.random()*json.length)]]) });
        return response.json();
    })
    return planetsReturned
    
}


function pickPlanet(planets) {
     let destinationPlanet = (planets[[Math.floor(Math.random()*planets.length)]])
     console.log(destinationPlanet);
    return destinationPlanet
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
