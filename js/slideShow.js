var slideId=-1
    
function slideshow(){
  slideId++;
  if(slideId<3){     
  document.getElementsByClassName("slides")[slideId].style.display="block";
  document.getElementsByClassName("slides")[slideId].style.animation="going 1s linear forwards";
  document.getElementsByClassName("slides")[slideId+1].style.display="block";
  document.getElementsByClassName("slides")[slideId+1].style.animation="coming 1s linear forwards";      
  setTimeout(() => {
    slideshow()
  }, 5000);
}
  else{
    
  slideId=-1;

  document.getElementsByClassName("slides")[3].style.display="block";
  document.getElementsByClassName("slides")[3].style.animation="going 1s linear forwards";
  document.getElementsByClassName("slides")[0].style.display="block";
  document.getElementsByClassName("slides")[0].style.animation="coming 1s linear forwards";
  setTimeout(() => {
    slideshow()
  }, 5000);
  }
}

slideshow()
