import {Bulbasaur} from '/classes/Pokemon.js';
import {Charmander} from '/classes/Pokemon.js';
import {Squirtle} from '/classes/Pokemon.js';

window.addEventListener('DOMContentLoaded', function () {

    // game data:
    let pokeNames = ["Bulbasaur", "Charmander", "Squirtle"];
    let oponentPokemon = null;

    // user data:
    let userPokemon = null;

    // ------------------------------------------------------------------------------------------
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

    // ------------------------------------------------------------------------------------------
    // function to confirm pokémon choice:
    function confirmChoice(n) {  
        let choice = confirm("You choosed " + pokeNames[n] + ", are you sure?");
        if (choice == true) {
            switch (n) {
                case 0:
                    userPokemon = new Bulbasaur();
                    break;
                case 1:
                    userPokemon = new Charmander();
                    break;
                case 2:
                    userPokemon = new Squirtle();
                    break;
            }
            battleScreen(); // start battle screen
        } else if (choice == false) {
            userPokemon = null;
        }
    }

    // ------------------------------------------------------------------------------------------
    // function to recreate disposable container
    function recreateDispCont() {
        // delete disposable container
        let content = document.getElementById("content");
        content.removeChild(document.getElementById("disposableContainer"));
        console.log("disposable container removed");

        // recreate disposable container:
        let disposableContainer = document.createElement("div");
        disposableContainer.setAttribute("id", "disposableContainer");
        content.appendChild(disposableContainer);
        console.log("disposable container recreated");
    }

    // ------------------------------------------------------------------------------------------
    // function to go to battle screen:
    function battleScreen() {
        // choose a random oponent pokemon:
        let oponentPokeNum = Math.floor(Math.random() * 3);
        switch (oponentPokeNum) {
            case 0:
                oponentPokemon = new Bulbasaur();
                break;
            case 1:
                oponentPokemon = new Charmander();
                break;
            case 2:
                oponentPokemon = new Squirtle();
                break;
        }
        console.log(oponentPokemon);

        // recreate disposable container
        recreateDispCont();

        // create battle screen  
        //  create upper container
        let upperContainer = document.createElement("div");
        upperContainer.classList.add("battleContainer");
        upperContainer.setAttribute("id","upperContainer");        
        disposableContainer.appendChild(upperContainer);
        //      create oponent pokemon image
        let oponentPokeImg = document.createElement("img");
        oponentPokeImg.src = oponentPokemon.frontImg;
        oponentPokeImg.classList.add("oponentPokeImg");        
        upperContainer.appendChild(oponentPokeImg);
        //      create oponent pokemon name
        let oponentPokeName = document.createElement("h1");
        oponentPokeName.textContent = oponentPokemon.name;
        oponentPokeName.classList.add("oponentPokeName");
        upperContainer.appendChild(oponentPokeName);

        //  create mid container
        let midContainer = document.createElement("div");
        midContainer.classList.add("battleContainer");
        midContainer.setAttribute("id","midContainer");
        disposableContainer.appendChild(midContainer);
        //      create user pokemon img
        let userPokeImg = document.createElement("img");
        userPokeImg.src = userPokemon.backImg;
        userPokeImg.classList.add("userPokeBackImg");
        midContainer.appendChild(userPokeImg);
        //      create user pokemon name
        let userPokeName = document.createElement("h1");
        userPokeName.textContent = userPokemon.name;
        userPokeName.classList.add("userPokeName");        
        midContainer.appendChild(userPokeName);

        //  create lower container
        let lowerContainer = document.createElement("div");
        lowerContainer.classList.add("battleContainer");
        lowerContainer.setAttribute("id","lowerContainer");

    }
    

    // ------------------------------------------------------------------------------------------
    
    window.addEventListener('DOMContentLoaded', startScreen());

});