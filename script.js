import {Bulbasaur} from '/classes/Pokemon.js';
import {Charmander} from '/classes/Pokemon.js';
import {Squirtle} from '/classes/Pokemon.js';

window.addEventListener('DOMContentLoaded', function () {

    // game data:
    let pokeNames = ["Bulbasaur", "Charmander", "Squirtle"];
    let oponentPokemon = null;

    // user data:
    let userPokemon = null;

    // ==========================================================================================
    // functions:

    // function for create start screen:
    function startScreen () {
        // create disposable container:
        let content = document.getElementById("content");
        let disposableContainer = document.getElementsByClassName("disposableContainer")[0];

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

    // ==========================================================================================
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

    // ==========================================================================================
    // function to recreate disposable container
    function recreateDispCont(screenName) {
        // delete disposable container
        let content = document.getElementById("content");
        content.removeChild(document.getElementsByClassName("disposableContainer")[0]);

        // recreate disposable container:
        let disposableContainer = document.createElement("div");
        disposableContainer.classList.add("disposableContainer");
        disposableContainer.setAttribute("id", screenName + "DisposableContainer");
        content.appendChild(disposableContainer);

        return disposableContainer.id;
    }

    // ==========================================================================================
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

        // -----------------------------------------------------------------
        // recreate disposable container
        let disposableContainerId = recreateDispCont("battle");
        let disposableContainer = document.getElementById(disposableContainerId);

        // -----------------------------------------------------------------
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
        //      create oponent pokemon data container:
        let oponentPokeDataCont = document.createElement("div");        
        oponentPokeDataCont.classList.add("battleDataContainer");        
        oponentPokeDataCont.setAttribute("id", "oponentPokeDataCont");
        upperContainer.appendChild(oponentPokeDataCont);
        //          create oponent pokemon name
        let oponentPokeName = document.createElement("h1");
        oponentPokeName.textContent = oponentPokemon.name;
        oponentPokeName.classList.add("oponentPokeName", "pokemonStarterName");
        oponentPokeDataCont.appendChild(oponentPokeName);

        // -----------------------------------------------------------------
        //  create mid container
        let midContainer = document.createElement("div");
        midContainer.classList.add("battleContainer");
        midContainer.setAttribute("id", "midContainer");
        disposableContainer.appendChild(midContainer);
        //      create user pokemon img
        let userPokeImg = document.createElement("img");
        userPokeImg.src = userPokemon.backImg;
        userPokeImg.classList.add("userPokeBackImg");
        midContainer.appendChild(userPokeImg);        
        //      create user pokemon data container:
        let userPokeDataCont = document.createElement("div");        
        userPokeDataCont.classList.add("battleDataContainer");
        userPokeDataCont.setAttribute("id", "userPokeDataCont");
        midContainer.appendChild(userPokeDataCont);
        //          create user pokemon name
        let userPokeName = document.createElement("h1");
        userPokeName.textContent = userPokemon.name;
        userPokeName.classList.add("userPokeName", "pokemonStarterName");
        userPokeDataCont.appendChild(userPokeName);
        
        // -----------------------------------------------------------------
        //  create lower container
        let lowerContainer = document.createElement("div");
        lowerContainer.classList.add("battleContainer");
        lowerContainer.setAttribute("id", "lowerContainer");
        disposableContainer.appendChild(lowerContainer);

        //      create battle message       
        let battleMsgCont = document.createElement("div");
        let battleMsg = document.createElement("h1");
        battleMsg.textContent = "Choose a move:";
        battleMsg.classList.add("gameMsg")
        battleMsgCont.appendChild(battleMsg);
        battleMsgCont.setAttribute("id","battleMsgCont");
        lowerContainer.appendChild(battleMsgCont);

        //      create moves container   
        let movesCont = document.createElement("div");
        movesCont.setAttribute("id","movesCont");
        lowerContainer.appendChild(movesCont);

        //          create moves subcontainers
        let moveSubcont1 = document.createElement("div");
        moveSubcont1.classList.add("moveSubCont");

        let move1Name = document.createElement("h1");
        move1Name.textContent = userPokemon.move1.name;
        moveSubcont1.appendChild(move1Name);

        let move1Type = document.createElement("p");
        switch (userPokemon.move1.type) {
            case 100:
                move1Type.textContent = "(🔘Normal)";
                break;
            case 0:
                move1Type.textContent = "(🍃Grass)";
                break;
            case 1:
                move1Type.textContent = "(🔥Fire)";
                break;
            case 2:
                move1Type.textContent = "(💧Water)";
                break;
        }        
        moveSubcont1.appendChild(move1Type);
        movesCont.appendChild(moveSubcont1);

        // -----------------------------------------------------------------
        let moveSubcont2 = document.createElement("div");
        moveSubcont2.classList.add("moveSubCont");
        
        let move2Name = document.createElement("h1");
        move2Name.textContent = userPokemon.move2.name;
        moveSubcont2.appendChild(move2Name);

        let move2Type = document.createElement("p");
        switch (userPokemon.move2.type) {
            case 100:
                move2Type.textContent = "(🔘Normal)";
                break;
            case 0:
                move2Type.textContent = "(🍃Grass)";
                break;
            case 1:
                move2Type.textContent = "(🔥Fire)";
                break;
            case 2:
                move2Type.textContent = "(💧Water)";
                break;
        }        
        moveSubcont2.appendChild(move2Type);        
        movesCont.appendChild(moveSubcont2);


    }
    

    // ==========================================================================================
    
    window.addEventListener('DOMContentLoaded', startScreen());

});