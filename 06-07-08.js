function crearClasePersona() {
  class Persona {
    constructor(nombre, edad, hobbies, amigos) {
      this.nombre= nombre;
      this.edad= edad;
      this.hobbies= hobbies;
      this.amigos= amigos;
      }

    addFriend(nombre, edad) {
      let amigo = {
        nombre,
        edad
    }
    this.amigos.push(amigo);
    }

    addHobby(hobby) {
      this.hobbies.push(hobby);
    
    }
    
    getFriends() {
      const transformarObjetoAmigoANombre = ((amigo) => amigo.nombre);
      const indexed = this.amigos.map(transformarObjetoAmigoANombre);
      return indexed

    }

    getHobbies() {
      return this.hobbies

    }

    getPromedioEdad() { 
      return this.amigos.map(amigo => amigo.edad).reduce((a, b) => a + b) / this.amigos.length
    }
  };

  return Persona;
}

module.exports = crearClasePersona