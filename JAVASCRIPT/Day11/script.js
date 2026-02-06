function HEAD(){
    document.querySelector("#head").style.color="red";

    document.getElementById("HEAD").textContent="color changed";

    const image=document.createElement("IMG");
    image.setAttribute("src","https://duckduckgo.com/?q=image+of+halo&ia=images&iax=images&iai=https%3A%2F%2Fwallpapertag.com%2Fwallpaper%2Ffull%2Fd%2F6%2Fe%2F602576-halo-4-wallpaper-2560x1440-2560x1600-for-windows.jpg");
    image.setAttribute("alt","HALO");
    document.getElementById("head").append(image);
}