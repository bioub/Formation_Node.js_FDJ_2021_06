// Extensibilité
console.log(Math.sum); // undefined

// mauvaise pratique d'ajouter des clés
// dans des objets que l'on a pas créé
// (risque de conflit, comme des variables globales)
Math.sum = function (a, b) {
  return a + b;
};

console.log(Math.sum(1, 2)); // 3

delete Math.sum;
console.log(Math.sum); // undefined


// Pour créer ses objets
// 2 syntaxe

// 1/ Object literal (proche de JSON)
// Premier cas d'utilisation
// - des objets simple à créer
// - si instances multiples -> pas de méthodes
const coords = {
  x: 1,
  y: 2,
};

console.log(coords.x); // 1
console.log(coords.y); // 2

coords.z = 3;
console.log(coords.z); // 3

// 2 opérateurs pour accéder aux clés
// .
console.log(coords.z); // 3
// [] (plus dynamique)
console['log'](coords['z']); // 3
const dimension = 'z'
console.log(coords[dimension]); // 3

// 2e cas d'utilisation
// - avec des méthodes -> une seule instance
const MyMath = {
  sum(a, b) {
    return a + b;
  }
};

// 1/ Fonction constructeur
// - des objets plus complexes à créer
// - avec des méthodes même si instances multiple
// - avec un type testable

// function Contact(name) {
//   this.name = name;
// }

// Contact.prototype.hello = function() {
//   return `Hello ${this.name}`;
// };

// mot clé class ES2015 (Node 4+)
class Contact {
  constructor(name) {
    this.name = name;
  }
  hello() {
    return `Hello ${this.name}`;
  }
}

const romain = new Contact('Romain');
console.log(typeof romain); // object
// delete romain.name;
console.log(romain.name); // Romain
console.log(romain.hello()); // Hello Romain

