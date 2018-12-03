/* 
 * Classe principal que controlará o jogo.
 * As atribuições desta classe são:
 * Instanciar um tabuleiro;
 * Instanciar um ou mais Carros;
 * Instanciar os Controles;
 * Iniciar e terminar um jogo
 */

let Game = function () {

    this.board = new Board();
    this.board.init();

    this.cart = new Cart(this.board);
    this.cart.init();

    this.control = (new Control()).init(this.cart);

    this.loop = () => {
        this.board.context.clearRect(0, 0, this.board.width, this.board.height);
        this.cart.update();
        this.cart._draw();
        requestAnimationFrame(this.loop);
    };
    requestAnimationFrame(this.loop);
};