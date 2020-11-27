let header = window.document.getElementById("headline");
header.addEventListener("mouseenter", e =>  { 
    let target = header.getBoundingClientRect();
    let x = e.clientX - target.left;
    if (x < 210){
        header.style.transform = 'translateX(120%) rotate(360deg) ';
    setTimeout("header.style.transform += 'translate(-120%, 0)'", 250);
    header.style.width = "420px";
    }
    else {
        header.style.transform = 'translateX(-120%) rotate(-360deg)';
    setTimeout("header.style.transform += 'translate(+120%, 0)'", 250);
    header.style.width = "420px";
    }
});

/*
    Технические работы в ИСУ
    Доступ к ИСУ временно ограничен.
    Мы работаем над исправлением ошибок.
    Приносим извинения за доставленные неудобства
 */
let notification = document.getElementById("answer");
let btn = document.getElementById('Button');
btn.disabled = true;

function check(){
    let foo = true;
    let textY = document.getElementById("inputY").value;

    if (textY.length === 0){
        foo = false;
        notification.innerHTML = "Заполним форму Y";
        btn.disabled = true;
    }
    else if (!/^-?\d+[.,]?\d*$/i.test(textY)){
        foo = false;
        notification.innerHTML = "В поле Y допустим ввод цифр и точки или запятой";
        btn.disabled = true;
    }
    else if ((textY <= -3 || textY >= 5)){
        foo = false;
        notification.innerHTML = "Значение Y должно входить в (-3;5)";
        btn.disabled = true;
    }
    if (foo) {
        notification.innerHTML = ""; 
        btn.disabled = false;
    }
}
setInterval(check,100);