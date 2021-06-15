// importer Jeu
const Jeu = require('./jeu');

const game = new Jeu({
  max: 10,
});
game.jouer();
