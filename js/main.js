class Hotel{
    constructor(numeroDeReservaHotel, precioReserva, nombredeHotel, direccionDeHotel){
        this.numeroDeReservaHotel = numeroDeReservaHotel // Numero de reserva del hotel
        this.precioReserva = precioReserva // precio neto del hotel
        this.nombredeHotel = nombredeHotel // Nombre del hotel, esto facilita al usuario buscarlo en internet
        this.direccionDeHotel = direccionDeHotel // direccion del hotel, un extra para saber la ubicacion del hotel

        
        this.generarReservas();
    }
    generarReservas(){ 
        this.reservas = []

        for(let i = 0; i < 50; i++){
            const reserva = new reservaDeHotel(i,false)
            this.reservas.push(reserva)
        }
    }
}

class reservaDeHotel{ 

    constructor(numerodeHabitacion, ocupada){
        this.numerodeHabitacion = numerodeHabitacion // Que numero de habitacion tiene la reserva
        this.ocupada = ocupada // Para saber si esta reservardo o no.

    }
}

function validarHotel(numeroDeReservaHotel) {

    return listaDeReservasHotel.find((Hotel) =>{
        return Hotel.numeroDeReservaHotel === numeroDeReservaHotel
    })
}

function hayreservasDisponibles(Hotel, cantidadDeReservas){

    const reservasDisponibles = Hotel.reservas.filter( (reserva) =>{
        return !reservaDeHotel.ocupada
    })
    
    return reservasDisponibles.length >= cantidadDeReservas

}

// Inicio de programa
alert("Hoteles disponibles. (La cumbre cordoba numero de reserva: A2BQ1), (Hotel calamuchita numero de reserva: 12SZ1), (Pajas Blancas numero de reserva: LZGD24)")

const listaDeReservasHotel = [
new Hotel("A2BQ1","100 USD","La Cumbre Resort", "Cordoba La Cumbre salamanca121"), 
new Hotel("12SZ1", "125 dolares", "Hotel Calamuchita", "Valle Calamuchita Los reartes 124"),
new Hotel("LZGD24","80 USD", "Pajas blancas", "AV.Luchesse 504 Cordoba")]
    
let hotelesDisponibles = prompt("Ingrese el hotel que quiere reservar. Si no ingrese SALIR si quiere cerrar el programa")

while(hotelesDisponibles !== "SALIR"){
    
    const hotell = validarHotel(hotelesDisponibles) // valida que el hotel existe

    if(hotell !== undefined){

        let cantidadDeReservas = (prompt("Ingrese la cantidad de reservas que quiere hacer"))

        while(cantidadDeReservas <= 0 || !hayreservasDisponibles(hotell, cantidadDeReservas)){

            let cantidadDeReservas = (prompt("Ingrese la cantidad de reservas que quiere hacer."))
        }
        console.log(cantidadDeReservas)
    
    } else{
        alert("Numero de reserva invalido")
    }



}
