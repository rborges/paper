class Board {
    constructor() {
        this.board = document.createElement('canvas');
        this.container = document.querySelector('#canvas-container');
        this.context;
        this.width;
        this.height;
        this.background = '#c1c1c1';
    }

    getContext() {
        return this.context;
    }

    getBoard() {
        return this.board;
    }

    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    init() {
        this._configBoardSize();
        this._draw();
    }
    _configBoardSize() {
        let width = window.innerWidth;
        let height = window.innerHeight;

        if (width <= 500) {
            this.width = 800;
            this.height = 800;
        } else {
            this.width = (width - 100);
            this.height = (height - 100);
        }
    }
    _draw() {
        this._create();
        this.context = this.board.getContext("2d");
        this.context.fillStyle = this.background;
        this.context.fillRect(0, 0, this.board.width, this.board.height);
    }
    _create() {
        this.board.setAttribute('id', 'board');
        this.board.width = this.width;
        this.board.height = this.height;
        this.board.style.border = "inset 6px #c9c9c9";
        this.container.appendChild(this.board);
    }
}


