function pluck(array, propiedad) {
  let nuevoArray = array.map((a) => a[propiedad]);
    return nuevoArray;

}


module.exports = pluck