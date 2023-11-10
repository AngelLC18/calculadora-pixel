// Función que verifica si el número ingresado es considerado grande
export function largeNumberCheck(number: number) {
    let isLarge = false; // Inicialmente se asume que el número no es grande

    if (number < 1 && number > -1 && number !== 0) {
        // Si el número está en el rango (-1, 1) y no es cero
        let trunk = Math.abs(number).toString().split(".")[1]; // Obtiene la parte decimal como una cadena
        let zero = false; // Inicialmente no se ha encontrado ningún dígito distinto de cero
        let i = 0;

        // Verifica los primeros 8 dígitos de la parte decimal
        while (i < 8 && !zero) {
            if (trunk[i] !== "0") {
                zero = true; // Si encuentra un dígito distinto de cero, marca la bandera como verdadera
            }
            i++;
        }

        // Si se encontraron 8 dígitos no nulos, el número se considera grande
        if (i >= 8) {
            isLarge = true;
        }
    } else {
        // Si el número no está en el rango (-1, 1) o es cero
        let trunk = Math.trunc(number); // Obtiene la parte entera del número
        let string = trunk.toString(); // Convierte la parte entera en una cadena
        let size = string.length;

        // Si el número no es un número entero, aumenta el tamaño en 1 para contar el punto decimal
        if (trunk !== number) {
            size++;
        }

        // Si el tamaño supera los 8 dígitos, el número se considera grande
        if (size > 8) {
            isLarge = true;
        }
    }

    return isLarge; // Devuelve true si el número es grande, de lo contrario, false
}
