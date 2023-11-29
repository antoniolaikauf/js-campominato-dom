// prendere elemento main da html
let mainContenitore = document.getElementById("js-main");
// console.log(mainContenitore);

const button = document.getElementById("js-button");
// evento per creare il div con dentro la tabella e tutti gli items
button.addEventListener("click", function () {
        mainContenitore.innerHTML=""
        // creazione del contenitore dove ci saranno gli items
        let contenitoreGriglia = document.createElement("div");
        // dato a div classe contenitore
        contenitoreGriglia.classList.add("js-contenitore");
        // aggiunto contenitore dentro main
        mainContenitore.append(contenitoreGriglia);

        // array con dentro le bombe
        let arraynum= numerGenerated();
        console.log(arraynum);

        // variabile punteggio 
        let score = 0;

        
        // ciclo per creare items
        for (let i = 1; i <= 100; i++) {
        //   creazione contenuto della griglia
            let newElement = createItems()
            newElement.append(i)

            contenitoreGriglia.append(newElement);

            
            // evento per dare bg ad newelemn
            newElement.addEventListener("click", function () {
                newElement.classList.add("js-backgrounditems")
                score = score + 1;
                // console.log(i);

                // loop per controllare dentro all'array delle bombe
                for (let y = 0; y < arraynum.length; y++) {
                    // controllo se preso bomba o no
                     if (i ===  arraynum[y]) {

                        newElement.classList.add("js-bomba");
                        mainContenitore.innerHTML="hai perso";

                        // calcolo puntggi 
                        score = score -1;
                        console.log("hai fatto " + score + " punti");
                     }
                }
            })
        }

})

// funzione per creare un nuovo elemento
function createItems() {
    // creazione degli items
   let items= document.createElement("div");
    // aggiunto classe a items
   items.classList.add("js-square");

    return items
}


// funzione per creare l'array con i numeri 
function numerGenerated () {
    let arraynum= [];
    while (arraynum.length < 16) {
        let numeri= randomNumber()
        if (!arraynum.includes(numeri)) {
            arraynum.push(numeri)
        }
    }
    return arraynum
}

// funzione per creare un numero random
function randomNumber() {
    return Math.floor(Math.random() * 100 +1)
}