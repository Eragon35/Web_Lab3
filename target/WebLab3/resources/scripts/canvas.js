function draw(parameter){ //drawing grid and figure
    let canvas = document.getElementById('image');
    let table = document.getElementById('resultTable');
    if (canvas.getContext){
        let ctx = canvas.getContext('2d');

        ctx.fillStyle = "rgba(256, 256, 256, 0.8)"; // background fill
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'rgb(35, 184, 253)'; //area
        ctx.fillRect(200, 200, parameter * 20, parameter * 40); //rectangle
        ctx.fill();
        ctx.moveTo(200 - parameter * 20, 200); // triangle
        ctx.lineTo(200, 200 + parameter * 20);
        ctx.lineTo(200,200);
        ctx.fill();
        ctx.lineTo(200, 200 - parameter * 40); // quarter of circle
        ctx.arc(200,200, parameter * 40, -Math.PI/2, Math.PI, true);
        ctx.lineTo(200,200);
        ctx.fill();

        for (let x = 40; x < 361; x += 40) { // gird
            ctx.moveTo(x, 0);
            ctx.lineTo(x, 400);
        }
        for (let y = 40; y < 361; y += 40) {
            ctx.moveTo(0, y);
            ctx.lineTo(400, y);
        }
        ctx.strokeStyle = "#333";
        ctx.stroke();

        ctx.fillStyle = 'black'; //axis
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0,200);
        ctx.lineTo(400,200);
        ctx.moveTo(200,0);
        ctx.lineTo(200,400);
        ctx.stroke();

        for (let r = 1, n = table.rows.length; r < n; r++) {
            let x = table.rows[r].cells[0].innerHTML;
            let y = table.rows[r].cells[1].innerHTML;
            let result = table.rows[r].cells[3].innerHTML;
            result === 'true' ? ctx.fillStyle = 'green' : ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.arc(200 + 40 * x, 200 - 40 * y, 6, 0, 2 * Math.PI);
            ctx.fill();
        }
        table.innerHTML === 'true' ? ctx.fillStyle = 'green' : ctx.fillStyle = 'red';
    }
}

let plot = window.document.getElementById("image");
plot.addEventListener("click", () => {
    let elem = plot.getBoundingClientRect();
    let x = (Math.round(event.clientX - elem.left - 6) - 200) / 40;
    let y = (Math.round(event.clientY - elem.top - 6) - 200) / -40;
    let r;
    const radios = document.getElementsByName('R');
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            r = radios[i].value;
            break;
        }
    }

    confirm("Do you wanna check\n" + x + " " + y + " " + r)
    document.getElementById("newTableForm:inputX").value = x;
    document.getElementById("newTableForm:inputY").value = y;
    document.getElementById("newTableForm:Button").click();
    //     let xhr = new XMLHttpRequest();
    //     let body = 'X=' + encodeURIComponent(x) + "&Y=" + encodeURIComponent(y) + "&R=" + encodeURIComponent(r);
    //     xhr.open("POST", '/web_lab2_Web_exploded/control');
    //     xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //     xhr.send(body);
    //     if (xhr.status !== 200 && xhr.readyState === XMLHttpRequest.DONE) alert("shit happened, you request is failed");
    //     else window.location.replace("/web_lab2_Web_exploded/result.jsp");
    // }
});
