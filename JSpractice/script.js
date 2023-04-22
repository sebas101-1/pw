let sizest = "";
let inc = 0.1;
let size = 30;
let mar = 0;
function Mover(){
    // alert("Hover !!!");
    album = document.getElementById("bs");
    while(size<=60){
        size+=inc;
        sizest = String(size)+"%";
        mar = String((100-size)/2)+"%";
        album.style.width = sizest;
        album.style.height = sizest;
        album.style.margin = mar;
        // alert(sizest)
    }
    size = 30;
    cap = document.getElementById("bs2");
    cap.innerHTML = "Insert Discription"
    cap.style.textSize = "20px"
    cap.style.textAlign = "center";
    album.style.borderRadius = "3%";
}
function Mout(){
    // alert("Hover !!!");
    album = document.getElementById("bs");
    album.style.width = "30%";
    album.style.height = "30%";
    album.style.margin = "35%"
    cap = document.getElementById("bs2");
    cap.innerHTML = "Insert Discription"
    cap.style.width = "0%";
    cap.style.height = "0%";
    cap.style.margin = "0%";
    cap.innerHTML = "";
    album.style.borderRadius = "0%";
}
