function validate(){
    var user=document.getElementById("admin").value;
    var ps=document.getElementById("pass").value;
    if(user!="salman@gmail.com"){
        document.getElementById("invalid").style.visibility="visible";
        return false;
    }
    else if(ps!="salman123"){
        document.getElementById("invalid-pass").style.visibility="visible";
        return false;
    }
    else{
        return true;
    }
}