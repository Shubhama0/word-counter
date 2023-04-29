
const l=document.getElementById("txt");
//const e=
l.addEventListener("input", function(){
    var text=this.value;
    let len=text.length;
    console.log(len);

document.getElementById("char").innerHTML=len;
text=text.trim();
var words=text.split(" ");
var uiq=words.filter(function(elm){
return elm!="";
});
document.getElementById("wd").innerHTML=uiq.length;

});


