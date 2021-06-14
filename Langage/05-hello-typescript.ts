/**
 * Une fonction qui dit bonjour
 * @param {string} name La personne à saluer
 * @returns {string} Le message de salutation
 */
function bonjour(name: string) {
  return `Hello ${name.toUpperCase()}`;
}

const prenoms = ['Régis', 'Romain', 'Jean', 'Paul'];
prenoms.push('Eric');

for (const p of prenoms) {
  console.log(bonjour(p));
}
