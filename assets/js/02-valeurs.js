console.log("hello")

let a = 2;
a = a - 1;
a++;

let resultat;
resultat = a;
console.log('Le résultat de "a - 1;" " + " " a++; " est ' + a);

let b = 8;
b += 2;
resultat = b;
console.log('Le résultat de "b;" " + " b += 2; " est ' + b);

let c = a + b * b;
resultat = c;
console.log('Le résultat de "c;" " + " a + b * b; " est ' + c);

let d = a * b + b;
resultat = d;
console.log('Le résultat de "d;" " + " a * b + b; " est ' + d);

let e = a * (b + b);
resultat = e;
console.log('Le résultat de "e;" " + " a * (b + b); " est ' + e);

let f = a * b / a;
resultat = f;
console.log('Le résultat de "f;" " + " a * b / a; " est ' + f);

let g = b / a * a;
resultat = g;
console.log('Le résultat de "g;" " + " b / a * a; " est ' + g);

// Correction

/*
 let a = 2;
a = a - 1;
console.log("var a doit être à 1 : " + a);

a++;
console.log("var a doit être à 2 : " + a);

let b = 8;
b += 2;
console.log("var b doit être à 10 : " + b);

let c = a + b * b;
console.log("var c doit être à 102 : " + c);

let d = a * b + b;
console.log("var d doit être à 30 : " + d);

let e = a * (b + b);
console.log("var e doit être à 40 : " + e);

let f = a * b / a;
console.log("var f doit être à 10 : " + f);

let g = b / a * a;
console.log("var g doit être à 10 : " + g); 
*/