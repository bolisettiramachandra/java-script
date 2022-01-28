const filter = (...args) => {
    return args.filter(a => a%2===1);
}

console.log(filter(1,2,3,4,5,6,7,8))