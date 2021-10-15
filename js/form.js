



    const scriptURL = 'https://script.google.com/macros/s/AKfycbzX83Pm7ehfUaIojQnw0bkS3b6I8-Nl31wlJz0s3qcjq8HJIE1juaAX6hvHrv8yqx6n/exec'
                                
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





            