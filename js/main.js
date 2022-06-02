/* En el siguiente script simula que hay 3 vehículos en una pista y se tiene que ingresar el número de cada vehículo y luego el tiempo que realizo en minutos. Esto se hace con los 3 vehículos. Luego en consola muestra cuál fue el auto más rápido */


let mejorTiempo = 1000000000000000;

for (let i = 0; i < 3; i++) {
    let numeroVehiculo = parseInt(prompt("Ingrese el número que utilizó el vehículo en la carrera \n Por ejemplo: 10 \n Había 3 vehículos en pista"))
    let tiempo = parseInt(prompt("Ingrese el tiempo en minutos realizado por el Vehículo N°" + numeroVehiculo + ". Por ejemplo: 120"))
    
    if (tiempo < mejorTiempo){
        mejorTiempo = tiempo;
        numeroMejor = numeroVehiculo;
    }
}

console.log("El mejor vehículo fue el número " + numeroMejor);
console.log("Fue el mejor tiempo con un tiempo de " + mejorTiempo, "minutos");
