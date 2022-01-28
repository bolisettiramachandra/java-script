let laptop ={         
    brand:'ASUS',
    cpu : 'i9',
    getConfig : function(){        
        let storage = 1000
        console.log("Hello World !! "+ storage)
        console.log(`Brand : ${laptop.brand}`)
        console.log("cpu :" + this.cpu)
    }
}

laptop.getConfig()