let startTime = document.getElementById("timer");

let timer = Number(startTime.textContent);

function viner() {
    
    if (timer > 0) {
        startTime.textContent = Number(startTime.textContent) - 1;
        timer -= 1;
    } else {
        clearInterval(m);
        alert("Вы победили в конкурсе!");        
    }
};

let m = setInterval(viner, 1000);

