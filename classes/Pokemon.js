
// 'abstract' class to be extended by each pokemon class

class Pokemon {
    constructor (name, type, hp, atk, def, spe, frontImg, backImg, move1, move2) {
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.spe = spe;
        this.frontImg = frontImg;
        this.backImg = backImg;
        this.move1 = move1;
        this.move2 = move2;
    }

    attack (move, oponent) {
        let effect = null;
        switch (move.type) {
            case 0:
                switch (oponent.type) {
                    case 0:
                        effect = 0.5;
                    case 1:
                        effect = 0.5;
                    case 2:
                        effect = 2;
                }
                case 0:
                    switch (oponent.type) {
                        case 0:
                            effect = 0.5;
                        case 1:
                            effect = 0.5;
                        case 2:
                            effect = 2;
                    }
            case 0:
                switch (oponent.type) {
                    case 0:
                        effect = 0.5;
                    case 1:
                        effect = 0.5;
                    case 2:
                        effect = 2;
                }
                case 0:
                    switch (oponent.type) {
                        case 0:
                            effect = 0.5;
                        case 1:
                            effect = 0.5;
                        case 2:
                            effect = 2;
                    }
        }
        
        // return damage
        return ((move.power * (this.atk/oponent.def))/50 + 2)*effect;
    }
}

class Move {
    constructor (name, type, power) {
        this.name = name;
        this.type = type;
        this.power = power;
    }


}

export class Bulbasaur extends Pokemon {

    constructor (name="Bulbasaur", 
                    type=0, 
                    hp=45, 
                    atk=65, 
                    def=65, 
                    spe=45, 
                    frontImg = "images/bulbasaur.png", 
                    backImg = "images/bulbasaur_back.png",
                    move1 = new Move("Tackle", 100, 40),
                    move2 = new Move("VineWhip", 0, 45)
                    ) {
        super(name, type, hp, atk, def, spe, frontImg, backImg, move1, move2);
    }
}

export class Charmander extends Pokemon {

    constructor (name="Charmander", 
                    type=1, 
                    hp=39, 
                    atk=60, 
                    def=50, 
                    spe=65, 
                    frontImg = "images/charmander.png", 
                    backImg = "images/charmander_back.png",
                    move1 = new Move("Scratch", 100, 40),
                    move2 = new Move("Ember", 1, 40)
                    ) {
        super(name, type, hp, atk, def, spe, frontImg, backImg, move1, move2);
    }
}

export class Squirtle extends Pokemon {

    constructor (name="Squirtle", 
                    type=2, 
                    hp=44, 
                    atk=50, 
                    def=64, 
                    spe=43, 
                    frontImg = "images/squirtle.png", 
                    backImg = "images/squirtle_back.png",
                    move1 = new Move("Tackle", 100, 40),
                    move2 = new Move("Water Gun", 2, 40)
                    ) {
        super(name, type, hp, atk, def, spe, frontImg, backImg, move1, move2);
    }
}