const arrayList = ["Mexico", "Frankrig", "The Simpsons", "Tvilling", "EM 1992", "Hattefest", "Børnefødselsdag"];



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