function Alien(name,tech){
    this.name=name
    this.tech=tech
    this.work = function(){
        console.log("Solving bugs for 12 hrs")
    }
}
let alien1 = new Alien("Ram......","JS..........")
let alien2 = new Alien("chandra","Java")

alien2.tech="Blockchain"
console.log(alien1,alien2)
alien1.work()