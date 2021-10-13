var slideId=0
    console.log(window.getComputedStyle(document.getElementById("1")));
    function slideshow(){
      slideId++;
      if(slideId<=2){     
      document.getElementById(slideId+"").style.display="block";
      document.getElementById(slideId+"").style.animation="going 1s linear forwards";
      document.getElementById(slideId+1+"").style.display="block";
      document.getElementById(slideId+1+"").style.animation="coming 1s linear forwards";      
      setTimeout(() => {
        slideshow()
      }, 2000);
    }
    
      else{
        
      slideId=0
      document.getElementById(3+"").style.display="block";
      document.getElementById(3+"").style.animation="going 1s linear forwards";
      document.getElementById(1+"").style.display="block";
      document.getElementById(1+"").style.animation="coming 1s linear forwards";
      a=setTimeout(() => {
        slideshow()
      }, 2000);
      }
    }

  slideshow()
