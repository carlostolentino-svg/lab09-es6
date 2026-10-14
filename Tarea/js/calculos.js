// Promedio usando operador REST para agrupar argumentos (...notas)
export const promedio = (...notas) => {
    const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return suma / notas.length;
};

// Estado utilizando un parámetro por defecto (minima = 13)
export const estado = (nota, minima = 13) => nota >= minima ? "Aprobado" : "Desaprobado";

// Reporte individual aplicando desestructuración de objetos ({ nombre, notas })
// e interpolación con Template Literals (`${}`)
export const reporte = ({ nombre, notas }) => {
    // Calculamos el promedio enviando las notas expandidas con SPREAD (...)
    const prom = promedio(...notas);
    return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
};
