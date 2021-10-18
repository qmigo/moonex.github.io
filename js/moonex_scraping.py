import requests
from bs4 import BeautifulSoup
index=124
url="https://www.moonexchemtech.co.in/smt-spare-parts.htm"
r=requests.get(url)
soup=BeautifulSoup(r.content,"html5lib")
products=soup.find_all("h2",attrs={"class":"xlarge dif fw6 heading sc2"})
for product in products:
    product_name=str(product.text).strip().lower().replace(" ","-").replace(".","-")
    # print(product_name)
    product_page_url=f"https://www.moonexchemtech.co.in/{product_name}.htm"
    req=requests.get(product_page_url)
    soup1=BeautifulSoup(req.content,"html5lib")
    # title=soup1.find_all("div",attrs={"class":"h1"})[0]
    # print(f"{title.text}\n")

    title=soup1.find_all('div',attrs={"class":"xxlarge mb5px dib lh13em"})
    for i in range(len(title)):
        data_arr=["title"]
        data_dict={}
        product_title=str(title[i].text)
        data_arr.append(product_title)
        # print(title[i].text)

        divParent=soup1.find_all('div',attrs={"class":"col-2 large"})[i]
        table=divParent.table
        table_data=table.findAll("td")
        for data in table_data:
            {
                data_arr.append(data.text)
            }   

        for i in range(0,len(data_arr)-1,2):
            # data_arr[1][-7:]
            data_dict.update({data_arr[i].replace(" ","_"):data_arr[i+1]})
        del data_arr
        
        print(f"arr[{index}]=",end="")
        index+=1
        print("{",end="")
        values=[]
        for key in data_dict.keys():
            print(f"{str(key).strip()}:\"{str(data_dict[key]).strip()}\",")
        del values
        print("}",end="")
        print("\n\n")
        del data_dict



