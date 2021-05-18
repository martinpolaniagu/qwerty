let canvas = document.querySelector("#partícula")
let ctx = canvas.getContext("2d")

function dibujarBoton(xC, yC, r)
{

    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'blue';
    ctx.arc(xC, yC, r, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.strokeRect(xC-r, yC-r, 2*r, 2*r);
}

let x = 0;
let y = 200;

let vX = 10;
let dT = 30;

function moverYDibujar()
{
    ctx.clearRect(0,0, 600, 400);
    let dX = dT/1000 *vX
    x = x + dX;
    dibujarBoton(x, y, 10);
}

function arrancarOParar()
{
    if (vX > 0){
        vX = 0;
    }
    else{
        vX = 10;
    }
}

window.setInterval(moverYDibujar, dT);

window.onkeyup = function(event)
{
    console.log(event.code);
    if(event.code == "Space")
    arrancarOParar();
}
