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
        // ciclo per creare items

        for (let i = 1; i <= 100; i++) {
        //   creazione contenuto della griglia
            let newElement = createItems()
            newElement.append(i)

            contenitoreGriglia.append(newElement);

            // evento per dare bg ad newelemnt
            newElement.addEventListener("click", function () {
                newElement.classList.add("js-backgrounditems")
                console.log(i);
            })
        }


        console.log(numerGenerated());

})

// funzione per creare un nuovo elemento
function createItems() {
    // creazione degli items
   let items= document.createElement("div");

   items.classList.add("js-square");

    return items
}




// let number = randomNumber()
// console.log(number);

function numerGenerated () {
    let arraynum= [];
    while (arraynum.length < 16) {
        let bla= randomNumber()
        if (!arraynum.includes(bla)) {
            arraynum.push(bla)
        }
    }
    return arraynum
}

// console.log(numerGenerated());

function randomNumber() {
    return Math.floor(Math.random() * 100 +1)
}


