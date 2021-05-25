const notificationShow = ()=>{
    document.getElementById("notify").style.display = "block";
    document.getElementById("notes-border").style.borderBottom = "0px solid #dddddd";
    document.getElementById("notify-border").style.borderBottom = "5px solid #dddddd";
    document.getElementById("notes").style.display = "none";
}
const notesShow = () => {
    document.getElementById("notify").style.display = "none";
    document.getElementById("notes").style.display = "block";
    document.getElementById("notes-border").style.borderBottom = "5px solid #dddddd";
    document.getElementById("notify-border").style.borderBottom = "0px solid #dddddd";
}