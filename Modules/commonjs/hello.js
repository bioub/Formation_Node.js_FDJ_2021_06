function hello(name) {
  return `Hello ${name.toUpperCase()}`;
}

// redéfini la valeur retournée par require
module.exports = hello;
