const a = document.getElementById("acertijo");
const c = document.getElementById("carta");
let AA;

a.addEventListener("click", function(){
    if (!AA) {
        c.style.display = "block";
        c.style.opacity = "0";
        setTimeout(() => {
            c.style.opacity = "1";
        }, 0);
    }

    else{
        setTimeout(() => {
            c.style.display = "none";
        }, 300);
        c.style.opacity = "0";
        c.style.transition = "opacity .3s";
    }

    AA = !AA;    
});

document.addEventListener("click", function(e){
    if (!c.contains(e.target) && !a.contains(e.target)) {
        setTimeout(() => {
            c.style.display = "none";
        }, 300);
        c.style.opacity = "0";
        c.style.transition = "opacity .3s";

        AA = !AA; 
    }
});

