const img = document.getElementById("cookie");
let count = document.getElementById("clicker__counter");
img.onclick = () => {
    if (Number(count.textContent) % 2 == 0) {
        img.width = img.width + 30;
    } else {
        
        img.width = img.width - 30;
    }
    count.textContent = Number(count.textContent) + 1;
     
};
