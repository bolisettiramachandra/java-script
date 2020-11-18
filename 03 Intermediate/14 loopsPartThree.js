const names = ["Facebook","Youtube","Instagram","Amazon","Whatsapp"];

for ( const n of names){
    console.log(n);
}

const symbols = {
    yt : "youtube",
    fb : "facebook",
    ig : "instagram",
    lco : "learnCodeOnline",
}

for (const n in symbols){
    console.log(` Key is : ${n} and value is : ${symbols[n]} `);
}