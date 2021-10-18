



    const scriptURL = 'https://script.google.com/macros/s/AKfycbxkurbavi4u4LrKNu0A1qe7pvQfp4SWLH9c5yhiPE1xSXdSWlPeyeEyhdY8kzO8b8Cz/exec'
                                
    const form = document.forms['google-sheet']
              
                form.addEventListener('submit', e => {  
                  e.preventDefault()
                  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                    .then(response => {
                      document.getElementById("textarea").value=""
                      for(i=0;i<3;i++)
                      document.getElementsByTagName("input")[i].value="";
                      alert("Thanks for Contacting us..! We Will Contact You Soon...")
                    })
                    .catch(error => console.error('Error!', error.message))
                    
                    


                })





            