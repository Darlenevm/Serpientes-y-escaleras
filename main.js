import Positions from "./positions.js";

class App{
    constructor(){
        this.board = new Array();
        for(let i=0;i<106;i++){
            this.board.push(i);
        }
        //Escaleras
        this.board[2] = 18;
        this.board[8] = 30;
        this.board[23] = 53;
        this.board[37] = 60;
        this.board[49] = 80;
        this.board[52] = 63;
        this.board[71] = 87;
        this.board[82] = 96;
        //Serpientes
        this.board[10] = 1;
        this.board[15] = 3;
        this.board[27] = 4;
        this.board[39] = 4;
        this.board[44] = 19;
        this.board[58] = 20;
        this.board[79] = 14;
        this.board[99] = 3;
        
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
            j1.newPosition(this.board[j1.currentPos()]);
            console.log(j1.currentPos());
            j2.addPosition(this.dice());
            j2.newPosition(this.board[j2.currentPos()]);
            console.log(j2.currentPos());
        }

        if(j1.currentPos() > j2.currentPos()){
            return "Player 1 WINS!"
        }
        else{
            return "Player 2 WINS!"
        }

        
    }
}
new App;