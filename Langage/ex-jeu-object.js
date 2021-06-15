const Random = {
  getRandom() { // ES2015 (Method properties)
    return Math.random();
  },

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

// import l'API readline (présent dans le binaire de Node)
const readline = require('readline');

class Jeu {
  constructor(options = {}) { // Node.js 4+
    const min = options.min ?? 0; // Node.js 12+
    const max = options.max ?? 100; // Node.js 12+
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.entierAlea = Random.getRandomInt(min, max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      console.log('Vous avez déjà joué : ' + this.essais.join(' - '));
    }

    this.rl.question('Quel est le nombre ? ', (answer) => {

      const entierSaisi = parseInt(answer, 10);

      if (isNaN(entierSaisi)) {
        console.log('Erreur : il faut saisir un nombre');
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      } else {
        console.log('Gagné');
        this.rl.close();
      }
    });
  }
}

const game = new Jeu({
  max: 10,
});
game.jouer();
