
function gTokg(){
    let num1 = Number(document.getElementById("num1").value);
    let result = (num1 / 1000);
    let num2 = document.getElementById("num2");
    num2.value = result;
}

