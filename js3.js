var num;

num = prompt("¿Cuantos numeros perfectos ocupas?")

for( var i = 1; i <= 1000; i++){
    b=0;
    for (var j = 1; j <= Math.floor(i/2); j++){
        b = b + parseInt(j);
    }
    if( b== i)
    console.log("El numero es perfecto\n",i);

}