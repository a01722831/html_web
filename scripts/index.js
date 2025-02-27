console.log("Hola desde Javascript");

/*alert("hola");
confirm("quieres borrar todo?");
prompt("dime tu nombre");*/

const username = document.getElementById("username");

const password = document.getElementById("password");

const btnSign = document.getElementById("btnSign");

//For testing
const USER_DB = {
    username: "admin",
    password: "1234"
};

const login = () => {

    const userValue = username.value.trim();
    const passValue = password.value.trim();

    if (userValue === USER_DB.username && passValue === USER_DB.password) {
        alert("Inicio de sesion exitoso");
        window.location.href = "/index.html";     
    } else {
        alert("Inicio de sesion incorrecto");
    }
};

if (btnSign) {
    btnSign.addEventListener("click", login);
} else {
    console.error("El botón de Sign Up no se encontró en el DOM.");
}