
const output = document.getElementById("display");
const icon = document.getElementById("icon");

const  display = (num) => output.innerHTML += num;
const clr = () => output.innerText = "";
const del = () => output.innerHTML = output.innerHTML.slice(0,-1);
const calculate = () => {
    try{
        (output.innerHTML !== "")?output.innerHTML = eval(output.innerHTML):alert("Enter Some Values");
    }
    catch(err){
        alert("Invalid Operation");
    } 
}

icon.onclick = function(){
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        icon.src = "icon/sun.png";
    }else{
        icon.src = "icon/moon.png";
    }
}