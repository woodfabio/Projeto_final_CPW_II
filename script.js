window.addEventListener('DOMContentLoaded', function () {

    // functions:
    function startScreen () {
        // game message:
        let content = document.getElementById("content");
        let chooseMsg = document.createElement("p");
        chooseMsg.textContent = "Choose a pokémon";
        chooseMsg.classList.add("gameMsg")
        chooseMsg.setAttribute("id","chooseMsg");
        content.appendChild(chooseMsg);

        // pokemon images:
        // Container for images
        let imagesContainer = document.createElement("div");
        imagesContainer.classList.add("imagesContainer");
        // bulbasaur
        let bulbasaurImg = document.createElement("img");
        bulbasaurImg.src = "images/bulbasaur.png";
        bulbasaurImg.classList.add("startFrontImg");
        imagesContainer.appendChild(bulbasaurImg);
        // charmander
        let charmanderImg = document.createElement("img");
        charmanderImg.src = "images/charmander.png";
        charmanderImg.classList.add("startFrontImg");
        imagesContainer.appendChild(charmanderImg);
        // squirtle
        let squirtleImg = document.createElement("img");
        squirtleImg.src = "images/squirtle.png";
        squirtleImg.classList.add("startFrontImg");
        imagesContainer.appendChild(squirtleImg);

        content.appendChild(imagesContainer);
        


    }

    // ----------------------------------------------------------------------------------
    
    window.addEventListener('DOMContentLoaded', startScreen());

});