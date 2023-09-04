"use strict";
/*
    data modifiers  serve para métodos também
    public  público
    private  apenas dentro da classe
    protected   apenas dentro de classes e sub-classes
*/
// superclass
// ? para não ser obrigatório
// class Character{
//     name: string;
//     stregth: number;
//     skill: number;
//     constructor(name: string, stregth: number, skill: number){
//         this.name = name;
//         this.stregth = stregth;
//         this.skill = skill;
//     }
//     attack(): void{
//         console.log(`Attack with ${this.stregth} points`);
//     }
// }
// //sub class
// class Magician extends Character{
//     magicPoints: number;
//     constructor(name: string, stregth: number, skill: number, magicPoints: number){
//         super(name, stregth, skill);
//         this.magicPoints = magicPoints;
//     }
// }
// const p1 = new Character("Jett", 10, 98);
// const p2 = new Magician("Sage", 40, 30, 100)
// console.log(p1);


//generics
// function concatArray(...itens) {
//     return new Array().concat(...itens);
// }
// const numArray = concatArray([1, 5], [3]);
// const stgArray = concatArray(["Nicolas", "Vanessa"], ["Goulart", "Trajano"]);
// numArray.push("Souza");
// console.log(numArray);
// console.log(stgArray);
