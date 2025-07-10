console.log("yo");

let saisir;
saisir = prompt("Saisir un jour de la semaine :");

if(saisir === "lundi"){
    alert("Le jour suivant est mardi");
}else if(saisir === "mardi"){
    alert("Le jour suivant est mercredi");
}else if(saisir === "mercredi"){
    alert("Le jour suivant est jeudi");
}else if(saisir === "jeudi"){
    alert("Le jour suivant est vendredi");
}else if(saisir === "vendredi"){
    alert("Le jour suivant est samedi");
}else if(saisir === "samedi"){
    alert("Le jour suivant est dimanche");
}else if(saisir === "dimanche"){
    alert("Le jour suivant est lundi");
}else{
    alert("Erreur de saisie");   
}

switch(userDay){
    case 'samedi':
        alert('demain sera Dimanche');
        break;
    case 'dimanche':
        alert('demain sera Lundi');
        break;
    case 'lundi':
        alert('demain sera Mardi');
        break;
    case 'mardi':
        alert('demain sera Mercredi');
        break;
    case 'mercredi':
        alert('demain sera Jeudi');
        break;
    case 'Jeudi':
        alert('demain sera Vendredi');
        break;
    case 'Vendredi':
        alert('demain sera Samedi');
        break;
    default:
        alert('Entre un jours de la semaine valide');
}