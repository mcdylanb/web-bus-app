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

let seat01 = new Seat(seat01Ele);

// console.log(seat01.updateSeat);