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
        let arraynum= numerGenerated(16);
        console.log(arraynum);

        // variabile punteggio 
        let score = 0;

        
        // ciclo per creare items
        for (let i = 1; i <= 100; i++) {
        //   creazione contenuto della griglia
            let newElement = createItems()
            newElement.append(i)

            // mettere elementi dentro a contenitore
            contenitoreGriglia.append(newElement);

            
            // evento per dare bg ad newelemn
            newElement.addEventListener("click", function () {
                newElement.classList.add("js-backgrounditems")
                score++;
                // console.log(i);

                // loop per controllare dentro all'array delle bombe
                for (let y = 0; y < arraynum.length; y++) {
                    // controllo se preso bomba o no
                     if (i ===  arraynum[y]) {
                        // aggiunto classi items con caratteristica bomba
                        newElement.classList.add("js-bomba");
                        setTimeout(function() {
                            mainContenitore.innerHTML="hai perso";
                        }, 300);

                        // calcolo puntggi 
                        score = score -1;
                        console.log("hai fatto " + score + " punti");
                     }
                }
                // controllo se vince sboloccando tutte le caselle
                if (score === 100-arraynum.length) {
                    mainContenitore.innerHTML="hai vinto ma hai consumato tutta la tua fortuna "
                    console.log(score);
                }
                console.log(score);
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
function numerGenerated (maxBomb) {
    // creazione dell'arry
    let arraynum= [];
    // ciclo per controllare se array mette numeri doppi
    while (arraynum.length < maxBomb) {
        let numeri= randomNumber( 100, 1)
        if (!arraynum.includes(numeri)) {
            arraynum.push(numeri)
        }
    }
    return arraynum
}

// funzione per creare un numero random
function randomNumber(max, min) {
    return Math.floor(Math.random() * max + min)
}

