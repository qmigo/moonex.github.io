var arr=[];

for(let i=1;i<=124;i++)
{   
    // console.log("hi");
    var str=localStorage.getItem(`p${i}`);
    arr[i]=JSON.parse(str);
    console.log(arr[i]);
    var product=document.getElementsByClassName("desc")[i-1];
    deleteChild(i-1);

       Object.entries(arr[i]).map(item=>{
        if(item[0]==='title')
        {
          product.innerHTML+=`
          <h6>${item[1]}</h6>`  
        }

        else{
            if(item[0]=="desc")
            product.innerHTML+=`<p class="onlyDescription">
            ${item[1]}</p>
            `;
            else{
            product.innerHTML+=`
            <p>
            ${item[0]} - ${item[1]}</p>
            `
            }
        }
    
    })

    product.innerHTML+=`
    <button onclick="func(this.id)" id="${i}" class="desc__btn">Enquiry</button>
    `
}

 function deleteChild(i) {
        var e = document.querySelectorAll(".desc")[i];
        // console.log(e);
        //e.firstElementChild can be used.
        var child = e.lastElementChild; 
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }
    }
console.log(arr);