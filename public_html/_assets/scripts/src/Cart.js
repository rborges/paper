class Cart {
    constructor(Board) {
        this.board = Board;
        this.container = document.querySelector('#board');
        this.context = Board.getContext();
        this.speed = 3.0;
        this.position;
        this.direction = 'down';
        this.x = 0;
        this.y = 0;
    }
    setDirection(value) {
        this.direction = value;
    }
    init() {
        this._create();
        this._draw();
    }
    move() {

        switch (this.direction) {
            case 'up':
                this.y -= this.speed;
                break;
            case 'down':
                this.y += this.speed;
                break;
            case 'right':
                this.x += this.speed;
                break;
            case 'left':
                this.x -= this.speed;
                break;
        }
    }
    _draw() {
        this.context.fillRect(
                this.x,
                this.y,
                this.context.width,
                this.context.height
                );
    }
    update() {
        this.move();
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