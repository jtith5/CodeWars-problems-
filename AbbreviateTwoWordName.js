function abbrevName(name){
    let Initals = '';
    Initals = Initals + name.substring(0,1) + '.';
    for (let i = 1; i < name.length; i++) {
        if (name.substring(i,i+1) === ' ') {
            Initals = Initals + name.substring(i + 1,i+2);
        }
    }
    return Initals.toUpperCase();
}

console.log(abbrevName('Tillman Gibbs'));