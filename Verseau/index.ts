// récupération des éléments HTML en TypeScript pour pouvoir les utiliser
const startButton = document.getElementById("start-game");
const infoText = document.getElementById('info-text');

const redButton = document.getElementById('red-button');
const greenButton = document.getElementById('green-button');
const yellowButton = document.getElementById('yellow-button');
const blueButton = document.getElementById('blue-button');

// Déclaration d'une énumération Color pour facilité le code
enum Color {
  red,
  green,
  yellow,
  blue
}

let computerSequence: Color[]  = []; // Stock la séquence de couleur demander par l'ordinateur
let playerSequence: Color[] = []; // Stock la séquence de couleur effectuer par le joueur
let playerTurn: boolean = false; // Savoir si c'est au tour du joueur. "false" : il ne peut pas jouer, "true" : il peut jouer


// Initialise les éléments en début de jeu
function initializeGameElements(): void {
  computerSequence = [];
  playerSequence = [];
  playerTurn = false;
}


// Vérifie si la couleur envoyée correspond bien à la couleur se trouvant à la case de l'index demandé
function wrongColor(color: Color): boolean {
  if (computerSequence[playerSequence.length - 1] != color)
    return true;
  return false;
}

// Cache le bouton pour lancer la partie et le texte informatif s'il y a
function hideTextAndButton(): void {
  if (!infoText.classList.contains('hidden'))
    infoText.classList.add('hidden');
  startButton.classList.add('hidden');
}

// Réaffiche le bouton pour lancer le jeu et modifie les différents textes à affiché
// La variable "status" doit avoir la valeur de "true" si le joueur à gagner et "false" si je joueur a perdu
function closeGame(status: boolean): void {
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
function playAnimationOfColorSequence(index: number = 0): void {
  if (index >= computerSequence.length) {
    playerTurn = true;
    return;
  }

  let color: Color = computerSequence[index];

  if (color === Color.red) {
    setTimeout(() => {
      redButton.classList.add('red-animation');
      setTimeout(() => {
        redButton.classList.remove('red-animation');
         playAnimationOfColorSequence(index + 1);
      }, 1000);
    }, 300);
  }
  else if (color === Color.green) {
    setTimeout(() => {
      greenButton.classList.add('green-animation');
      setTimeout(() => {
        greenButton.classList.remove('green-animation');
         playAnimationOfColorSequence(index + 1);
      }, 1000);
    }, 300);
  }
  else if (color === Color.yellow) {
    setTimeout(() => {
      yellowButton.classList.add('yellow-animation');
      setTimeout(() => {
        yellowButton.classList.remove('yellow-animation');
         playAnimationOfColorSequence(index + 1);
      }, 1000);
    }, 300);
  } else {
    setTimeout(() => {
      blueButton.classList.add('blue-animation');
      setTimeout(() => {
        blueButton.classList.remove('blue-animation');
         playAnimationOfColorSequence(index + 1);
      }, 1000);
    }, 300);
  }
}

// Ajoute des détecteurs aux différents boutons afin de savoir quand le joueur appuie dessus
redButton.addEventListener('click', () => colorButtonPressed(Color.red));
greenButton.addEventListener('click', () => colorButtonPressed(Color.green));
yellowButton.addEventListener('click', () => colorButtonPressed(Color.yellow));
blueButton.addEventListener('click', () => colorButtonPressed(Color.blue));

startButton.addEventListener('click', () => startGame());
