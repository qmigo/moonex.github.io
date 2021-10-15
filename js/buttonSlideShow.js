var strip=document.getElementById("new_strip");
var pixel=0;


var frameWidth=300;

var stripLeft=strip.style.left="-900px";
stripLeft=stripLeft.replace("px","");
    stripLeft=parseInt(stripLeft);
console.log(window.getComputedStyle(strip).left)
var i=0;
let id;
function start()
{
 id=setInterval(() => {
    func();
}, 1);
}
var end=1;
function func()
{   end=0;
    
    stripLeft=stripLeft+pixel;
      
    if(stripLeft%300===0)
    {
    clearInterval(id);
        end=1;
    }
    strip.style.left=stripLeft+"px";
    console.log(stripLeft);
    
}


function left()
{   
    pixel=-1;  
    if(stripLeft!=-1200)
    if(end) 
    start();
    
}

function right()
{
    pixel=1;
   
    if(stripLeft!=0)
    if(end)
      start();
    
}