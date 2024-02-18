let v = document.getElementById("button");
let b = true;
v.addEventListener('click',function(){
    if(b){    
        for(let i =2; i<=5; i++){
            let m = ""+i;
            document.getElementById(m).style.display = "none";             
        };
        b = false;
    } else {
        for(let o =2; o<=5; o++){
            let m = ""+o;
            document.getElementById(m).style.display = "flex";             
        };
    b=true; 
}
});
 