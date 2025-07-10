console.log("yooo");

let nb1, nb2
nb1 =  parseFloat (prompt("Entrez le premier nombre"));
nb2 = parseFloat (prompt("Entrez le deuxième nombre"));

if(nb1 < nb2){
    alert(nb1 + " est plus petit que " + nb2);
}else if(nb1 > nb2){
    alert(nb1 + " est plus grand que " + nb2);
}else if(nb1 === nb2){
    alert(nb1 + " est égale à " + nb2);   
}

console.log(nb1==nb2);
console.log(nb1 === nb2);
console.log(nb1 != nb2);
console.log(nb1 !== nb2);

    


