var a=Math.floor((Math.random()*100)+1);
 
var n=0;
var s="";
check=()=>{
   
    var b=parseInt(document.getElementById("number").value);
    if(a==b)
    {
        s="Congratulations!!!you have got the number in tries";  
        s=s+n;
        document.getElementById("es").textContent= s;
    }
    else{
        n++;
    if(a<b)
    {
        s="Try with smaller number";

    }
    else
    {
        s="try with greater number";
    }
    document.getElementById("es").textContent= n+s;
}
}