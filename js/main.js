class Hotel{
    constructor(numeroDeReserva, precioHotel, nombredeHotel, direccionDeHotel){
        this.numeroDeReserva = numeroDeReserva
        this.precioHotel = precioHotel
        this.nombredeHotel = nombredeHotel
        this.direccionDeHotel = direccionDeHotel

        
        this.cantidadHabitaciones();
    }
    cantidadHabitaciones(){
        this.habitaciones = []
        for(let i = 0; i < 50; i++){
            const cuarto = new Habitacion(i,false)
            this.habitaciones.push(cuarto)
        }
    }
}

class Habitacion{

    constructor(numerodeHabitacion, estado){
        this.numerodeHabitacion = numerodeHabitacion
        this.estado = estado
    }
}

function validarHotel(numeroDeReserva) {

    return listaDeReservasHotel.find((Hotel) =>{
        return Hotel.numeroDeReserva === numeroDeReserva
    })
}

// Inicio de programa

const listaDeReservasHotel = [new Hotel("A2BQ1","100 USD","La Cumbre Resort", "Cordoba La Cumbre salamanca121"), 
new Hotel("12SZ1", "125 dolares", "Hotel Calamuchita", "Valle Calamuchita Los reartes 124"),
new Hotel("LZGD24","80 USD", "Pajas blancas", "AV.Luchesse 504 Cordoba")]
    
let hotelesDisponibles = prompt("Ingrese el hotel que quiere reservar. Si no ingrese SALIR si quiere cerrar el programa")

while(hotelesDisponibles != "SALIR"){
    
    const Hotel = validarHotel(hotelesDisponibles)


    let hotelesDisponibles = prompt("Ingrese el hotel que quiere reservar. Si no ingrese SALIR si quiere cerrar el programa")
}
