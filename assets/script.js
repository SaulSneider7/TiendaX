AOS.init({ once: true });

const btnMenu = document.getElementById("btnMenu");
const menuMovil = document.getElementById("menuMovil");
const icono = btnMenu.querySelector("i");
let abierto = false;

btnMenu.addEventListener("click", () => {
    abierto = !abierto;
    menuMovil.classList.toggle("hidden", !abierto);
    icono.classList.toggle("fa-bars", !abierto);
    icono.classList.toggle("fa-xmark", abierto);
});

document.querySelectorAll("#menuMovil a").forEach(link => {
    link.addEventListener("click", () => {
        menuMovil.classList.add("hidden");
        icono.classList.remove("fa-xmark");
        icono.classList.add("fa-bars");
        abierto = false;
    });
});