/**
 * Une fonction qui dit bonjour
 * @param {string} name La personne à saluer
 * @returns {string} Le message de salutation
 */
function hello(name) {
  return `Hello ${name.toUpperCase()}`;
}

const names = ['Régis', 'Romain', 'Jean', 'Paul'];
names.push('Eric');

for (const n of names) {
  console.log(hello(n));
}
