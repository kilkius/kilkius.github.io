let start = new Date().getTime();
let times = 0;
let tries = 0;

function getRandomcolor(){
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function makeShape(){
    if (Math.random() < 0.5){
        document.getElementById("shape").style.borderRadius = "50%";
    } else {
        document.getElementById("shape").style.borderRadius = "2%";
    }
    let top = Math.random() * 400;
    let left = Math.random() * 400;
    let width = Math.random() * 200 + 100;
    document.getElementById("shape").style.backgroundColor = getRandomcolor();
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();
}

function delay(){
    if (tries == 10){
        document.getElementById("tries").innerHTML = "Test finished";
        document.getElementById("tries").style.color = "red";
        document.getElementById("average").style.fontSize = "400%";
        return;
    } else {
        setTimeout(makeShape,Math.random()+2000);
    }
}


delay();

document.getElementById("shape").onclick = function(){
    let end = new Date().getTime();
    let time_taken = (end - start)/1000; 
    document.getElementById("shape").style.display = "none";
    tries += 1;
    times += time_taken;
    document.getElementById("tries").innerHTML = 10 + (-1 * tries);
    let avg = times / tries;
    document.getElementById("average").innerHTML = avg.toFixed(3) +"s";
    delay();
}





