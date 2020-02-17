class Seat {
    constructor(element){
        this.element = element;
        this.element.style.background = 'blue';
    }
    
    isOccupied = false;
    background = 'blue';
    updateSeat() {
        if (this.isOccupied == false){
            this.element.style.background = 'green';
            
            this.isOccupied = true;
            console.log("set to: " + this.isOccupied + this.background);
        }else {
            this.element.style.background = 'blue';
            
            this.isOccupied = false;
            console.log("set to: " + this.isOccupied + this.background);
        }
        
    }

}

const seat01Ele = document.getElementById("seat01");
const seat02Ele = document.getElementById("seat02");
const seat03Ele = document.getElementById("seat03");
const seat04Ele = document.getElementById("seat04");

let seat01 = new Seat(seat01Ele);
let seat02 = new Seat(seat02Ele);
let seat03 = new Seat(seat03Ele);
let seat04 = new Seat(seat04Ele);

// console.log(seat01.updateSeat);