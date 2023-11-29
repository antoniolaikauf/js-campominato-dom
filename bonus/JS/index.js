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
        // controllo value per vedere che difficoltà ha scelto
        let valueSelect= document.getElementById("scelta-difficolta").value;
        if (valueSelect === "hard") {
            for (let i = 1; i <= 100; i++) {
                    // creazione items
                    let newElement = createItems()
                    newElement.append(i)
                    // aggiungere classe ad items
                    newElement.classList.add("js-square")
                    // mettere items dentro contenitore
                    contenitoreGriglia.append(newElement)
                    // dare a items interazione
                    eventoBgItems(newElement, i);
                }
        } else if (valueSelect === "hard1") {
            for (let i = 1; i <= 81; i++) {
                // creazione items
                let newElement = createItems()
                newElement.append(i)
                 // aggiungere classe ad items
                newElement.classList.add("js-square1")
                // mettere items dentro contenitore
                contenitoreGriglia.append(newElement)
                 // dare a items interazione
                eventoBgItems(newElement, i);
           }
        } else if (valueSelect === "hard2") {
            for (let i = 1; i <= 49; i++) {
                // creazione items
                let newElement = createItems()
                newElement.append(i) 
                // aggiungere classe ad items
                newElement.classList.add("js-square2")
                // // mettere items dentro contenitore
                contenitoreGriglia.append(newElement)
                 // dare a items interazione
                eventoBgItems(newElement, i);
           }
        }
})

// funzione per creare items
function createItems() {
    // creazione degli items
   let items= document.createElement("div"); 
     
    return items
}

// creazione di una funzione con evento
function eventoBgItems(square, numeroAttuale ) {
     // crazione evento per attivare il background a items 
      square.addEventListener("click", function () {
       square.classList.add("js-backgrounditems")
        return console.log(numeroAttuale);
    })
}




