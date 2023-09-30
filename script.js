window.addEventListener('DOMContentLoaded', function () {

    // game data:
    let pokeNames = ["Bulbasaur", "Charmander", "Squirtle"];

    // user data:
    let pokeNum = null;

    // ----------------------------------------------------------------------------------
    // functions:

    // function for create start screen:
    function startScreen () {
        // create disposable container:
        let content = document.getElementById("content");
        let disposableContainer = document.getElementById("disposableContainer");
        content.appendChild(disposableContainer);

        // game message:        
        let chooseMsg = document.createElement("p");
        chooseMsg.textContent = "Choose a pokémon";
        chooseMsg.classList.add("gameMsg")
        chooseMsg.setAttribute("id","chooseMsg");
        disposableContainer.appendChild(chooseMsg);

        // pokemon images:
        // Container for images
        let imagesContainer = document.createElement("div");
        imagesContainer.classList.add("imagesContainer");
        // -------------------------------------------------------------
        // bulbasaur
        //  bulbasaur container
        let bulbasaurContainer = document.createElement("div");
        bulbasaurContainer.classList.add("pokemonImgContainer");
        bulbasaurContainer.onclick = function(){confirmChoice(0)};
        //      bulbasaur image
        let bulbasaurImg = document.createElement("img");
        bulbasaurImg.src = "images/bulbasaur.png";
        bulbasaurImg.classList.add("startFrontImg");
        //      bulbasaur name
        let bulbasaurName = document.createElement("h1");
        bulbasaurName.textContent = "BULBASAUR";
        bulbasaurName.classList.add("pokemonStarterName");
        //      bulbasaur type
        let bulbasaurType = document.createElement("h1");
        bulbasaurType.textContent = "Grass-type 🍃";        
        bulbasaurType.classList.add("pokemonStarterType");
        //      append children
        bulbasaurContainer.appendChild(bulbasaurImg);
        bulbasaurContainer.appendChild(bulbasaurName);
        bulbasaurContainer.appendChild(bulbasaurType);
        imagesContainer.appendChild(bulbasaurContainer);
        // -------------------------------------------------------------
        // charmander
        //  charmander container
        let charmanderContainer = document.createElement("div");
        charmanderContainer.classList.add("pokemonImgContainer");
        charmanderContainer.onclick = function(){confirmChoice(1)};
        //      charmander image
        let charmanderImg = document.createElement("img");
        charmanderImg.src = "images/charmander.png";
        charmanderImg.classList.add("startFrontImg");
        //      charmander name
        let charmanderName = document.createElement("h1");
        charmanderName.textContent = "CHARMANDER";
        charmanderName.classList.add("pokemonStarterName");
        imagesContainer.appendChild(charmanderName);
        //      charmander type
        let charmanderType = document.createElement("h1");
        charmanderType.textContent = "Fire-type 🔥";        
        charmanderType.classList.add("pokemonStarterType");
        //      append children
        charmanderContainer.appendChild(charmanderImg);
        charmanderContainer.appendChild(charmanderName);
        charmanderContainer.appendChild(charmanderType);
        imagesContainer.appendChild(charmanderContainer);
        // -------------------------------------------------------------
        // squirtle
        // squirtle container
        let squirtleContainer = document.createElement("div");
        squirtleContainer.classList.add("pokemonImgContainer");
        squirtleContainer.onclick = function(){confirmChoice(2)};
        //      bulbasaur image
        let SquirtleImg = document.createElement("img");
        SquirtleImg.src = "images/squirtle.png";
        SquirtleImg.classList.add("startFrontImg");
        //      bulbasaur name
        let squirtleName = document.createElement("h1");
        squirtleName.textContent = "SQUIRTLE";
        squirtleName.classList.add("pokemonStarterName");
        //      bulbasaur type
        let squirtleType = document.createElement("h1");
        squirtleType.textContent = "Water-type 💧";        
        squirtleType.classList.add("pokemonStarterType");
        //      append children
        squirtleContainer.appendChild(SquirtleImg);
        squirtleContainer.appendChild(squirtleName);
        squirtleContainer.appendChild(squirtleType);
        imagesContainer.appendChild(squirtleContainer);

        disposableContainer.appendChild(imagesContainer);  

    }

    // function to confirm pokémon choice:
    function confirmChoice(n) {        
        let choice = confirm("You choosed " + pokeNames[pokeNum] + ", are you sure?");
        if (choice == true) {
            pokeNum = n;
            battleScreen(); // start battle screen
        } else if (choice == false) {
            pokenum = null;
        }
    }

    // function to go to battle screen:
    function battleScreen() {
        // delete disposable container
        let content = document.getElementById("content");
        let disposableContainer = document.getElementById("disposableContainer");
        content.removeChild(disposableContainer);

        // recreate disposable container:
        let disposableContainer2 = document.getElementById("disposableContainer");
        content.appendChild(disposableContainer2);
    }
    

    // ----------------------------------------------------------------------------------
    
    window.addEventListener('DOMContentLoaded', startScreen());

});