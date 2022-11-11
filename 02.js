
function stringMasLarga(strings) {
  return strings.reduce((max,actual)=> actual.length > max.length ? actual: max);
}



module.exports = stringMasLarga