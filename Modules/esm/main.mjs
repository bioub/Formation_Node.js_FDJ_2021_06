// Module ECMAScript (ESM, ES6)
// Node 13.3+
import Jeu from './jeu.mjs';

const game = new Jeu({
  max: 10,
});
game.jouer();
