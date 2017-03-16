const LINE_1 =[0,1,2];
const LINE_2 =[3,4,5];
const LINE_3 =[6,7,8];
const LINE_4 =[0,3,6];
const LINE_5 =[1,4,7];
const LINE_6 =[2,5,8];
const LINE_7 =[0,4,8];
const LINE_8 =[6,4,2];
var LINES = [LINE_1,LINE_2,LINE_3,LINE_4,LINE_5,LINE_6,LINE_7,LINE_8];


function Game() { 
    this.player_1 = new Player("X");
    this.player_2 = new Player("O");
    this.who_turn = this.player_1;
    this.winner
    
    this.start = function(){
        this.board = new Board();
        this.ind_set_symbol("X");
        
    }

    this.ind_set_symbol = function(Symbol){
        
        setTimeout(function(){
        
        if (Symbol == "X"){

            $('.cell').addClass("cell_X");
            $('.cell').removeClass("cell_O");
            
            $('.indicator-turn').addClass("indicator_X");
            $('.indicator-turn').removeClass("indicator_O");
            $('.messages-box').html("The turn of  the “X” player  now") ;
              
        } else 
        {
            $('.cell').addClass("cell_O");
            $('.cell').removeClass("cell_X");
            
            $('.indicator-turn').addClass("indicator_O");
            $('.indicator-turn').removeClass("indicator_X");
            $('.messages-box').html("The turn of  the “O” player  now") ;
        }
            
        }, 1000);     
    }
    
    this.turn = function(cell){
        //alert($(cell).attr("id"))
        
        if ($(cell).attr("type")!="X" && $(cell).attr("type")!="O"){
            $('.indicator-turn').hide("pulsate",1000);
            $('.messages-box').hide("fade",1000);
            if (this.who_turn.symbol == "X"){
                $(cell).addClass("set_x")
                $(cell).attr("type","X")
                this.who_turn = this.player_2
                this.ind_set_symbol("O")
                
            } else {
                $(cell).addClass("set_o")
                $(cell).attr("type","O") 
                this.who_turn = this.player_1
                this.ind_set_symbol("X")
                
            } 
            $('.messages-box').show("fade",1000);
            $('.indicator-turn').show("drop",1000);
        }
        
        this.check_winner();
    }
    
    this.check_winner = function(){
        var win_line 
        LINES.forEach(function(line){ 
            if ( line.every(function(n) { return $($('.cell')[n]).attr("type") == "X"; }) ) {
                 win_line = line 
                 this.winner="X";
                setTimeout(function(){
                 $('.messages-box').html("X player win!!!");
                },1100)
            }

            if ( line.every(function(n) { return $($('.cell')[n]).attr("type") == "O"; }) ) {
                 win_line = line 
                 this.winner="O";
                $('.messages-box').html("O player win!!!") ;
            }    
        });
        

        if (win_line) {
            this.end(win_line);
        };
    }
    
    this.end = function(win_line){
        
        win_line.forEach( function(n){
            
           $($('.cell')[n]).addClass("winner"); 
        })
        
        
        
    }
    
}

function Player(symbol) {
    this.symbol = symbol;
}
    
function Board() {
    $('.board').show("fold",3000);
    $('.indicator-turn').show("drop",3000);
    
    
}

 var game = new Game();


$('document').ready( function(){
   
    
    game.start();
    $('.cell').on( "click", function(event) {
        game.turn(event.target)
        
    console.dir(  )  });

})