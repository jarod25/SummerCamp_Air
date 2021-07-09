// récupération des éléments HTML en TypeScript pour pouvoir les utiliser
var startButton = document.getElementById("start-game");
var infoText = document.getElementById('info-text');
var redButton = document.getElementById('red-button');
var greenButton = document.getElementById('green-button');
var yellowButton = document.getElementById('yellow-button');
var blueButton = document.getElementById('blue-button');
// Déclaration d'une énumération Color pour facilité le code
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["yellow"] = 2] = "yellow";
    Color[Color["blue"] = 3] = "blue";
})(Color || (Color = {}));
var computerSequence = []; // Stock la séquence de couleur demander par l'ordinateur
var playerSequence = []; // Stock la séquence de couleur effectuer par le joueur
var playerTurn = false; // Savoir si c'est au tour du joueur. "false" : il ne peut pas jouer, "true" : il peut jouer
// Initialise les éléments en début de jeu
function initializeGameElements() {
    computerSequence = [];
    playerSequence = [];
    playerTurn = false;
}
// Vérifie si la couleur envoyée correspond bien à la couleur se trouvant à la case de l'index demandé
function wrongColor(color) {
    if (computerSequence[playerSequence.length - 1] != color)
        return true;
    return false;
}
// Cache le bouton pour lancer la partie et le texte informatif s'il y a
function hideTextAndButton() {
    if (!infoText.classList.contains('hidden'))
        infoText.classList.add('hidden');
    startButton.classList.add('hidden');
}
// Réaffiche le bouton pour lancer le jeu et modifie les différents textes à affiché
// La variable "status" doit avoir la valeur de "true" si le joueur à gagner et "false" si je joueur a perdu
function closeGame(status) {
    startButton.classList.remove('hidden');
    infoText.classList.remove('hidden');
    initializeGameElements();
    if (status === true) {
        infoText.innerHTML = "Vous avez gagné";
        startButton.firstChild.textContent = "Relancer";
    }
    else {
        infoText.innerHTML = "Vous avez perdu";
        startButton.firstChild.textContent = "Réessayer";
    }
}
// Lance l'animation des boutons dans l'ordre nécessaire
function playAnimationOfColorSequence(index) {
    if (index === void 0) { index = 0; }
    if (index >= computerSequence.length) {
        playerTurn = true;
        return;
    }
    var color = computerSequence[index];
    if (color === Color.red) {
        setTimeout(function () {
            redButton.classList.add('red-animation');
            setTimeout(function () {
                redButton.classList.remove('red-animation');
                playAnimationOfColorSequence(index + 1);
            }, 1000);
        }, 300);
    }
    else if (color === Color.green) {
        setTimeout(function () {
            greenButton.classList.add('green-animation');
            setTimeout(function () {
                greenButton.classList.remove('green-animation');
                playAnimationOfColorSequence(index + 1);
            }, 1000);
        }, 300);
    }
    else if (color === Color.yellow) {
        setTimeout(function () {
            yellowButton.classList.add('yellow-animation');
            setTimeout(function () {
                yellowButton.classList.remove('yellow-animation');
                playAnimationOfColorSequence(index + 1);
            }, 1000);
        }, 300);
    }
    else {
        setTimeout(function () {
            blueButton.classList.add('blue-animation');
            setTimeout(function () {
                blueButton.classList.remove('blue-animation');
                playAnimationOfColorSequence(index + 1);
            }, 1000);
        }, 300);
    }
}
// Ajoute des détecteurs aux différents boutons afin de savoir quand le joueur appuie dessus
redButton.addEventListener('click', function () { return colorButtonPressed(Color.red); });
greenButton.addEventListener('click', function () { return colorButtonPressed(Color.green); });
yellowButton.addEventListener('click', function () { return colorButtonPressed(Color.yellow); });
blueButton.addEventListener('click', function () { return colorButtonPressed(Color.blue); });
startButton.addEventListener('click', function () { return startGame(); });
