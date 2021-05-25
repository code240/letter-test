var beep = new Audio('../audio/clickbeep.ogg');
// var beep  = document.getElementById("beep");

setTimeout(()=>{
    document.getElementById("intro").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("register").style.display = "none";
},4000); 

const loginform = () =>{
    beep.play();
    setTimeout(() => {
        document.getElementById("intro").style.display = "none";
        document.getElementById("register").style.display = "none";
        document.getElementById("login").style.display = "block";
    },100) 
}


const Registerform = () =>{
    beep.play();
    setTimeout(() => {
        document.getElementById("intro").style.display = "none";
        document.getElementById("register").style.display = "block";
        document.getElementById("login").style.display = "none";
    },100) 

}
