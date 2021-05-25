var beep = new Audio('../audio/clickbeep.ogg');
// var beep  = document.getElementById("beep");

setTimeout(()=>{
    document.getElementById("intro").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("register").style.display = "none";
},4000); 

const loginform = () =>{
    beep.play();
    document.getElementById("intro").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "block";
}


const Registerform = () =>{
    beep.play();
    document.getElementById("intro").style.display = "none";
    document.getElementById("register").style.display = "block";
    document.getElementById("login").style.display = "none";
}
