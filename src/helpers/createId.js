function createId() {
    // Obtenemos los últimos 5 dígitos del tiempo actual en milisegundos
    const fecha = Date.now().toString(36).slice(-5);
  
    // Generamos un número aleatorio de 5 dígitos y lo convertimos a base 36
    const random = Math.floor(Math.random() * 1e5).toString(36);
  
    // Concatenamos ambos y truncamos a 10 caracteres
    const idUnico = (fecha + random).slice(0, 10);
  
    return idUnico;
}
  
export default createId
  