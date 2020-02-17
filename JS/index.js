class Seat {
    isOccupied = false;
    background = 'blue';
    updateSeat() {
        if (this.isOccupied == false){
            this.background = 'green';
            
            this.isOccupied = true;
            console.log("set to: " + this.isOccupied + this.background);
        }else {
            this.background = 'blue';
            
            this.isOccupied = false;
            console.log("set to: " + this.isOccupied + this.background);
        }
        
    }

}

let seat01 = new Seat;

// console.log(seat01.updateSeat);