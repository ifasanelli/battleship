const battleship = {

    // ATRIBUTOS
    board: ['','','','','','','','','','',
            '','','','','','','','','','',
            '','','','','','','','','','',
            '','','','','','','','','','',
            '','','','','','','','','','',
            '','','','','','','','','','',
            '','','','','','','','','','',
            '','','','','','','','','','',
            '','','','','','','','','','',
            '','','','','','','','','',''],

    board2: ['','','','','','','','','','',
            '','','','','','','','','','',
            '','','','','','','','','','',
            '','','','','','','','','','',
            '','','','','','','','','','',
            '','','','','','','','','','',
            '','','','','','','','','','',
            '','','','','','','','','','',
            '','','','','','','','','','',
            '','','','','','','','','',''],

    container_element: null,
    gameover: false,
      
    // FUNÇÕES
    init: function(container) {
        this.container_element = container;
    },

    init1: function(container) {
        this.container_element1 = container;
    },

    start: function() {
        //this.board.fill('');
        this.draw();
        this.gameover = false;
        //alert("Clique no segundo tabuleiro para posicionar seus navios");     
    },

    game_is_over: function() {
        this.gameover = true;
        console.log('GAME OVER');
        alert('GAME OVER')
    },    

    draw: function() {
        let content = '';
        let content1 = '';
        for ( i in this.board ) {
            content += '<div class="divs" onclick="battleship.jogadas(' + i + ')">' + this.board[i] + '</div>';
        };
        this.container_element.innerHTML = content;
        for ( i in this.board2 ) {
            content1 += '<div class="divs" onclick="battleship.jogadas(' + i + ')">' + this.board2[i] + '</div>';
        };
        this.container_element1.innerHTML = content1;
        //this.container_element.style.visibility = hidden;
    },
};