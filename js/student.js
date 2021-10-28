
 function validate(){
    let user=document.getElementById("user").value;
   let psw=document.getElementById("psw").value;
   if(psw.length<6){
    document.getElementById("pass-invalid")
    .style.visibility="visible";
    return false;
}
else{
    return true;
}
 }
