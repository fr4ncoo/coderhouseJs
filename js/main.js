

/* let cortar = parseInt(prompt("ingresar hasta que numero queres mostrar"))

for (let i = 1 ; i <= 100 ; i++) {
   if ((cortar+1) == i) {
    break 
}
   console.log (i)
} */

let saltear = parseInt(prompt ("numero para saltear"));

for (let i = 1; i <= 50; i++) {
    if (i == saltear) {
        continue;
    };
    console.log (i)
}