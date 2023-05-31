// //Creacion de los jugadores
// let player1 = { speed: 7, score: 0 };
// let player2 = { speed: 7, score: 0 };

//Inicio del juego
document.getElementById("startButton").addEventListener('click', function() {
    document.getElementById("welcome-box").style.display = 'none';      //Esconder el cuadro de bienvenida cuando de click al boton start
    document.getElementById("roadP1").style.animation = 'roadanimation 20s linear infinite';    //Mover la via

    //Mover los carros enemigos verticalmente
    document.getElementById("enemy1").style.animation = 'enemy1Anim 4s linear infinite';
    document.getElementById("enemy2").style.animation = 'enemy2Anim 2s linear infinite';
    document.getElementById("enemy3").style.animation = 'enemy3Anim 3s linear infinite';
    document.getElementById("enemy4").style.animation = 'enemy4Anim 2s linear infinite';
    document.getElementById("enemy5").style.animation = 'enemy5Anim 4s linear infinite';
    document.getElementById("enemy6").style.animation = 'enemy6Anim 2s linear infinite';
    document.getElementById("enemy7").style.animation = 'enemy7Anim 3s linear infinite';
    document.getElementById("enemy8").style.animation = 'enemy8Anim 2s linear infinite';

    //Mover carros enemigos horizontalmente
    setInterval(() => {
        num = Math.floor(Math.random() * (320 - 300 + 1) + 300);
        document.getElementById("enemy1").style.left = `${num}px`;

    }, 4000)

    //creamos dos variables donde t es superior y l es izquierda de los valores iniciales del auto jugador
    let t1 = 5
    let l1 = 5

    //Le indicamos a el auto jugador 1 que se mueva

    window.addEventListener("keydown", function (x) {

        //le asignamos los códigos de las letras para que realice el movimiento
        if (x.keyCode == 87) { //87 = letra W
            t1 = t1 - 3 //cuando se oprima la tecla w el auto sube 
        }
        if (x.keyCode == 65) { //65 = letra A
            l1 = l1 - 3 //cuando se oprima la tecla A el auto se mueve a la derecha
        }
        if (x.keyCode == 83) { //83 = letra S
            t1 = t1 + 3 //cuando se oprima la tecla S el auto baja
        }
        if (x.keyCode == 68) { //68 = letra D
            l1 = l1 + 3 //cuando se oprima la tecla w el auto se mueve a la derecha 
        }
        document.getElementById("player1-car").style.top = `${t1}vh`
        document.getElementById("player1-car").style.left = `${l1}vw`
    })
    //creamos dos variables donde t es superior y l es izquierda de los valores iniciales del auto jugador 2

    let t2 = 5
    let r2 = 5

    //Le indicamos a el auto jugador 1 que se mueva

    window.addEventListener("keydown", function (y) {

        //le asignamos los códigos de las letras para que realice el movimiento
        if (y.keyCode == 73) { //73 = letra I
            t2 = t2 - 3 //cuando se oprima la tecla w el auto sube 
        }
        if (y.keyCode == 74) { //74 = letra J
            r2 = r2 - 3 //cuando se oprima la tecla A el auto se mueve a la izquierda
        }
        if (y.keyCode == 75) { //75 = letra K
            t2 = t2 + 3 //cuando se oprima la tecla S el auto baja 
        }
        if (y.keyCode == 76) { //76 = letra L
            r2 = r2 + 3 //cuando se oprima la tecla w el auto se mueve a la derecha
        }
        document.getElementById("player2-car").style.top = `${t2}vh`
        document.getElementById("player2-car").style.left = `${r2}vw`
    })
});

// n=0
//     setInterval(()=>{
//         document.getElementById("scoreP1").innerText = 'Puntos : ${n}';
//         n = n+1;
//     })

    // player1.start = true;
    // player2.start = true;
    // player1.score = 0;
    // player2.score = 0;
    // window.requestAnimationFrame(gamePlay);


    //Crear la linea central de la via
    for(let i=0; i<5; i++){
         let roadLineElement = document.createElement('div');        //Creamos el div
         roadLineElement.setAttribute('class', 'roadLines');     //Le asignamos roadLines a la clase
         roadLineElement.y = (i*250);    //Division de las lineas y longitud
         roadLineElement.style.top = roadLineElement.y + "px";
         gameArea.appendChild(roadLineElement);      //Lo agregamos al area del juego, a las vias.
    }


