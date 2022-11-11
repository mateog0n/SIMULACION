function filtrar(funcion) {
  Array.prototype.filtrar = function(cb) {
    let newArray = [];
    this.forEach(item => {
      if(cb(item)) {
        newArray.push(item);
      }
    });
    return newArray;
  }
}

module.exports = filtrar