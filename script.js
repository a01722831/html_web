console.log("Hola Mundo");
const colores = ["red", "blue"];
console.log(colores[0]);
colores[0]= 523;
console.log(colores[0]);
colores[2] = 8;

let alumno={
    nombre: "Luis",
    edad: 20,
    imprime(){
        console.log(this.nombre +" "+ this.edad);
    }
};

alumno.imprime();

function fun2(){
    console.log("hola 2");
}

fun2();

const funcion= (name)=> {
    console.log("hola "+ name);
}

funcion ("Luis");

