function soloNumeros(array) {
  var soloenteros = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof(array[i])=="number") {
      soloenteros.push(array[i]);
    };
  }
  return soloenteros;
}



module.exports = soloNumeros