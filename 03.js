function buscarAmigo(amigos, nombre) {
  var amigo_encontrado;
  amigos.forEach(amigo => { 
    if (amigo.nombre === nombre) {
      amigo_encontrado = amigo;
    }
  } ); 
  
  if (amigo_encontrado) { return amigo_encontrado } else { return  "Parece que no hay ningún amigo con ese nombre" };
  
}


module.exports = buscarAmigo