class TetrisManager
{
    constructor(document)
    {
        this.document = document;
        this.tetri = [];

        const playerElements = this.document.querySelectorAll('.player');
        [...playerElements].forEach(element => {
            console.log(element);
            const tetris = new Tetris(element);
            this.tetri.push(tetris);
        });
    }
}