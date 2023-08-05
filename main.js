"use strict";
    // récupération de la balise canvas
    let monCanvas = document.querySelector("canvas");
    //ajout de bordure au canvas
    monCanvas.style.border = "2px solid black";
    //récupération du contexte du canvas
    let ctx = monCanvas.getContext("2d");

// //incruster une image
    
//     //on créer un nouvel objet du DOM avec JS
//     let myImg = new Image();
//     //on définie la source de l'image
//     myImg.src = "../images/hacker.webp";
//     //on place l'image dans le canvas
//     myImg.onload = function(){
//         ctx.drawImage(myImg, 0, 0, monCanvas.width,monCanvas.height);
        
//     };

// //dessin de rectangle 

//     //dessin d'un premier rectangle avec les couleurs par défaut
//     ctx.strokeRect(50, 50, 100, 50);
//     // ajout du paramètre bordure rouge pour les futurs rectangles
//     ctx.strokeStyle = "red";
//     // création d'un second rectangle avec une bordure rouge
//     ctx.strokeRect(50, 150, 100, 50);
//     // ajout d'un paramètre de couleur rouge de remplissage des rectangles
//     ctx.fillStyle = "red";
//     // dessin d'un nouveau rectangle rempli qui n'a pas de bordures
//     ctx.fillRect (50, 250, 100, 50);


// //écriture de texte
//     // attribution d'une police de caractère au futur texte
//     ctx.font = "bold 18px Verdana";
//     //ajout d'une couleur au texte
//     ctx.fillStyle = "#d125e6"
//     //écriture du texte
//     ctx.fillText("hello", 200, 50);
//     //ajout d'une nouvelle couleur et écrasement de la précédente
//     ctx.fillStyle = "#2223F5"
//     // écriture du texte en utilisant la fonction measureText("texte à calculer").width
//     ctx.fillText ("world", 200+ctx.measureText("hello").width+10, 50);
//     //nouvelle couleur pour le texte
//     ctx.fillStyle = "#54D144"
//     // écriture
//     ctx.fillText("!", 200+ctx.measureText("hello").width+10 + ctx.measureText("world").width+10, 50);


// // déplacer un carré avec le clavier
//     // définition de notre carré que l'on va dessiner dans un objet
//     let square = {
//         color : "#3a7807",
//         length : 100,
//         x: 0,
//         y : 0
//     };

//     // on appelle une fonction pour dessiner le carré la 1ère fois
//     displaySquare();

//     //on met un écouteur d'évènement pour savoir si l'utilisateur appuie sur une flèche du clavier
//     document.addEventListener("keydown", moveSquare);

//     // les fonctions utiles pour réaliser l'exercice de mise en mouvement du carré

//     //fonction efface/dessine le carré
//     function displaySquare(){
//         //on vide le canvas avant de redessiner
//         ctx.clearRect(0,0, monCanvas.width, monCanvas.height);
//         //on dit au contexte que la couleur de remplissage vaut la couleur du carré
//         ctx.fillStyle = square.color;
//         //on trace un nouveau carré rempli(fill) avec la couleur du carré
//         ctx.fillRect(square.x, square.y, square.length, square.length);
//     };

//     //fonction qui bouge le carré
//     function moveSquare(e){
//         //on détecte la touche et la direction puis on change les coordonnées
//         switch(e.key){
//             case "ArrowRight":
//                 if(square.x + square.length < monCanvas.width)                     square.x++;
//                 break;
//             case "ArrowLeft":
//                 if (square.x >0) square.x--;
//                 break;
//             case "ArrowUp":
//                 if (square.y > 0) square.y--;
//                 break;
//             case "ArrowDown":
//                 if (square.y + square.length < monCanvas.height)
//                 square.y++;
//                 break;
//         }
//         // on redessine un carré
//         displaySquare();

//     };

// déplacer un cercle avec les flèches de direction

    //on défini les propriétés de notre cercle que l'on va dessiner dans un objet
    let circle = {
        color: "#66de86",
        radius : 50,
        x: 50,
        y: 50,
    };

    //on dessine notre cercle pour la première fois
    displayCircle();

    //on ajoute un écouteur d'évènement pour savoir si l'utilisateur appuie sur une flèche de direction du clavier
    document.addEventListener("keydown", moveCircle);

    //fonction utiles

    //on dessine le cercle
    function displayCircle(){
        //on vide le canvas avant de dessinner
        ctx.clearRect(0,0,monCanvas.width, monCanvas.height);
        //on dit au contexte que la couleur de remplissage du cercle est égale à la couleur du cercle
        ctx.fillStyle = circle.color

        //on dessine un nouveau cercle
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI);
        ctx.fill();
        
    }
    //on détecte la touche et la direction puis on change les coordonnées
    function moveCircle(e){
        switch(e.key){
            case "ArrowRight":
            if(circle.x + circle.radius < monCanvas.width) circle.x+=5;
            break;
            case "ArrowLeft":
            if(circle.x - circle.radius > 0) circle.x-=5;
            break;
            case "ArrowDown":
            if(circle.y + circle.radius < monCanvas.height) circle.y +=5;
            break;
            case "ArrowUp":
            if(circle.y - circle.radius > 0) circle.y -=5;
            break;
        };
        displayCircle();
    };