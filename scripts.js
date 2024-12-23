const bars = document.getElementById("bars");
const ML = document.getElementById("LMM");
const gear = document.getElementById("gear");
const DarkLight = document.getElementById("D-LMenu");
const BDL = document.getElementById("border-DL");
const CCDL = document.getElementById("circle-DL");
const PDL = document.getElementById("PDL");
const header = document.getElementById("header");
const body = document.getElementById("body");
const li = document.querySelectorAll("li");
const div = document.querySelectorAll("div");
const texto = document.querySelectorAll("p");
const p_1 = document.getElementById("p-1");
const MB = document.getElementById("music-boton");
const CM = document.getElementById("content-music");
const audio = document.getElementById("audio");
const canciones = document.getElementById("canciones");
const title = document.querySelectorAll("h2");
let AML;
let AG;
let ADL;
let AM;

bars.addEventListener("click", function(){

    if (!AML) {
        ML.style.transform = "translateX(0px)";
        ML.style.transition = "transform .3s";
        bars.className = "fa-solid fa-xmark"
    }

    else{
        ML.style.transform = "translateX(-300px)";
        ML.style.transition = "transform .3s";
        bars.className = "fa-solid fa-bars";
    }

    AML = !AML;
})

document.addEventListener("click", function(e){
    if (!bars.contains(e.target) && !ML.contains(e.target)) {
        ML.style.transform = "translateX(-300px)";
        ML.style.transition = "transform .3s";
        bars.className = "fa-solid fa-bars";

        AML = !AML;
    }
});

gear.addEventListener("click", function(){
    if (!AG) {
        DarkLight.style.display = "flex";
        gear.style.transform = "rotate(90deg)";
        gear.style.transition = "transform .3s"
    }

    else{
        gear.style.transform = "rotate(0deg)";
        gear.style.transition = "transform .3s"
        DarkLight.style.display = "none";
    }

    AG = !AG;
})

document.addEventListener("click", function(e){
    if (!gear.contains(e.target) && !DarkLight.contains(e.target)) {
        gear.style.transform = "rotate(0deg)";
        gear.style.transition = "transform .3s"
        DarkLight.style.display = "none";

        AG = !AG;
    }
})


BDL.addEventListener("click", function(){

    if (!ADL) {
        CCDL.style.transform = "translateX(43px)";
        CCDL.style.transition = "transform .3s";
        CCDL.style.backgroundColor = "white";
        PDL.textContent = "Dark";
        PDL.style.color = "white";
        BDL.style.borderColor = "white";
        gear.style.color = "white";
        header.style.backgroundColor = "rgb(31, 31, 31)";
        header.style.transition = "background-color .3s";
        DarkLight.style.backgroundColor = "rgb(31, 31, 31)";
        header.style.transition = "background-color .3s";
        body.style.backgroundColor = "rgb(41, 41, 41)";
        body.style.transition = "background-color .3s";
        bars.style.color = "white";
        bars.style.transition = "background-color .3s";
        li.forEach(li => {
            li.style.color = "white";
            li.style.borderBottomColor = "white";
        });

        texto.forEach(p => {
            p.style.color = "white";
        })

        p_1.style.backgroundColor = "rgb(36, 36, 36)";
        p_1.style.transition = "background-color .3s";
        ML.style.backgroundColor = "rgb(31, 31, 31)";
        ML.style.transition = "background-color .3s";
        CM.style.backgroundColor = "rgb(27, 27, 27)";
        MB.style.backgroundColor = "rgb(27, 27, 27)";
        title.forEach(h => {
            h.style.color = "white";
        });
        c.style.backgroundColor = "rgb(19, 19, 19)";
    }

    else{
        CCDL.style.transform = "translateX(0px)";
        CCDL.style.transition = "transform .3s";
        PDL.textContent = "Light";
        PDL.style.color = "black";
        BDL.style.borderColor = "black";
        CCDL.style.backgroundColor = "black";
        gear.style.color = "black";
        header.style.backgroundColor = "rgb(255, 232, 223)";
        header.style.transition = "background-color .3s";
        DarkLight.style.backgroundColor = "rgb(255, 232, 223)";
        header.style.transition = "background-color .3s";
        body.style.backgroundColor = "white";
        body.style.transition = "background-color .3s";
        bars.style.color = "black";
        bars.style.transition = "background-color .3s";
        li.forEach(li => {
            li.style.color = "black";
            li.style.borderBottomColor = "black";
        });

        texto.forEach(p => {
            p.style.color = "black";
        })

        p_1.style.backgroundColor = "rgb(248, 214, 255)";
        p_1.style.transition = "background-color .3s";
        ML.style.backgroundColor = "rgb(255, 232, 223)";
        ML.style.transition = "background-color .3s";
        CM.style.backgroundColor = "rgb(203, 174, 209)";
        MB.style.backgroundColor = "rgb(138, 43, 226)";
        title.forEach(h => {
            h.style.color = "black";
        });
        c.style.backgroundColor = "white";
    }

    ADL = !ADL
});

MB.addEventListener("click", function(){
    if (!AM) {
        CM.style.transform = "translateY(-10%)";
        CM.style.transition = "transform .3s";
    }

    else{
        CM.style.transform = "translateY(-110%)";
    }

    AM = !AM;
});

canciones.addEventListener("change", function(){
    audio.src = canciones.value;
    audio.play();
});
