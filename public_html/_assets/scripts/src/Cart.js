class Cart {
    constructor(Board) {
        this.board = Board;
        this.container = document.querySelector('#board');
        this.context = Board.getContext();
        this.speed = 256;
        this.position;
        this.direction;
    }
    setDirection(value) {
        this.direction = value;
    }
    init() {
        this._create();
        this._draw();
    }
    move() {
        console.log(this.direction);
    }
    _draw() {
        this.context.fillRect(
                this._getXAxys(),
                this._getYAxys(),
                this.context.width,
                this.context.height
                );
    }
    _create() {
        this.context.width = 15;
        this.context.height = 15;
        this.context.fillStyle = this._colored();
    }
    _colored() {
        /*
         * Função que verificara as cores dos oponentes 
         * e retornará uma cor ainda não utilizada
         */
        return 'blue';
    }

    _getYAxys() {
        /*
         * função verificara uma area vazia na tabuleiro
         * retornando esse valor
         */
        return 15 + (Math.random() * this.board.getHeight() - 40);
    }
    _getXAxys() {
        /*
         * função verificara uma area vazia na tabuleiro
         * retornando esse valor
         */
        return 15 + (Math.random() * this.board.getWidth() - 40);
    }

}


