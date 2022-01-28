function getFastestLaptop(first,second){
    if(first.cpu>second.cpu){
        console.log(first)
    }
    else if(first.cpu<second.cpu){
        console.log(second)
    }
    else{
        console.log(`Both are having same cpu`)
    }
}

let laptop1 = {
    cpu : "i7",
    brand : "Apple",
    getConfig : function(){
        console.log(this.cpu)
        
    },
    compare : function(other){
        if(this.cpu>other.cpu){
            return(this.getConfig() + "is fastest of both" )
        }
        else{
            return(other.getConfig()+"is fastest of both")
        }
    }
}

let laptop2 = {
    cpu : "i9",
    brand : "Asus",
    getConfig : function(){
        console.log(this.cpu)
    },
    compare : function(other){
        if(this.cpu>other.cpu){
            return(this.brand+" is fastest of both"  )
        }
        else{
            return(other.brand+" is fastest of both")
        }
    }
}

let laptop3 = {
    cpu : "i9",
    brand : "HP",
    getConfig : function(){
        console.log(this)
    }
}

getFastestLaptop(laptop1,laptop2)
getFastestLaptop(laptop3,laptop2)
laptop1.getConfig()

console.log(laptop2.compare(laptop1))