//BATTLESHIP
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
    set_navio: false,
    set_navio_adv: false,
    ctrl_posiciona: false,
    vez: false,
    orientacao: '',
    cnt: 0,
    cnt1: 0,
    temp: 0,
    temp_pos: null,
    ctrl_dir1: 0, 
    ctrl_dir2: 0,
    ctrl_dir3: 0,
    ctrl_dir4: 0,
    ctrl_dir5: 0,
    ctrl_dir6: 0,
    ctrl_dir7: 0,
    ctrl_dir8: 0,
    ctrl_dir9: 0,
    nivel: '',
    aux: ['assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg',
          'assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg',
          'assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg',
          'assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg',
          'assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg',
          'assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg',
          'assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg',
          'assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg',
          'assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg',
          'assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg'],
    aux2: ['1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px',
           '1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px',
           '1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px',
           '1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px',
           '1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px',
           '1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px',
           '1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px',
           '1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px',
           '1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px',
           '1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px','1px 1px 1px 1px'],
    aux1: ['assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg',
           'assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg',
           'assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg',
           'assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg',
           'assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg',
           'assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg',
           'assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg',
           'assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg',
           'assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg',
           'assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg','assets/A0.jpg'],

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
        this.level();
        if (this.nivel == 'f' || this.nivel == 'F' || this.nivel == 'm' || 
            this.nivel == 'M' || this.nivel == 'i' ||this.nivel == 'I' ){
                alert("Clique no segundo tabuleiro para posicionar seus navios"); 
                this.hover_div();
        }else{
            this.start();
        } 
    },

    hover_div: function(){
        $(".divs").hover(function(){ 
            $(this).css("opacity", "0.7");
        }, function(){
            $(this).css("opacity", "1");
        }); 
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
            content += '<div class="divs" onclick="battleship.jogadas(' + i + ');battleship.hover_div()" style="background-image: url('+this.aux1[i]+'); text-indent: -9999px; background-color: rgb(52, 73, 94); ">' + this.board[i] + '</div>';
        };
        this.container_element.innerHTML = content;
        for ( i in this.board2 ) {
            content1 += '<div class="divs" id="div' + i + '" onclick="battleship.jogadas(' + i + ');battleship.hover_div()" style="background-image: url('+this.aux[i]+'); text-indent: -9999px; border-width: '+ this.aux2[i] +'; background-color: rgb(52, 73, 94); " >' + this.board2[i] + '</div>'; // style="background-color: #200487"
        };  
        this.container_element1.innerHTML = content1;
    },

   level: function(){
        this.nivel = prompt("Digite a dificuldade desejada:\n'f' para fácil\n'm' para médio\n'i' para impossível");
    },

    jogadas: function(position) {
        if (this.nivel == 'f' || this.nivel == 'F' || this.nivel == 'm' || 
            this.nivel == 'M' || this.nivel == 'i' ||this.nivel == 'I' ){
                if (!this.gameover){
                    if (this.ctrl_posiciona){
                        if (!this.vez){
                            // jogada user
                            if (this.board[position] == ''){
                                //this.play_spl();
                                this.board[position] = 'O';
                                this.aux1[position] = "assets/navios/A16.jpg";
                                this.draw();
                                this.vez = true;
                                this.jogadas();
                                //alert('ÁGUA!!');
                            }else if(this.board[position] == ' ') {
                                //this.play_exp();
                                this.board[position] = 'X';
                                this.aux1[position] = "assets/navios/A15.jpg";
                                this.draw();
                                this.vez = true;
                                this.checka_vitoria();
                                this.jogadas();
                                //alert('BOOOM!');
                            }else if(this.board[position] == 'X' || this.board[position] == 'O'){
                                this.draw();
                                alert('Casa já marcada!');
                            }              
                        }else{
                            // jogada adversário
                            if (this.nivel == 'f' || this.nivel == 'F' ){
                                this.nivel_facil();  
                            }else if (this.nivel == 'm' || this.nivel == 'M'){
                                this.nivel_medio();
                            }else if (this.nivel == 'i' || this.nivel == 'I'){
                                this.nivel_impossivel();
                            }                
                        }
                    }else if (!this.set_navio){
                        this.posiciona_navio(position);
                    }else if(!this.set_navio_adv){
                        this.posiciona_navio_adv();
                    }else if(this.set_navio && this.set_navio_adv){
                        this.ctrl_posiciona = true;
                    }
                }else{
                    alert("FIM!");
                }
        }else{
            alert('Dificuldade inválida, selecione uma opção válida!');
            this.start();
        }
    },

    nivel_facil: function(){
        var pos_bomb = Math.floor((Math.random() * 100));
        if (this.board2[pos_bomb] == 'N'){
            this.board2[pos_bomb] = 'X';
            this.aux[pos_bomb] = "assets/navios/A15.jpg";
            this.vez = false;
            this.draw();
            this.checka_vitoria();
        }else if(this.board2[pos_bomb] == ''){
            this.board2[pos_bomb] = 'O';
            this.aux[pos_bomb] = "assets/navios/A16.jpg";
            this.vez = false;
            this.draw();
        }else if (this.board2[pos_bomb] == 'X' || this.board2[pos_bomb] == 'O'){
            this.draw();
            //alert('Casa já marcada!');
            this.jogadas();
        }
    },

    nivel_medio: function(){
        if (this.temp == 0){
            var pos_bomb = Math.floor((Math.random() * 100));
            if (this.board2[pos_bomb] == 'N'){
                this.board2[pos_bomb] = 'X';
                this.aux[pos_bomb] = "assets/navios/A15.jpg";
                this.vez = false;
                this.draw();
                this.checka_vitoria();
                this.temp = 1;
                this.temp_pos = pos_bomb;
            }else if(this.board2[pos_bomb] == ''){
                this.board2[pos_bomb] = 'O';
                this.aux[pos_bomb] = "assets/navios/A16.jpg";
                this.vez = false;
                this.draw();
            }else if (this.board2[pos_bomb] == 'X' || this.board2[pos_bomb] == 'O'){
                this.draw();
                //alert('Casa já marcada!');
                this.jogadas();
            }
        }else{
            // C1
            if (this.temp_pos == 1 || this.temp_pos == 2 || this.temp_pos == 3 || this.temp_pos == 4 || 
                this.temp_pos == 5 || this.temp_pos == 6 || this.temp_pos == 7 || this.temp_pos == 8 ){
                    if (this.ctrl_dir1 == 0){   
                        if (this.board2[this.temp_pos+1] == 'N'){
                            this.board2[this.temp_pos+1] = 'X';
                            this.aux[this.temp_pos+1] = "assets/navios/A15.jpg";
                            // ?????????????
                            this.vez = false;
                            this.checka_vitoria();
                            this.temp_pos += 1;
                            this.ctrl_dir1 = 0;
                            this.draw();
                        }else{
                            this.draw();
                            //alert('Casa já marcada!');
                            this.ctrl_dir1 = 1;
                            this.jogadas();
                        }
                    }else if (this.ctrl_dir1 == 1){
                        if (this.board2[this.temp_pos-1] == 'N'){
                            this.board2[this.temp_pos-1] = 'X';
                            this.aux[this.temp_pos-1] = "assets/navios/A15.jpg";
                            this.vez = false;
                            this.draw();
                            this.checka_vitoria();
                            this.temp_pos -= 1;
                            this.ctrl_dir1 = 0;
                        }else{
                            this.draw();
                            //alert('Casa já marcada!');
                            this.ctrl_dir1 = 2;
                            this.jogadas();
                        }
                    }else if (this.ctrl_dir1 == 2){
                        if (this.board2[this.temp_pos+10] == 'N'){
                            this.board2[this.temp_pos+10] = 'X';
                            this.aux[this.temp_pos+10] = "assets/navios/A15.jpg";
                            this.vez = false;
                            this.draw();
                            this.checka_vitoria();
                            this.temp_pos += 10;
                            this.ctrl_dir1 = 0;
                        }else {
                            this.draw();
                            //alert('Casa já marcada!');
                            this.ctrl_dir1 = 0;
                            this.temp = 0;
                            this.jogadas();
                        }
                    }
            // C2
            }else if (this.temp_pos == 19 || this.temp_pos == 29 || this.temp_pos == 39 || this.temp_pos == 49 || 
                    this.temp_pos == 59 || this.temp_pos == 69 || this.temp_pos == 79 || this.temp_pos == 89 ){
                        if (this.ctrl_dir2 == 0){    
                            if (this.board2[this.temp_pos-10] == 'N'){
                                this.board2[this.temp_pos-10] = 'X';
                                this.aux[this.temp_pos-10] = "assets/navios/A15.jpg";
                                this.vez = false;
                                this.draw();
                                this.checka_vitoria();
                                this.temp_pos -= 10;
                                this.ctrl_dir2 = 0;
                            }else{
                                this.draw();
                                //alert('Casa já marcada!');
                                this.ctrl_dir2 = 1;
                                this.jogadas();
                            }
                        }else if (this.ctrl_dir2 == 1){
                            if (this.board2[this.temp_pos-1] == 'N'){
                                this.board2[this.temp_pos-1] = 'X';
                                this.aux[this.temp_pos-1] = "assets/navios/A15.jpg";
                                this.vez = false;
                                this.draw();
                                this.checka_vitoria();
                                this.temp_pos -= 1;
                                this.ctrl_dir2 = 0;
                            }else{
                                this.draw();
                                //alert('Casa já marcada!');
                                this.ctrl_dir2 = 2;
                                this.jogadas();
                            }
                        }else if (this.ctrl_dir2 == 2){
                            if (this.board2[this.temp_pos+10] == 'N'){
                                this.board2[this.temp_pos+10] = 'X';
                                this.aux[this.temp_pos+10] = "assets/navios/A15.jpg";
                                this.vez = false;
                                this.draw();
                                this.checka_vitoria();
                                this.temp_pos += 10;
                                this.ctrl_dir2 = 0;
                            }else{
                                this.draw();
                                //alert('Casa já marcada!');
                                this.ctrl_dir2 = 0;
                                this.temp = 0;
                                this.jogadas();
                            }
                        }
            // C3
            }else if (this.temp_pos == 91 || this.temp_pos == 92 || this.temp_pos == 93 || this.temp_pos == 94 || 
                    this.temp_pos == 95 || this.temp_pos == 96 || this.temp_pos == 97 || this.temp_pos == 98 ){
                        if (this.ctrl_dir3 == 0){    
                            if (this.board2[this.temp_pos-1] == 'N'){
                                this.board2[this.temp_pos-1] = 'X';
                                this.aux[this.temp_pos-1] = "assets/navios/A15.jpg";
                                this.vez = false;
                                this.draw();
                                this.checka_vitoria();
                                this.temp_pos -= 1; // se a casa já tiver ocupada?
                                this.ctrl_dir3 = 0;
                            }else{
                                this.draw();
                                //alert('Casa já marcada!');
                                this.ctrl_dir3 = 1;
                                this.jogadas();
                            }
                        }else if (this.ctrl_dir3 == 1){
                            if (this.board2[this.temp_pos-10] == 'N'){
                                this.board2[this.temp_pos-10] = 'X';
                                this.aux[this.temp_pos-10] = "assets/navios/A15.jpg";
                                this.vez = false;
                                this.draw();
                                this.checka_vitoria();
                                this.temp_pos -= 10;
                                this.ctrl_dir3 = 0;
                            }else{
                                this.draw();
                                //alert('Casa já marcada!');
                                this.ctrl_dir3 = 2;
                                this.jogadas();
                            }
                        }else if (this.ctrl_dir3 == 2){
                            if (this.board2[this.temp_pos+1] == 'N'){
                                this.board2[this.temp_pos+1] = 'X';
                                this.aux[this.temp_pos+1] = "assets/navios/A15.jpg";
                                this.vez = false;
                                this.draw();
                                this.checka_vitoria();
                                this.temp_pos += 1;
                                this.ctrl_dir3 = 0;
                            }else{
                                this.draw();
                                //alert('Casa já marcada!');
                                this.ctrl_dir3 = 0;
                                this.temp = 0;
                                this.jogadas();
                            }
                        }
            // C4
            }else if (this.temp_pos == 10 || this.temp_pos == 20 || this.temp_pos == 30 || this.temp_pos == 40 || 
                    this.temp_pos == 50 || this.temp_pos == 60 || this.temp_pos == 70 || this.temp_pos == 80 ){
                        if (this.ctrl_dir4 == 0){    
                            if (this.board2[this.temp_pos-10] == 'N'){
                                this.board2[this.temp_pos-10] = 'X';
                                this.aux[this.temp_pos-10] = "assets/navios/A15.jpg";
                                this.vez = false;
                                this.draw();
                                this.checka_vitoria();
                                this.temp_pos -= 10;
                                this.ctrl_dir4 = 0;
                            }else{
                                this.draw();
                                //alert('Casa já marcada!');
                                this.ctrl_dir4 = 1;
                                this.jogadas();
                            }
                        }else if (this.ctrl_dir4 == 1){
                            if (this.board2[this.temp_pos+10] == 'N'){
                                this.board2[this.temp_pos+10] = 'X';
                                this.aux[this.temp_pos+10] = "assets/navios/A15.jpg";
                                this.vez = false;
                                this.draw();
                                this.checka_vitoria();
                                this.temp_pos += 10;
                                this.ctrl_dir4 = 0;
                            }else{
                                this.draw();
                                //alert('Casa já marcada!');
                                this.ctrl_dir4 = 2;
                                this.jogadas();
                            }
                        }else if (this.ctrl_dir4 == 2){
                            if (this.board2[this.temp_pos+1] == 'N'){
                                this.board2[this.temp_pos+1] = 'X';
                                this.aux[this.temp_pos+1] = "assets/navios/A15.jpg";
                                this.vez = false;
                                this.draw();
                                this.checka_vitoria();
                                this.temp_pos += 1;
                                this.ctrl_dir4 = 0;
                            }else{
                                this.draw();
                                //alert('Casa já marcada!');
                                this.ctrl_dir4 = 0;
                                this.temp = 0;
                                this.jogadas();
                            }
                        }
            }else if (this.temp_pos == 0){                                    // C5
                if (this.ctrl_dir5 == 0){    
                    if (this.board2[this.temp_pos+10] == 'N'){
                        this.board2[this.temp_pos+10] = 'X';
                        this.aux[this.temp_pos+10] = "assets/navios/A15.jpg";
                        this.vez = false;
                        this.draw();
                        this.checka_vitoria();
                        this.temp_pos += 10;
                        this.ctrl_dir5 = 0;
                    }else{
                        this.draw();
                        //alert('Casa já marcada!');
                        this.ctrl_dir5 = 1;
                        this.jogadas();
                    }
                }else if (this.ctrl_dir5 == 1){
                    if (this.board2[this.temp_pos+1] == 'N'){
                        this.board2[this.temp_pos+1] = 'X';
                        this.aux[this.temp_pos+1] = "assets/navios/A15.jpg";
                        this.vez = false;
                        this.draw();
                        this.checka_vitoria();
                        this.temp_pos += 1;
                        this.ctrl_dir5 = 0;
                    }else{
                        this.draw();
                        //alert('Casa já marcada!');
                        this.ctrl_dir5 = 0;
                        this.temp = 0;
                        this.jogadas();
                    }
                }   
            }else if (this.temp_pos == 9){                                // C6
                if (this.ctrl_dir6 == 0){    
                    if (this.board2[this.temp_pos+10] == 'N'){
                        this.board2[this.temp_pos+10] = 'X';
                        this.aux[this.temp_pos+10] = "assets/navios/A15.jpg";
                        this.vez = false;
                        this.draw();
                        this.checka_vitoria();
                        this.temp_pos += 10;
                        this.ctrl_dir6 = 0;
                    }else{
                        this.draw();
                        //alert('Casa já marcada!');
                        this.ctrl_dir6 = 1;
                        this.jogadas();
                    }
                }else if (this.ctrl_dir6 == 1){
                    if (this.board2[this.temp_pos-1] == 'N'){
                        this.board2[this.temp_pos-1] = 'X';
                        this.aux[this.temp_pos-1] = "assets/navios/A15.jpg";
                        this.vez = false;
                        this.draw();
                        this.checka_vitoria();
                        this.temp_pos -= 1;
                        this.ctrl_dir6 = 0;
                    }else{
                        this.draw();
                        //alert('Casa já marcada!');
                        this.ctrl_dir6 = 0;
                        this.temp = 0;
                        this.jogadas();
                    }
                }   
            }else if (this.temp_pos == 99){                          // C7
                if (this.ctrl_dir7 == 0){    
                    if (this.board2[this.temp_pos-10] == 'N'){
                        this.board2[this.temp_pos-10] = 'X';
                        this.aux[this.temp_pos-10] = "assets/navios/A15.jpg";
                        this.vez = false;
                        this.draw();
                        this.checka_vitoria();
                        this.temp_pos -= 10;
                        this.ctrl_dir7 = 0;
                    }else{
                        this.draw();
                        //alert('Casa já marcada!');
                        this.ctrl_dir7 = 1;
                        this.jogadas();
                    }
                }else if (this.ctrl_dir7 == 1){
                    if (this.board2[this.temp_pos-1] == 'N'){
                        this.board2[this.temp_pos-1] = 'X';
                        this.aux[this.temp_pos-1] = "assets/navios/A15.jpg";
                        this.vez = false;
                        this.draw();
                        this.checka_vitoria();
                        this.temp_pos -= 1;
                        this.ctrl_dir7 = 0;
                    }else{
                        this.draw();
                        //alert('Casa já marcada!');
                        this.ctrl_dir7 = 0;
                        this.temp = 0;
                        this.jogadas();
                    }
                }   
            }else if (this.temp_pos == 90){                          // C8
                if (this.ctrl_dir8 == 0){    
                    if (this.board2[this.temp_pos-10] == 'N'){
                        this.board2[this.temp_pos-10] = 'X';
                        this.aux[this.temp_pos-10] = "assets/navios/A15.jpg";
                        this.vez = false;
                        this.draw();
                        this.checka_vitoria();
                        this.temp_pos -= 10;
                        this.ctrl_dir8 = 0;
                    }else{
                        this.draw();
                        //alert('Casa já marcada!');
                        this.ctrl_dir8 = 1;
                        this.jogadas();
                    }
                }else if (this.ctrl_dir8 == 1){
                    if (this.board2[this.temp_pos+1] == 'N'){
                        this.board2[this.temp_pos+1] = 'X';
                        this.aux[this.temp_pos+1] = "assets/navios/A15.jpg";
                        this.vez = false;
                        this.draw();
                        this.checka_vitoria();
                        this.temp_pos += 1;
                        this.ctrl_dir8 = 0;
                    }else{
                        this.draw();
                        //alert('Casa já marcada!');
                        this.ctrl_dir8 = 0;
                        this.temp = 0;
                        this.jogadas();
                    }
                }   
            } else {                                               // C9
                if (this.ctrl_dir9 == 0){   
                    if (this.board2[this.temp_pos-10] == 'N'){
                        this.board2[this.temp_pos-10] = 'X';
                        this.aux[this.temp_pos-10] = "assets/navios/A15.jpg";
                        this.vez = false;
                        this.draw();
                        this.checka_vitoria();
                        this.temp_pos -= 10;
                        this.ctrl_dir9 = 0; //
                    }else{
                        this.draw();
                        //alert('Casa já marcada!');
                        this.ctrl_dir9 = 1;
                        this.jogadas();
                    }
                }else if (this.ctrl_dir9 == 1){
                    if (this.board2[this.temp_pos+10] == 'N'){
                        this.board2[this.temp_pos+10] = 'X';
                        this.aux[this.temp_pos+10] = "assets/navios/A15.jpg";
                        this.vez = false;
                        this.draw();
                        this.checka_vitoria();
                        this.temp_pos += 10;
                        this.ctrl_dir9 = 0;
                    }else{
                        this.draw();
                        //alert('Casa já marcada!');
                        this.ctrl_dir9 = 2;
                        this.jogadas();
                    }
                }else if (this.ctrl_dir9 == 2){
                    if (this.board2[this.temp_pos+1] == 'N'){
                        this.board2[this.temp_pos+1] = 'X';
                        this.aux[this.temp_pos+1] = "assets/navios/A15.jpg";
                        this.vez = false;
                        this.draw();
                        this.checka_vitoria();
                        this.temp_pos += 1;
                        this.ctrl_dir9 = 0;
                    }else{
                        this.draw();
                        //alert('Casa já marcada!');
                        this.ctrl_dir9 = 3;
                        this.jogadas();
                    }
                }else if (this.ctrl_dir9 == 3){
                    if (this.board2[this.temp_pos-1] == 'N'){
                        this.board2[this.temp_pos-1] = 'X';
                        this.aux[this.temp_pos-1] = "assets/navios/A15.jpg";
                        this.vez = false;
                        this.draw();
                        this.checka_vitoria();
                        this.temp_pos -= 1;
                        this.ctrl_dir9 = 0;
                    }else{
                        this.draw();
                        //alert('Casa já marcada!');
                        this.ctrl_dir9 = 0;
                        this.temp = 0;
                        this.jogadas();
                    }
                }
            }                        
        }  
    },

    nivel_impossivel: function(){
        for ( i in this.board2 ) {
            if (this.board2[i] == 'N'){
                this.board2[i] = 'X';
                this.aux[i] = "assets/navios/A15.jpg";
                this.vez = false;
                this.draw();
                this.checka_vitoria();
                break;
            }
        };
    },

    posiciona_navio: function(position){
        var orient = prompt("Digite a orientação desejada:\n'v' para vertical\n'h' para horizontal", "");
        if (this.board2[position] == ''){
            if(this.cnt == 0){
                if (orient == 'v' || orient == 'V'){
                    if (position == 60 || position == 70 || position == 80 || position == 90 ||
                        position == 61 || position == 71 || position == 81 || position == 91 ||
                        position == 62 || position == 72 || position == 82 || position == 92 ||
                        position == 63 || position == 73 || position == 83 || position == 93 ||
                        position == 64 || position == 74 || position == 84 || position == 94 ||
                        position == 65 || position == 75 || position == 85 || position == 95 ||
                        position == 66 || position == 76 || position == 86 || position == 96 ||
                        position == 67 || position == 77 || position == 87 || position == 97 ||
                        position == 68 || position == 78 || position == 88 || position == 98 ||
                        position == 69 || position == 79 || position == 89 || position == 99 ){
                            alert("Sem espaço suficiente!\nEscolha outra casa!");
                    }else{
                        if (this.board2[position] == 'N' ||
                            this.board2[position+10] == 'N'||
                            this.board2[position+20] == 'N'||
                            this.board2[position+30] == 'N'||
                            this.board2[position+40] == 'N'){ 
                                alert('Navios não podem se sobrepor!');
                        }else{
                            this.board2[position] = 'N';
                            this.board2[position+10] = 'N';
                            this.board2[position+20] = 'N';
                            this.board2[position+30] = 'N';
                            this.board2[position+40] = 'N';
                            this.aux[position] = "assets/navios/A17.jpg";
                            this.aux[position+10] = "assets/navios/A18.jpg";
                            this.aux[position+20] = "assets/navios/A19.jpg";
                            this.aux[position+30] = "assets/navios/A20.jpg";
                            this.aux[position+40] = "assets/navios/A21.jpg";
                            this.aux2[position] = "1px 1px 0px 1px";
                            this.aux2[position+10] = "0px 1px 0px 1px";
                            this.aux2[position+20] = "0px 1px 0px 1px";
                            this.aux2[position+30] = "0px 1px 0px 1px";
                            this.aux2[position+40] = "0px 1px 1px 1px";
                            this.draw();
                            //alert('Navio posicionado!');
                            this.cnt += 1;
                        }
                    }
                }else if(orient == 'h' || orient == 'H'){
                    if (position == 6 || position == 7 || position == 8 || position == 9 ||
                        position == 16 || position == 17 || position == 18 || position == 19 ||
                        position == 26 || position == 27 || position == 28 || position == 29 ||
                        position == 36 || position == 37 || position == 38 || position == 39 ||
                        position == 46 || position == 47 || position == 48 || position == 49 ||
                        position == 56 || position == 57 || position == 58 || position == 59 ||
                        position == 66 || position == 67 || position == 68 || position == 69 ||
                        position == 76 || position == 77 || position == 78 || position == 79 ||
                        position == 86 || position == 87 || position == 88 || position == 89 ||
                        position == 96 || position == 97 || position == 98 || position == 99 ){    
                            alert("Sem espaço suficiente!\nEscolha outra casa!");
                    }else{
                        if (this.board2[position] == 'N' ||
                            this.board2[position+1] == 'N'||
                            this.board2[position+2] == 'N'||
                            this.board2[position+3] == 'N'||
                            this.board2[position+4] == 'N'){
                                alert('Navios não podem se sobrepor!');
                        }else{ 
                            this.board2[position] = 'N';
                            this.board2[position+1] = 'N';
                            this.board2[position+2] = 'N';
                            this.board2[position+3] = 'N';
                            this.board2[position+4] = 'N';
                            this.aux[position] = "assets/navios/A1.jpg";
                            this.aux[position+1] = "assets/navios/A2.jpg";
                            this.aux[position+2] = "assets/navios/A3.jpg";
                            this.aux[position+3] = "assets/navios/A4.jpg";
                            this.aux[position+4] = "assets/navios/A5.jpg";
                            this.aux2[position] = "1px 0px 1px 1px";
                            this.aux2[position+1] = "1px 0px 1px 0px";
                            this.aux2[position+2] = "1px 0px 1px 0px";
                            this.aux2[position+3] = "1px 0px 1px 0px";
                            this.aux2[position+4] = "1px 1px 1px 0px";
                            this.draw();
                            //alert('Navio posicionado!');
                            this.cnt += 1;
                        }
                    }
                }else{
                    alert('Valor inválido!!!\nClique no primeiro tabuleiro para posicionar seus navios');
                }
            }else if(this.cnt == 1){
                //alert(this.board2);
                if (orient == 'v' || orient == 'V'){
                    if (position == 70 || position == 80 || position == 90 ||
                        position == 71 || position == 81 || position == 91 ||
                        position == 72 || position == 82 || position == 92 ||
                        position == 73 || position == 83 || position == 93 ||
                        position == 74 || position == 84 || position == 94 ||
                        position == 75 || position == 85 || position == 95 ||
                        position == 76 || position == 86 || position == 96 ||
                        position == 77 || position == 87 || position == 97 ||
                        position == 78 || position == 88 || position == 98 ||
                        position == 79 || position == 89 || position == 99 ){
                            alert("Sem espaço suficiente!\nEscolha outra casa!");
                    }else{  
                        if (this.board2[position] == 'N'||
                            this.board2[position+10] == 'N'||
                            this.board2[position+20] == 'N'||
                            this.board2[position+30] == 'N'){
                                alert('Navios não podem se sobrepor!');
                        }else{ 
                            this.board2[position] = 'N';
                            this.board2[position+10] = 'N';
                            this.board2[position+20] = 'N';
                            this.board2[position+30] = 'N';
                            this.aux[position] = "assets/navios/A22.jpg";
                            this.aux[position+10] = "assets/navios/A23.jpg";
                            this.aux[position+20] = "assets/navios/A24.jpg";
                            this.aux[position+30] = "assets/navios/A25.jpg";
                            this.aux2[position] = "1px 1px 0px 1px";
                            this.aux2[position+10] = "0px 1px 0px 1px";
                            this.aux2[position+20] = "0px 1px 0px 1px";
                            this.aux2[position+30] = "0px 1px 1px 1px";
                            this.draw();
                            //alert('Navio posicionado!');
                            this.cnt += 1;
                        }
                    }
                }else if(orient == 'h' || orient == 'H'){
                    if (position == 7 || position == 8 || position == 9 ||
                        position == 17 || position == 18 || position == 19 ||
                        position == 27 || position == 28 || position == 29 ||
                        position == 37 || position == 38 || position == 39 ||
                        position == 47 || position == 48 || position == 49 ||
                        position == 57 || position == 58 || position == 59 ||
                        position == 67 || position == 68 || position == 69 ||
                        position == 77 || position == 78 || position == 79 ||
                        position == 87 || position == 88 || position == 89 ||
                        position == 97 || position == 98 || position == 99 ){    
                            alert("Sem espaço suficiente!\nEscolha outra casa!");
                    }else{
                        if (this.board2[position] == 'N'||
                            this.board2[position+1] == 'N'||
                            this.board2[position+2] == 'N'||
                            this.board2[position+3] == 'N'){
                                alert('Navios não podem se sobrepor!');
                        }else{
                            this.board2[position] = 'N';
                            this.board2[position+1] = 'N';
                            this.board2[position+2] = 'N';
                            this.board2[position+3] = 'N';
                            this.aux[position] = "assets/navios/A6.jpg";
                            this.aux[position+1] = "assets/navios/A7.jpg";
                            this.aux[position+2] = "assets/navios/A8.jpg";
                            this.aux[position+3] = "assets/navios/A9.jpg";
                            this.aux2[position] = "1px 0px 1px 1px";
                            this.aux2[position+1] = "1px 0px 1px 0px";
                            this.aux2[position+2] = "1px 0px 1px 0px";
                            this.aux2[position+3] = "1px 1px 1px 0px";
                            this.draw();
                            //alert('Navio posicionado!');
                            this.cnt += 1;
                        }
                    }
                }else{
                    alert('Valor inválido!!!\nClique no primeiro tabuleiro para posicionar seus navios');
                }
            }else if(this.cnt == 2){
                if (orient == 'v' || orient == 'V'){
                    if (position == 80 || position == 90 ||
                        position == 81 || position == 91 ||
                        position == 82 || position == 92 ||
                        position == 83 || position == 93 ||
                        position == 84 || position == 94 ||
                        position == 85 || position == 95 ||
                        position == 86 || position == 96 ||
                        position == 87 || position == 97 ||
                        position == 88 || position == 98 ||
                        position == 89 || position == 99 ){
                            alert("Sem espaço suficiente!\nEscolha outra casa!");
                    }else{    
                        if(this.board2[position] == 'N'||
                            this.board2[position+10] == 'N'||
                            this.board2[position+20] == 'N'){
                                alert('Navios não podem se sobrepor!');
                        }else{
                            this.board2[position] = 'N';
                            this.board2[position+10] = 'N';
                            this.board2[position+20] = 'N';
                            this.aux[position] = "assets/navios/A26.jpg";
                            this.aux[position+10] = "assets/navios/A27.jpg";
                            this.aux[position+20] = "assets/navios/A28.jpg";
                            this.aux2[position] = "1px 1px 0px 1px";
                            this.aux2[position+10] = "0px 1px 0px 1px";
                            this.aux2[position+20] = "0px 1px 1px 1px";
                            this.draw();
                            //alert('Navio posicionado!');
                            this.cnt += 1;
                        }
                    }
                }else if(orient == 'h' || orient == 'H'){
                    if (position == 8 || position == 9 ||
                        position == 18 || position == 19 ||
                        position == 28 || position == 29 ||
                        position == 38 || position == 39 ||
                        position == 48 || position == 49 ||
                        position == 58 || position == 59 ||
                        position == 68 || position == 69 ||
                        position == 78 || position == 79 ||
                        position == 88 || position == 89 ||
                        position == 98 || position == 99 ){    
                            alert("Sem espaço suficiente!\nEscolha outra casa!");
                    }else{
                        if (this.board2[position] == 'N'||
                            this.board2[position+1] == 'N'||
                            this.board2[position+2] == 'N'){
                                alert('Navios não podem se sobrepor!');
                        }else{
                            this.board2[position] = 'N';
                            this.board2[position+1] = 'N';
                            this.board2[position+2] = 'N';
                            this.aux[position] = "assets/navios/A10.jpg";
                            this.aux[position+1] = "assets/navios/A11.jpg";
                            this.aux[position+2] = "assets/navios/A12.jpg";
                            this.aux2[position] = "1px 0px 1px 1px";
                            this.aux2[position+1] = "1px 0px 1px 0px";
                            this.aux2[position+2] = "1px 1px 1px 0px";
                            this.draw();
                            //alert('Navio posicionado!');
                            this.cnt += 1;
                        }
                    }
                }else{
                    alert('Valor inválido!!!\nClique no primeiro tabuleiro para posicionar seus navios');
                }
            }else if(this.cnt == 3){
                if (orient == 'v' || orient == 'V'){
                    if (position == 90 ||
                        position == 91 ||
                        position == 92 ||
                        position == 93 ||
                        position == 94 ||
                        position == 95 ||
                        position == 96 ||
                        position == 97 ||
                        position == 98 ||
                        position == 99 ){
                            alert("Sem espaço suficiente!\nEscolha outra casa!");
                    }else{
                        if (this.board2[position] == 'N'||
                            this.board2[position+10] == 'N'){
                                alert('Navios não podem se sobrepor!');
                        }else{
                            this.board2[position] = 'N';
                            this.board2[position+10] = 'N';
                            this.aux[position] = "assets/navios/A29.jpg";
                            this.aux[position+10] = "assets/navios/A30.jpg";
                            this.aux2[position] = "1px 1px 0px 1px";
                            this.aux2[position+10] = "0px 1px 1px 1px";
                            this.draw();
                            //alert('Navio posicionado!');
                            this.cnt += 1;
                        }
                    }
                }else if(orient == 'h' || orient == 'H'){
                    if (position == 9 ||
                        position == 19 ||
                        position == 29 ||
                        position == 39 ||
                        position == 49 ||
                        position == 59 ||
                        position == 69 ||
                        position == 79 ||
                        position == 89 ||
                        position == 99 ){    
                            alert("Sem espaço suficiente!\nEscolha outra casa!");
                    }else{
                        if (this.board2[position] == 'N'||
                        this.board2[position+1] == 'N'){
                            alert('Navios não podem se sobrepor!');
                        }else{
                            this.board2[position] = 'N';
                            this.board2[position+1] = 'N';
                            this.aux[position] = "assets/navios/A13.jpg";
                            this.aux[position+1] = "assets/navios/A14.jpg";
                            this.aux2[position] = "1px 0px 1px 1px";
                            this.aux2[position+1] = "1px 1px 1px 0px";
                            this.draw();
                            //alert('Navio posicionado!');
                            this.cnt += 1;
                        }
                    }
                }else{
                    alert('Valor inválido!!!\nClique no primeiro tabuleiro para posicionar seus navios');
                }
            }else if(this.cnt == 4){
                if (orient == 'v' || orient == 'V'){
                    if (position == 90 ||
                        position == 91 ||
                        position == 92 ||
                        position == 93 ||
                        position == 94 ||
                        position == 95 ||
                        position == 96 ||
                        position == 97 ||
                        position == 98 ||
                        position == 99 ){
                            alert("Sem espaço suficiente!\nEscolha outra casa!");
                    }else{     
                        if (this.board2[position] == 'N'||
                            this.board2[position+10] == 'N'){
                            alert('Navios não podem se sobrepor!');
                        }else{
                            this.board2[position] = 'N';
                            this.board2[position+10] = 'N';
                            this.aux[position] = "assets/navios/A29.jpg";
                            this.aux[position+10] = "assets/navios/A30.jpg";
                            this.aux2[position] = "1px 1px 0px 1px";
                            this.aux2[position+10] = "0px 1px 1px 1px";
                            //alert('Navio posicionado!');
                            this.cnt += 1;
                            this.draw();
                        }
                    }
                }else if(orient == 'h' || orient == 'H'){
                    if (position == 9 ||
                        position == 19 ||
                        position == 29 ||
                        position == 39 ||
                        position == 49 ||
                        position == 59 ||
                        position == 69 ||
                        position == 79 ||
                        position == 89 ||
                        position == 99 ){    
                            alert("Sem espaço suficiente!\nEscolha outra casa!");
                    }else{
                        if (this.board2[position] == 'N'||
                        this.board2[position+1] == 'N'){
                            alert('Navios não podem se sobrepor!');
                        }else{
                            this.board2[position] = 'N';
                            this.board2[position+1] = 'N';
                            //alert('Navio posicionado!');
                            this.aux[position] = "assets/navios/A13.jpg";
                            this.aux[position+1] = "assets/navios/A14.jpg";
                            this.aux2[position] = "1px 0px 1px 1px";
                            this.aux2[position+1] = "1px 1px 1px 0px";
                            this.cnt += 1;
                            this.draw();
                        }
                    }
                }else{
                    alert('Valor inválido!!!\nClique no primeiro tabuleiro para posicionar seus navios');
                }
            }
        }else{
            this.draw();
            //alert('Casa já marcada posicion_navio()!');
        }
        if (this.cnt == 5){
            this.set_navio = true;
            this.jogadas();
        }
    },

    posiciona_navio_adv: function(){
        var pos = Math.floor((Math.random() * 100));
        if (this.board[pos] == ''){
            if(this.cnt1 == 0){    
                if(pos%2 == 0){
                    if (pos == 60 || pos == 70 || pos == 80 || pos == 90 ||
                        pos == 61 || pos == 71 || pos == 81 || pos == 91 ||
                        pos == 62 || pos == 72 || pos == 82 || pos == 92 ||
                        pos == 63 || pos == 73 || pos == 83 || pos == 93 ||
                        pos == 64 || pos == 74 || pos == 84 || pos == 94 ||
                        pos == 65 || pos == 75 || pos == 85 || pos == 95 ||
                        pos == 66 || pos == 76 || pos == 86 || pos == 96 ||
                        pos == 67 || pos == 77 || pos == 87 || pos == 97 ||
                        pos == 68 || pos == 78 || pos == 88 || pos == 98 ||
                        pos == 69 || pos == 79 || pos == 89 || pos == 99 ){
                            //alert("Sem espaço suficiente!\nEscolha outra casa! 11");
                            this.jogadas();
                    }else{   
                        if (this.board[pos] == ' '||
                            this.board[pos+10] == ' '||
                            this.board[pos+20] == ' '||
                            this.board[pos+30] == ' '||
                            this.board[pos+40] == ' '){
                                //alert('Navios não podem se sobrepor!');
                                this.jogadas();
                        }else{
                            this.board[pos] = ' ';
                            this.board[pos+10] = ' ';
                            this.board[pos+20] = ' ';
                            this.board[pos+30] = ' ';
                            this.board[pos+40] = ' ';
                            this.draw();
                            alert('Porta-aviões posicionado!');
                            this.cnt1 += 1;
                            //alert(this.cnt1 + '-5v');
                        }
                    }
                }else{
                    if (pos == 6 || pos == 7 || pos == 8 || pos == 9 ||
                        pos == 16 || pos == 17 || pos == 18 || pos == 19 ||
                        pos == 26 || pos == 27 || pos == 28 || pos == 29 ||
                        pos == 36 || pos == 37 || pos == 38 || pos == 39 ||
                        pos == 46 || pos == 47 || pos == 48 || pos == 49 ||
                        pos == 56 || pos == 57 || pos == 58 || pos == 59 ||
                        pos == 66 || pos == 67 || pos == 68 || pos == 69 ||
                        pos == 76 || pos == 77 || pos == 78 || pos == 79 ||
                        pos == 86 || pos == 87 || pos == 88 || pos == 89 ||
                        pos == 96 || pos == 97 || pos == 98 || pos == 99 ){    
                            //alert("Sem espaço suficiente!\nEscolha outra casa! 12");
                            this.jogadas();
                    }else{
                        if (this.board[pos] == ' '||
                            this.board[pos+1] == ' '||
                            this.board[pos+2] == ' '||
                            this.board[pos+3] == ' '||
                            this.board[pos+4] == ' '){
                                //alert('Navios não podem se sobrepor!');
                                this.jogadas();
                        }else{
                            this.board[pos] = ' ';
                            this.board[pos+1] = ' ';
                            this.board[pos+2] = ' ';
                            this.board[pos+3] = ' ';
                            this.board[pos+4] = ' ';
                            this.draw();
                            alert('Porta-aviões adversário posicionado!');
                            this.cnt1 += 1;
                            //alert(this.cnt1 + '-5h');
                        }
                    }
                }
            }else if(this.cnt1 == 1){    
                if(pos%2 == 0){    
                    if (pos == 70 || pos == 80 || pos == 90 ||
                        pos == 71 || pos == 81 || pos == 91 ||
                        pos == 72 || pos == 82 || pos == 92 ||
                        pos == 73 || pos == 83 || pos == 93 ||
                        pos == 74 || pos == 84 || pos == 94 ||
                        pos == 75 || pos == 85 || pos == 95 ||
                        pos == 76 || pos == 86 || pos == 96 ||
                        pos == 77 || pos == 87 || pos == 97 ||
                        pos == 78 || pos == 88 || pos == 98 ||
                        pos == 79 || pos == 89 || pos == 99 ){
                            //alert("Sem espaço suficiente!\nEscolha outra casa! 13");
                            this.jogadas();
                    }else{
                        if (this.board[pos] == ' '||
                            this.board[pos+10] == ' '||
                            this.board[pos+20] == ' '||
                            this.board[pos+30] == ' '){
                                //alert('Navios não podem se sobrepor!');
                                this.jogadas();
                        }else{
                            this.board[pos] = ' ';
                            this.board[pos+10] = ' ';
                            this.board[pos+20] = ' ';
                            this.board[pos+30] = ' ';
                            this.draw();
                            alert('Destroyer adversário posicionado!');
                            this.cnt1 += 1;
                            //alert(this.cnt1 + '-4v');
                        }
                    }
                }else{
                    if (pos == 7 || pos == 8 || pos == 9 ||
                        pos == 17 || pos == 18 || pos == 19 ||
                        pos == 27 || pos == 28 || pos == 29 ||
                        pos == 37 || pos == 38 || pos == 39 ||
                        pos == 47 || pos == 48 || pos == 49 ||
                        pos == 57 || pos == 58 || pos == 59 ||
                        pos == 67 || pos == 68 || pos == 69 ||
                        pos == 77 || pos == 78 || pos == 79 ||
                        pos == 87 || pos == 88 || pos == 89 ||
                        pos == 97 || pos == 98 || pos == 99 ){    
                            //alert("Sem espaço suficiente!\nEscolha outra casa! 14");
                            this.jogadas();
                    }else{
                        if (this.board[pos] == ' '||
                            this.board[pos+1] == ' '||
                            this.board[pos+2] == ' '||
                            this.board[pos+3] == ' '){
                                //alert('Navios não podem se sobrepor!');
                                this.jogadas();
                        }else{
                            this.board[pos] = ' ';
                            this.board[pos+1] = ' ';
                            this.board[pos+2] = ' ';
                            this.board[pos+3] = ' ';
                            this.draw();
                            alert('Destroyer adversário posicionado!');
                            this.cnt1 += 1;
                            //alert(this.cnt1 + '-4h');
                        }
                    }
                }
            }else if(this.cnt1 == 2){    
                if(pos%2 == 0){    
                    if (pos == 80 || pos == 90 ||
                        pos == 81 || pos == 91 ||
                        pos == 82 || pos == 92 ||
                        pos == 83 || pos == 93 ||
                        pos == 84 || pos == 94 ||
                        pos == 85 || pos == 95 ||
                        pos == 86 || pos == 96 ||
                        pos == 87 || pos == 97 ||
                        pos == 88 || pos == 98 ||
                        pos == 89 || pos == 99 ){
                            //alert("Sem espaço suficiente!\nEscolha outra casa! 15");
                            this.jogadas();
                    }else{    
                        if (this.board[pos] == ' '||
                            this.board[pos+10] == ' '||
                            this.board[pos+20] == ' '){
                                //alert('Navios não podem se sobrepor!');
                                this.jogadas();
                        }else{
                            this.board[pos] = ' ';
                            this.board[pos+10] = ' ';
                            this.board[pos+20] = ' ';
                            this.draw();
                            alert('Fragata adversária posicionada!');
                            this.cnt1 += 1;
                            //alert(this.cnt1 + '-3v');
                        }
                    }
                }else{
                    if (pos == 8 || pos == 9 ||
                        pos == 18 || pos == 19 ||
                        pos == 28 || pos == 29 ||
                        pos == 38 || pos == 39 ||
                        pos == 48 || pos == 49 ||
                        pos == 58 || pos == 59 ||
                        pos == 68 || pos == 69 ||
                        pos == 78 || pos == 79 ||
                        pos == 88 || pos == 89 ||
                        pos == 98 || pos == 99 ){    
                            //alert("Sem espaço suficiente!\nEscolha outra casa! 16");
                            this.jogadas();
                    }else{    
                        if (this.board[pos] == ' '||
                            this.board[pos+1] == ' '||
                            this.board[pos+2] == ' '){
                                //alert('Navios não podem se sobrepor!');
                                this.jogadas();
                        }else{
                            this.board[pos] = ' ';
                            this.board[pos+1] = ' ';
                            this.board[pos+2] = ' ';
                            this.draw();
                            alert('Fragata adversária posicionada!');
                            this.cnt1 += 1;
                            //alert(this.cnt1 + '-3h');
                        }
                    }
                }
            }else if(this.cnt1 == 3){    
                if(pos%2 == 0){    
                    if (pos == 90 ||
                        pos == 91 ||
                        pos == 92 ||
                        pos == 93 ||
                        pos == 94 ||
                        pos == 95 ||
                        pos == 96 ||
                        pos == 97 ||
                        pos == 98 ||
                        pos == 99 ){
                            //alert("Sem espaço suficiente!\nEscolha outra casa! 17");
                            this.jogadas();
                    }else{    
                        if (this.board[pos] == ' '||
                            this.board[pos+10] == ' '){
                                //alert('Navios não podem se sobrepor!');
                                this.jogadas();
                        }else{
                            this.board[pos] = ' ';
                            this.board[pos+10] = ' ';
                            this.draw();
                            alert('Submarino adversário posicionado!');
                            this.cnt1 += 1;
                            //alert(this.cnt1 + '-2av');
                        }
                    }
                }else{
                    if (pos == 9 ||
                        pos == 19 ||
                        pos == 29 ||
                        pos == 39 ||
                        pos == 49 ||
                        pos == 59 ||
                        pos == 69 ||
                        pos == 79 ||
                        pos == 89 ||
                        pos == 99 ){    
                            //alert("Sem espaço suficiente!\nEscolha outra casa! 18");
                            this.jogadas();
                    }else{  
                        if (this.board[pos] == ' '||
                        this.board[pos+1] == ' '){
                            //alert('Navios não podem se sobrepor!');
                            this.jogadas();
                        }else{
                            this.board[pos] = ' ';
                            this.board[pos+1] = ' ';
                            this.draw();
                            alert('Submarino adversário posicionado!');
                            this.cnt1 += 1;
                            //alert(this.cnt1 + '-2ah');
                        }
                    }
                }
            }else if(this.cnt1 == 4){    
                if(pos%2 == 0){    
                    if (pos == 90 ||
                        pos == 91 ||
                        pos == 92 ||
                        pos == 93 ||
                        pos == 94 ||
                        pos == 95 ||
                        pos == 96 ||
                        pos == 97 ||
                        pos == 98 ||
                        pos == 99 ){
                            //alert("Sem espaço suficiente!\nEscolha outra casa! 19");
                            this.jogadas();
                    }else{       
                        if (this.board[pos] == ' '||
                        this.board[pos+10] == ' '){
                            //alert('Navios não podem se sobrepor!');
                            this.jogadas();
                        }else{    
                            this.board[pos] = ' ';
                            this.board[pos+10] = ' ';
                            this.draw();
                            alert('Submarino adversário posicionado!');
                            alert('Faça sua jogada!');
                            this.cnt1 += 1;
                            //alert(this.cnt1 + '-2bv');
                        }
                    }
                }else{
                    if (pos == 9 ||
                        pos == 19 ||
                        pos == 29 ||
                        pos == 39 ||
                        pos == 49 ||
                        pos == 59 ||
                        pos == 69 ||
                        pos == 79 ||
                        pos == 89 ||
                        pos == 99 ){    
                            //alert("Sem espaço suficiente!\nEscolha outra casa! 20");
                            this.jogadas();
                    }else{      
                        if (this.board[pos] == ' '||
                        this.board[pos+1] == ' '){
                            //alert('Navios não podem se sobrepor!');
                            this.jogadas();
                        }else{    
                            this.board[pos] = ' ';
                            this.board[pos+1] = ' ';
                            this.draw();
                            alert('Submarino adversário posicionado!');
                            alert('Faça sua jogada!');
                            this.cnt1 += 1;
                            //alert(this.cnt1 + '-2bh');
                        }
                    }
                }
            }
        }else{
            this.draw();
            //alert('Casa já marcada!');
        }
        if (this.cnt1 == 5){
            this.set_navio_adv = true;
        }
        this.jogadas();
    },

    checka_vitoria: function(){
        var vit_board = 0;
        var vit_board2 = 0; 
        for ( i in this.board ) {
            if(this.board[i] == 'X'){
                vit_board += 1;
            }
        };
        for ( i in this.board2 ) {
            if(this.board2[i] == 'X'){
                vit_board2 += 1;
            }
        };
        if(vit_board == 16){
            this.gameover = true;
            alert('Você venceu!!!');
        }else if(vit_board2 == 16){
            this.gameover = true;
            alert('Perdeu pra máquina...')
        }
    },
};                      
//codigo do Ariel começa aqui!!!














$(play);
// function play(){
//     $('nav').delay(500).slideDown(500);
    // $('#play').click(function(){
    //     $('nav').fadeOut(400,function(){
    //         $('main').slideDown(400,function(){
    //               battleship.init( document.querySelector('#board1') ),
    //               battleship.init1( document.querySelector('#board2') ),
    //               battleship.start()
    //         })
    //     });
        
            // battleship.init( document.querySelector('#board1') ),
            // battleship.init1( document.querySelector('#board2') ),
            // battleship.start()
    // });
    
    // seleao niveis
    
 function play(){
    $('.modals').slideDown(400);
    
    $('.dif').click(function(){
        dif = '';
        
        dif = $(this).attr('id');
            
        
        
            battleship.init( document.querySelector('#board1') ),
            battleship.init1( document.querySelector('#board2') ),
            battleship.start()
    })
     
 } 
    
    
    
//     $('#aLogin').click(function(){
//         $('nav').slideUp(400,function(){
//             $('#divLogin').slideDown(400)
//         })
//     })
//     $('#aScore').click(function(){
//         $('nav').slideUp(400,function(){
//             $('#divScore').slideDown(400)
//         })
//     })
//      $('#aRegister').click(function(){
//         $('nav').slideUp(400,function(){
//             $('#divRegister').slideDown(400)
//         })
//     })
    
//     $(".return").click(function() {
//         $(this).parent("div").slideUp(400,function(){
//             $("nav").slideDown(400)
//         })
//     })
// }
// código mira-->
// $(main);
// function main(){
// $("main div").click(function(){
//     var x = $(this).position();
//   if(x.top>0){
//     $("#aimH").animate( {top:"0px"});
//     $("#aimV").animate( {left:"0px"});
//     $("#aimH").animate( {top:x.top+50});
//     $("#aimV").animate( {left:x.left+50});
//     //alert("top="+x.top+"px "+"left ="+x.left+"px");
//   }
    
// });}