interface Person{
    name:string,
    age:number,
    getDetails():string;
}


const viateur: Person={
    name:"viateur",
    age:90,
    getDetails() {
        return `hello ${viateur.name} with this age ${viateur.age}`
    },

}
console.log(viateur.getDetails());
