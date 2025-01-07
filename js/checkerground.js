document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("Checkerground");
    const ctx = canvas.getContext("2d");

    //get params
    const color1 = canvas.getAttribute('color1') || 'FF00FF';
    const color2 = canvas.getAttribute('color2') || '000000';
    const anix = canvas.getAttribute('anix') || 0;
    const animy = canvas.getAttribute('animy') || 0;
    // note: it didint got the params so they are set up directly into the consts. need to fix this later!

    //get size of canvas
    const width = canvas.width;
    const height = canvas.height;

    //draw checkerboard
    function drawCheckerboard() {
        const numSquares = 16; // per width
        const tileSize = width / numSquares;
        for (let y = 0; y < height; y += tileSize) {
            for (let x = 0; x < width; x += tileSize) {
                ctx.fillStyle = (Math.floor(x/tileSize) + Math.floor(y/tileSize)) % 2 === 0 
                    ? `#${color1}` 
                    : `#${color2}`;
                ctx.fillRect(x, y, tileSize, tileSize);
            }
        }
    }
    //animate this (if has params)
    function animateCheckerboard() { //do this shit later
    }
    drawCheckerboard();
});