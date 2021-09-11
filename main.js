import Positions from "./positions";

class App{
    constructor(){
        this.board = new Array();
        for(let i=0;i<110;i++){
            this.board.push(i);
        }
        //console.log(this.board);
        //Escaleras
        this.board[3] = 10;
        this.board[5] = 11;
        this.board[23] = 53;
        this.board[30] =48;
        this.board[32] = 78;
        this.board[50] = 65;
        this.board[80] = 88;
        this.board[90] = 98;
        //Serpientes
        this.board[6] = 2;
        this.board[12] = 10;
        this.board[20] = 4;
        this.board[35] = 21;
        this.board[39] = 19;
        this.board[55] = 48;
        this.board[87] = 85;
        this.board[99] = 1;
        console.log(this.board);
        console.log(this.game());

    }

    dice(){
        let dice = Math.floor(Math.random()*6)+1;
        return dice;
    }

    game(){
        let j1 = new Positions();
        let j2 = new Positions();
        while(j1.currentPos()<100 && j2.currentPos()<100){
            j1.addPosition(this.dice());
            j1.newPosition(this.tableroNuevo[j1.currentPos()]);
            console.log(j1.currentPos());
            j2.addPosition(this.dice());
            j2.newPosition(this.tableroNuevo[j2.currentPos()]);
            console.log(j2.currentPos());
        }

        if(j1.currentPos() > j2.currentPos()){
            return "Player 1 WINS!"
        }
        else{
            return "Player 1 WINS!"
        }
    }
}
new App;