
// 'abstract' class to be extended by each pokemon class

class Pokemon {
    constructor (name, type, hp, atk, def, spe, frontImg, backImg) {
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.spe = spe;
        this.frontImg = frontImg;
        this.backImg = backImg;
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

export class Bulbasaur extends Pokemon {

    constructor (name="Bulbasaur", type=0, hp=45, atk=65, def=65, spe=45, frontImg = "images/bulbasaur.png", backImg = "images/bulbasaur_back.png") {
        super(name, type, hp, atk, def, spe, frontImg, backImg);
    }
}

export class Charmander extends Pokemon {

    constructor (name="Charmander", type=1, hp=39, atk=60, def=50, spe=65, frontImg = "images/charmander.png", backImg = "images/charmander_back.png") {
        super(name, type, hp, atk, def, spe, frontImg, backImg);
    }
}

export class Squirtle extends Pokemon {

    constructor (name="Squirtle", type=2, hp=44, atk=50, def=64, spe=43, frontImg = "images/squirtle.png", backImg = "images/squirtle_back.png") {
        super(name, type, hp, atk, def, spe, frontImg, backImg);
    }
}