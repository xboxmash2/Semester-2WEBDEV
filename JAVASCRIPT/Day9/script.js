const query=document.querySelectorAll("p");
console.log(query)
for(i=0;i<query.length;i++){
    if (i%2==0){
        query[i].style.color="blue"
    }
    else if(i%2==0){
        query[i].style.color="green"
    }
    else if(i==query.length-1)
    {
        query[i].style.fontWeight="bold"
    }
}
