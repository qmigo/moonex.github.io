
 for(let i=0;i<=127;i++)
 {
     var img=document.getElementsByClassName("product__img")[i];
     img.setAttribute('src',`../smt_pics/${i+1}.jpg`);
     
 }

var smt=[];
smt[0]=null;
for(let i=1;i<=128;i++)
{
    console.log("hello");
    var str=localStorage.getItem(`smt${i}`);
    smt[i]=JSON.parse(str);
   console.log(smt);
    var product=document.getElementsByClassName("desc")[i-1];
    // deleteChild(i-1);

       Object.entries(smt[i]).map(item=>{
        if(item[0]==='title')
        {
            document.getElementsByClassName("product_title")[i-1].innerHTML=item[1];
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

