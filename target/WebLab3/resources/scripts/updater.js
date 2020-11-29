setInterval(() => window["dateUpdater"](), 7000);

let header = document.querySelector("#headline");
header.addEventListener("mouseenter", e =>  {
    let target = header.getBoundingClientRect();
    let x = e.clientX - target.left;
    if (x < 210){
        header.style.transform = 'translateX(120%) rotate(360deg) ';
        setTimeout("header.style.transform += 'translate(-120%, 0)'", 250);
        header.style.width = "23%";
    }
    else {
        header.style.transform = 'translateX(-120%) rotate(-360deg)';
        setTimeout("header.style.transform += 'translate(+120%, 0)'", 250);
        header.style.width = "23%";
    }
});