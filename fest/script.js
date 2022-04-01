const arrayList = ["Mexico", "Frankrig", "The Simpsons", "Tvilling", "EM 1992", "Hattefest", "Børnefødselsdag", "80's", "90's", "Superhelte", "Maskebal", "James Bond", "Genderbender", "Beach Party", "Paradise Hotel", "Pool Party", "K-Pop", "Hawaii", "Hollywood", "Harry Potter", "Disney", "Outer Space", "Great Gatsby", "Grisefest" ,"Svin og Vin", "Melodi Grand Prix", "Oktoberfest", "Alfabetet", "Neon-fest", "Festival", "Après-Ski", "Full Moon-party", "Berømte par", "Rød-Gul-Grøn"];



function generate(){
    let finalOutput;
    let arrayIndex = Math.floor(Math.random() * arrayList.length);
   
    finalOutput = arrayList[arrayIndex];


    
    document.getElementById("output").innerHTML = finalOutput;

    //for debugging purposes
    //const myArr = JSON.parse(arrayList);
    //console.log(arrayList.length)
    //console.log(arrayIndex);
}

