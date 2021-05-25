setTimeout(()=>{
    document.getElementById("intro").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("register").style.display = "none";
},100);

const loginform = () =>{
    document.getElementById("intro").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "block";
}


const Registerform = () =>{
    document.getElementById("intro").style.display = "none";
    document.getElementById("register").style.display = "block";
    document.getElementById("login").style.display = "none";
}
