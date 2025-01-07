document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("Checkerground");
    const ctx = canvas.getContext("2d");

    //get params
    const color1 = canvas.getAttribute('color1') || 'FF00FF';
    const color2 = canvas.getAttribute('color2') || '000000';
    const animX = parseFloat(canvas.getAttribute('animX')) || 1;
    const animY = parseFloat(canvas.getAttribute('animY')) || 1;
    const animation = canvas.getAttribute('animation') != "false";
    // note: it didn't get the params so they are set up directly into the consts. need to fix this later!

    //get size of canvas
    const width = canvas.width;
    const height = canvas.height;
    
    // Animation offsets
    let offsetX = 0,
        offsetY = 0

    //draw checkerboard
    function drawCheckerboard() {
        const numSquares = 16; // per width
        const tileSize = width / numSquares;
        for (let y = -64; y < height + 64; y += tileSize) {
            for (let x = -64; x < width + 64; x += tileSize) {
                ctx.fillStyle = (Math.floor(x/tileSize) + Math.floor(y/tileSize)) % 2 === 0 
                    ? `#${color1}` 
                    : `#${color2}`;
                ctx.fillRect(x+offsetX, y+offsetY, tileSize, tileSize);
            }
        }
        if(animation){
            animateCheckerboard()
        }
    }
    //animate this (if has params)
    function animateCheckerboard() { //do this shit later
        offsetX = (offsetX+animX) % 64
        offsetY = (offsetY+animY) % 64
        requestAnimationFrame(drawCheckerboard)
    }
    drawCheckerboard();
});