// Importaciones de los módulos anteriores
import estudiantes, { curso } from './datos.js';
import { reporte } from './calculos.js';

// Clonar un objeto (estudiantes[0]) y modificar una propiedad usando SPREAD
const nuevo = { ...estudiantes[0], nombre: "Ana María" };

// Crear un nuevo arreglo combinando el original con el nuevo usando SPREAD
const todos = [...estudiantes, nuevo];

// Imprimir encabezado en consola y en el DOM
console.log(`Curso: ${curso}`);

const ulReportes = document.querySelector("#reportes");

// Recorrer el arreglo usando un bucle moderno (forEach) e inyectar al HTML
todos.forEach(estudiante => {
    const lineaReporte = reporte(estudiante);
    
    console.log(lineaReporte); // Se muestra en consola
    ulReportes.innerHTML += `<li>${lineaReporte}</li>`; // Se muestra en la página
});
