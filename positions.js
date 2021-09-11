export default class Positions{
    constructor(){
        this.position = 0;
    }

    currentPos(){
        return this.position;
    }

    addPosition(position){
        this.position += position;
    }

    newPosition(position){
        this.position = position;
    }

}