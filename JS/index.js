class Seat {
    constructor(element){
        this.element = element;
        this.element.style.background = '#292930'; //grey
    }
    
    isOccupied = false;
    // background = '#6EB5FF'; //blue
    updateSeat() {
        if (this.isOccupied == false){
            this.element.style.background = '#3EB650'; //green
            
            this.isOccupied = true;
            console.log("set to: " + this.isOccupied + this.background);
        }else {
            this.element.style.background = '#292930'; //grey
            
            this.isOccupied = false;
            console.log("set to: " + this.isOccupied + this.background);
        }
        
    }

}

const seat01Ele = document.getElementById("seat01");
const seat02Ele = document.getElementById("seat02");
const seat03Ele = document.getElementById("seat03");
const seat04Ele = document.getElementById("seat04");

const seat05Ele = document.getElementById("seat05");
const seat06Ele = document.getElementById("seat06");
const seat07Ele = document.getElementById("seat07");
const seat08Ele = document.getElementById("seat08");

const seat09Ele = document.getElementById("seat09");
const seat10Ele = document.getElementById("seat10");
const seat11Ele = document.getElementById("seat11");
const seat12Ele = document.getElementById("seat12");

let seat01 = new Seat(seat01Ele);
let seat02 = new Seat(seat02Ele);
let seat03 = new Seat(seat03Ele);
let seat04 = new Seat(seat04Ele);

let seat05 = new Seat(seat05Ele);
let seat06 = new Seat(seat06Ele);
let seat07 = new Seat(seat07Ele);
let seat08 = new Seat(seat08Ele);

let seat09 = new Seat(seat09Ele);
let seat10 = new Seat(seat10Ele);
let seat11 = new Seat(seat11Ele);
let seat12 = new Seat(seat12Ele);

// console.log(seat01.updateSeat);