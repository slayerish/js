var Burbank = document.querySelector(".city1")
var Chicago = document.querySelector(".city2")
var Dallas = document.querySelector(".city3")
var cookie = document.querySelector(".cookie")



function loading () {
    alert("Weather report loading...");
}

Chicago.addEventListener("click", loading)
Burbank.addEventListener("click", loading)
Dallas.addEventListener("click", loading)

function eraseCookie () {
cookie.remove();
}

cookie.addEventListener("click", eraseCookie)


function FtoC (temp){
    return Math.round((temp - 32)/ 1.8 );
}

function CtoF(temp){
    return Math.round((temp * 1.8)+ 32);
}

function change(element) {
    for(var x=1; x<9; x++) {
        var tempId = document.querySelector("#temp" + x);
        var tempVar = parseInt(tempId.innerText);
        if(element.value == "°F") {
            tempId.innerText = CtoF(tempVar);
        }
        else {
            tempId.innerText = FtoC(tempVar);
        }
    }
}