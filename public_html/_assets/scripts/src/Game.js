/* 
 * Classe principal que controlará o jogo.
 * As atribuições desta classe são:
 * Instanciar um tabuleiro;
 * Instanciar um ou mais Carros;
 * Instanciar os Controles;
 * Iniciar e terminar um jogo
 */

class Game {
    init() {

        let board = new Board();
        board.init();

        let cart = new Cart(board);
        cart.init();

        (new Control()).init(cart);
    }
    
    loop(){
//        função para controle de renderização do jogo
        let now = Date.now();
        let delta = now - then;
        let then = now;
        requestAnimationFrame(loop());
    }

}


