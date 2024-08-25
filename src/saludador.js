function saludar(nombre, genero, leng) {
    let Saludo = "";
    if(leng==="español"){
        Saludo = "Hola";
    }
    else{
        Saludo = "Hi";
    }

    if(genero === "male" && leng === "español"){
        Saludo = Saludo + " Sr. ";
    }else if(genero === "female" && leng === "español") {
        Saludo = Saludo + " Sra. ";
    }else if(genero === "male" && leng === "english") {
        Saludo = Saludo + " Mr. ";
    }else{
        Saludo = Saludo + " Mrs. ";   
    }
    
    Saludo = Saludo + " " + nombre;

    return Saludo;
}

export default saludar;