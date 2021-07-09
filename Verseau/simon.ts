// Appelé lorsque le bouton pour lancer le jeu est appuyé
function startGame(): void {
  hideTextAndButton();
  addColorToComputerSequence();
}

// Ajout d'une nouvelle couleur aléatoire à la séquence
function addColorToComputerSequence(): void {
  computerSequence.push(Math.floor((Math.random()-0.01) * 4));
  playerTurn = false;
  playAnimationOfColorSequence();

}

// Appelé lorsqu'un bouton de couleur est appuyé.
// La variable "color" correspond à la couleur touchée par le joueur. Elle est égale à un nombre entre 0 et 3
function colorButtonPressed(color: Color): void {
}
