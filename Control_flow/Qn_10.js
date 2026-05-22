/**
10. Traffic Light System (Hard)

Take traffic light color from the user:

Red → Stop
Yellow → Ready
Green → Go

If invalid color entered:

Print "Invalid Traffic Signal"

Use switch-case.
*/

const user = require("prompt-sync")();

let color = user("Enter color: ").toLowerCase();


switch(color){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Traffic Signal");
}