var acd=[];
acd[0]=null;
for(let i=1;i<=44;i++)
{
    console.log("hello");
    var str=localStorage.getItem(`acd${i}`);
    acd[i]=JSON.parse(str);
    var product=document.getElementsByClassName("desc")[i-1];
    // deleteChild(i-1);

       Object.entries(acd[i]).map(item=>{
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

