let saisir;
saisir = prompt("Saisissez le numéro d'un mois :");
saisir = parseInt(saisir);


if(saisir === 1,3,5,7,8,10,12){
    alert("Le nombre de jour est de 31");
}else if(saisir === 2){
    alert("Le nombre de jour est de 28");
}else if(saisir === 4,6,9){
    alert("Le nombre de jour est de 30");
}else{
    alert("Erreur de saisie");   
}
