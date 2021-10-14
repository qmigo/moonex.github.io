function myFunction()
{
    var x=document.getElementById("mobile__on");
    var bars=document.getElementById("bars");
    var wheel=document.getElementById("wheel");
    var y=document.getElementById("vDropOn");
    var xd=window.getComputedStyle(x).display;
    var yd=window.getComputedStyle(y).display;
    console.log(window.getComputedStyle(x).display+" "+window.getComputedStyle(y).display);

    
    if(xd==="none" & yd==="none")
    {
        x.style.display="flex";
        wheel.style.display="flex";
        bars.style.display="none";
        console.log("1");
    }
    
    else if(xd==="flex" & yd==="none")
    {
        x.style.display="none";
        wheel.style.display="none";
        bars.style.display="flex";
        console.log("2");
    }
    else if(xd==="none" & yd==="flex")
    {
        y.style.display="none";
        wheel.style.display="none";
        bars.style.display="flex";
        console.log("3");
    }
  




    // To open Mobile
    // if(x.style.display==="none" && productButton.style.display==="flex")
    // {
    //     productButton.style.display==="none";
    //     wheel.style.display="none";
    //     bars.style.display="flex";

    //     console.log("1");
    // }
    // else if(x.style.display==="none")
    // {
    //     x.style.display="flex";
    //     wheel.style.display="flex";
    //     bars.style.display="none";  
    //     console.log("2");
    // }
   
    // else 
    // {
    //     x.style.display="none";
    //     wheel.style.display="none";
    //     // productButton.style.display="none";    
    //     bars.style.display="flex";
    //     console.log("3");
    // }
}

var productButton=document.getElementById("vertical_product");

productButton.addEventListener("click",()=>{
    var x=document.getElementById("mobile__on");

    console.log("object");
    x.style.display="none";
    document.getElementById("vDropOn").style.display="flex";
    // myFunction();
})