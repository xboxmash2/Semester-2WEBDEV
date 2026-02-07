function HEAD(){

    document.querySelector("#head").style.color="red";
    document.getElementById("HEAD").textContent="color changed";

    const image=document.createElement("img");
    image.setAttribute("src","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.RqtY5NGZFI2BRZ6aEiDj4QHaEo%3Fpid%3DApi&f=1&ipt=dbece3de5c977d54e3a7a32462e6eccd370ba987f48bc6a9f9e156bf18358168&ipo=images");
    image.setAttribute("alt","HALO");

    document.getElementById("head").append(image);

    const l=document.createElement("a");
    l.setAttribute("href","https://krmangalam.edu.in/");
    l.textContent="LINK";

    const box=document.createElement("div");
    box.style.height="200px";
    box.style.width="200px";
    box.style.borderRadius="20px";
    box.style.backgroundColor="tomato";

    box.addEventListener("click",()=>{

    

        const t=document.createElement("div");
        t.textContent="HAHAHA";
        
        box.style.display="flex";
        box.style.alignItems="center";
        box.style.justifyContent="center";

        box.appendChild(t);
    });

    document.body.append(l);
    document.body.append(box);
}
