// Creacion de objetos en Javascript

let desarrollador1 = {
		nombre: 'Juan', // Clave + Valor = Atributo
		apellido: 'Adasme',
		edad: 32,
		ocupación: 'Desarrollador Senior',
		empleo: {
				sector: 'banca',
				empresa: 'Scotiabank',
				cargo: 'Backend Developer',
				salario: 3000000
		},
		//Método: función dentro de un objeto
		nombrecompleto: function() {
			return this.nombre + ' ' + this.apellido;
		}
}

//Se puede crear un nuevo atributo sin haberlo declarado anteriormente
desarrollador1.departamento = 'Desarrollo Backend';

//Para acceder a los datos (ejemplo: nombre del desarrollador)
//Notación por punto
console.log(desarrollador1.nombre)

//Notación por corchete

console.log(desarrollador1['nombre']);

console.log(desarrollador1.nombrecompleto());