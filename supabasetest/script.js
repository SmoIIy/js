const url = "https://hnrcndxoquhelmpaqheh.supabase.co/rest/v1/dataset?aarstid=eq.sommer";
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhucmNuZHhvcXVoZWxtcGFxaGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MjI5MTksImV4cCI6MjAwOTM5ODkxOX0.Kj0vgWH3imfxSBjrhKN9746mppt3v9ldhd1y2ugyfyc";

fetch(url,{
    method: "GET",
    headers: {
    apikey: apikey
    }
})
    .then(res=>res.json())
    .then(showData);


function showData(items) {
    console.log(items);
    items.forEach(showItem);
    
}


function showItem(item){
    console.log("item");
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".column-text-title").textContent = "Navn: " + item.title;
    copy.querySelector(".column-text-category").textContent = "Kategori: " + item.categoriesName;
    copy.querySelector(".column-text-id").textContent = "ID: " + item.id;

    const parent = document.querySelector(".container");
    parent.appendChild(copy);
}



