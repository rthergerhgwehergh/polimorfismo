class Animal {
    constructor(nome, cor){
        this.nome = nome;
        this.cor = cor;
    }


    falar() {
        return `Olá, meu nome é ${this.nome}`;
    }
}

class Cachorro extends Animal {
    constructor(nome, cor, raca) {
        super(nome, cor)
        this.raca = raca;
    }

    latir(){
        return `Au au!` 
    }
}

class Gato extends Animal {
    constructor(nome, cor, raca) {
        super(nome, cor)
        this.raca = raca;
    }
    miar() {
        return `Miau!`
    }
}

const animais = [
    new Cachorro("Rex", "Marrom", "Pastor Alemão"),
    new Gato("Mia", "Preto", "Gato"),
]

for(const animal of animais) {
    console.log(`O animal "${animal.nome}" é ${animal.cor}.`);
}

for(const animal of animais) {
    console.log(animal.falar());
}

const cachorro = animais[0];
console.log(cachorro.latir());

const gato = animais[1];
console.log(gato.miar());