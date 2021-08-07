

function bar(){
    document.getElementById("user").style.left="0px";
    if(document.body.clientWidth <= 997){
    document.getElementById("done").style.display="block";
}
}
function brack(){  
    document.getElementById("done").style.display="none";
    if(document.body.clientWidth <= 997){
        document.getElementById("user").style.left="-220";
        window.location.reload(false);
    }
}
function sent(){
   var c= document.getElementById("name").value;
   var d='hi '+c +' contact me okay';
   console.log(typeof(c))
   console.log(c)
   if(c!=""){
    alert(d);
   }
}

