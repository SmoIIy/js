let aNum = document.getElementById("1");
let bNum = document.getElementById("2");
let cNum = document.getElementById("3");

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  

function roll() {

    for (let i = 0; i < 5; i++) {
        
    
        let a = Math.floor(Math.random() * 6) + 1;
        let b = Math.floor(Math.random() * 6) + 1;
        let c = Math.floor(Math.random() * 6) + 1;

        aNum.innerHTML = a;
        console.log("a is " + a);

        bNum.innerHTML = b;
        console.log("b is " + b);

        cNum.innerHTML = c;
        console.log("c is " + c);
        sleep(100);
    }
}