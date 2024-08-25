function saludar(nombre, genero) {
    let Saludo = "Hola";
    if(genero === "male"){
        Saludo = Saludo + " Sr. ";
    }else {
        Saludo = Saludo + " Sra. ";
    }
    
    Saludo = Saludo + " " + nombre;

    return Saludo;
}

export default saludar;