function Game() { 
    this.player_1 = new Player("X");
    this.player_2 = new Player("O");
    this.who_turn = this.player_1;
    
    
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
              
        } else 
        {
            $('.cell').addClass("cell_O");
            $('.cell').removeClass("cell_X");
            
            $('.indicator-turn').addClass("indicator_O");
            $('.indicator-turn').removeClass("indicator_X");
        }
            
        }, 1000);     
    }
    
    this.turn = function(cell){
        //alert($(cell).attr("id"))
        $('.indicator-turn').hide("pulsate",1000);
        if ($(cell).attr("type")!="X" && $(cell).attr("type")!="O"){
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
        }
        $('.indicator-turn').show("drop",1000);
        
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