function numeroSimetrico(num) {
  return ""+num === (""+num).split("").reverse().join("")

}


module.exports = numeroSimetrico