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
// function concatArray<T>(...itens: T[]):T[]{
//     return new Array().concat(...itens);
// }

// const numArray = concatArray<number[]>([1, 5], [3]);
// const stgArray = concatArray<string[]>(["Nicolas", "Vanessa"], ["Goulart", "Trajano"]);


// console.log(numArray);
// console.log(stgArray);


//decorators

// function exbirNome(target: any){
//     console.log(target);
    
// }

// @exbirNome
// class Funcionario{}

// @exbirNome
// class Quincas{}

// function apiVersion(version: string){
//     return(target: any) =>{
//         Object.assign(target.prototype, {__version: version})
//     }
// }


//attribute decorator
function minLength(length: number){
    return (target:any, key: string) =>{
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) =>{
            if(value.length < length){
                throw new Error(`Tamanho menor do que ${length}`)
            }else{
                _value = value;
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        })
        
    }
}

class Api{
    @minLength(3)
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

const api = new Api("use");
console.log(api.name);



