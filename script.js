import {Bulbasaur} from '/classes/Pokemon.js';
import {Charmander} from '/classes/Pokemon.js';
import {Squirtle} from '/classes/Pokemon.js';

window.addEventListener('DOMContentLoaded', function () {

    // game data:
    let pokeNames = ["Bulbasaur", "Charmander", "Squirtle"];
    let oponentPokemon = null;
    let winner = null;
    let winnerPokemon = null;

    // user data:
    let userPokemon = null;

    // ==========================================================================================
    // functions:

    // function for create start screen:
    function startScreen() {
        // recreate disposable container:
        let disposableContainerId = recreateDispCont("start");
        let disposableContainer = document.getElementById(disposableContainerId);

        // game message:        
        let chooseMsg = document.createElement("p");
        chooseMsg.textContent = "Choose a pokémon";
        chooseMsg.classList.add("gameMsg");
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
        bulbasaurType.classList.add("typeName");
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
        charmanderType.classList.add("typeName");
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
        squirtleType.classList.add("typeName");
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
            createOponent();
            battleScreen(); // start battle screen
        } else if (choice == false) {
            userPokemon = null;
        }
    }

    // ==========================================================================================
    // function to recreate disposable container
    function recreateDispCont(screenName) {
        // delete disposable container, if exists
        if (document.getElementById("content")) {
            let content = document.getElementById("content");
            content.removeChild(document.getElementsByClassName("disposableContainer")[0]);
        }

        // recreate disposable container:
        let disposableContainer = document.createElement("div");
        disposableContainer.classList.add("disposableContainer");
        disposableContainer.setAttribute("id", screenName + "DisposableContainer");
        content.appendChild(disposableContainer);

        return disposableContainer.id;
    }

    // ==========================================================================================
    // function to calc damage
    function damage(attacker, move, defender) {
        let damage = attacker.attack(move, defender);
        defender.hp -= damage;

        if (defender.hp <= 0) {
            if (userPokemon.hp <= 0) {
                winner = "player";
                winnerPokemon = userPokemon;
            } else {
                winner = "oponent";
                winnerPokemon = oponentPokemon;
            }
            finalScreen();
        }
        
        //  remove oponent hp container
        let oponentPokeDataCont = document.getElementById("oponentPokeDataCont");
        let oponentPokemonHp = document.getElementById("oponentPokemonHp");
        oponentPokeDataCont.removeChild(oponentPokemonHp);
        //  recreate oponent hp container                
        let oponentPokemonHp2 = document.createElement("p");        
        oponentPokemonHp2.setAttribute("id", "oponentPokemonHp");
        oponentPokemonHp2.textContent = "HP: " + oponentPokemon.hp + "/" + oponentPokemon.maxHp;
        oponentPokeDataCont.appendChild(oponentPokemonHp2);

        // --------------------------------------------------------------------------------------
        //  remove user hp container
        let userPokeDataCont = document.getElementById("userPokeDataCont");
        let userPokemonHp = document.getElementById("userPokemonHp");
        userPokeDataCont.removeChild(userPokemonHp);
        //  recreate user hp container                
        let userPokemonHp2 = document.createElement("p");        
        userPokemonHp2.setAttribute("id", "userPokemonHp");
        userPokemonHp2.textContent = "HP: " + userPokemon.hp + "/" + userPokemon.maxHp;
        userPokeDataCont.appendChild(userPokemonHp2);
    }

    // ==========================================================================================
    // function to attack
    function attack (userMove) {
        // choose oponent move
        let oponentMoveNum = Math.floor(Math.random() * 2);
        let oponentMove = null;
        if (oponentMoveNum == 0) {
            oponentMove = oponentPokemon.move1;
        } else {
            oponentMove = oponentPokemon.move2;
        }

        // attack
        if (userPokemon.spe > oponentPokemon.spe) {
            damage(userPokemon, userMove, oponentPokemon);
            damage(oponentPokemon, oponentMove, userPokemon);
            
        } else {
            damage(oponentPokemon, oponentMove, userPokemon);
            damage(userPokemon, userMove, oponentPokemon);
        }
    }

    // ==========================================================================================
    // function to create oponent pokemon:
    function createOponent() {
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
    }

    // ==========================================================================================
    // function to go to battle screen:
    function battleScreen() {
        
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
        //          create oponent pokemon hp
        let oponentPokemonHp = document.createElement("p");
        oponentPokemonHp.setAttribute("id", "oponentPokemonHp");
        oponentPokemonHp.textContent = "HP: " + oponentPokemon.hp + "/" + oponentPokemon.maxHp;
        oponentPokeDataCont.appendChild(oponentPokemonHp);

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
        //          create user pokemon hp
        let userPokemonHp = document.createElement("p");        
        userPokemonHp.setAttribute("id", "userPokemonHp");
        userPokemonHp.textContent = "HP: " + userPokemon.hp + "/" + userPokemon.maxHp;
        userPokeDataCont.appendChild(userPokemonHp);
           
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
        battleMsg.classList.add("gameMsg");
        battleMsg.setAttribute("id", "battleMsg");
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
        move1Name.classList.add("gameMsg");
        move1Name.textContent = userPokemon.move1.name;
        moveSubcont1.appendChild(move1Name);

        let move1Type = document.createElement("p");
        move1Type.classList.add("typeName");
        move1Type.setAttribute("id", "moveType");
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
        move2Name.classList.add("gameMsg");
        move2Name.textContent = userPokemon.move2.name;
        moveSubcont2.appendChild(move2Name);

        let move2Type = document.createElement("p");
        move2Type.classList.add("typeName");
        move2Type.setAttribute("id", "moveType");
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

        console.log(userPokemon.move1);

        // ----------------------------------------------------------------------------
        // add "attack" function to the moves
        moveSubcont1.onclick = function(){attack(userPokemon.move1)};
        moveSubcont2.onclick = function(){attack(userPokemon.move2)};
    }

    // ==========================================================================================
    // function to go to final screen:
    function finalScreen() {
        // recreate disposable container
        let disposableContainerId = recreateDispCont("final");
        let disposableContainer = document.getElementById(disposableContainerId);

        // final title
        let finalTitle = document.createElement("h1");
        finalTitle.classList.add("gameMsg");
        finalTitle.textContent = "The winner is the " + winner;
        disposableContainer.appendChild(finalTitle);

        // winner image
        let winnerImg = document.createElement("img");
        winnerImg.classList.add("startFrontImg");
        winnerImg.src = winnerPokemon.frontImg;
        disposableContainer.appendChild(winnerImg);

        // restart button
        let restartButton = document.createElement("div");
        restartButton.setAttribute("id", "restartButton");
        let restartText = document.createElement("p");
        restartText.textContent = "Restart";
        restartText.classList.add("gameMsg");
        restartText.setAttribute("id", "restartText");
        restartButton.appendChild(restartText);
        disposableContainer.appendChild(restartButton);

        restartButton.onclick = function(){startScreen()};
    }
    

    // ==========================================================================================
    
    window.addEventListener('DOMContentLoaded', startScreen());

});