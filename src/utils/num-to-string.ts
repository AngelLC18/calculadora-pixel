// Función para convertir un número en una representación de cadena para mostrar en la calculadora
export function numberToDisplayString(number: number) {
    // Arreglo para almacenar los caracteres de la representación
    let answer = [];
    // Arreglo sin el punto decimal
    let noDotAnswer = [];
    // Convierte el número en una cadena y divide los caracteres
    let string = Math.abs(number).toString().split("");
    // Filtra los caracteres para eliminar el punto decimal
    let noDotString = string.filter(s => s !== '.');
    
    let i = 0;
    // Construye la representación con un máximo de 8 caracteres
    while (i <= noDotString.length && noDotAnswer.length < 8) {
        answer.push(string[i]);
        if (string[i] !== ".") {
            noDotAnswer.push(string[i]);
        }
        i++;
    }
    
    // Devuelve la representación como un arreglo de caracteres
    return answer;
}

// Función para mostrar números que superen la longitud de la calculadora
export function displayLargeNumber(number: number) {
    // Convierte el valor absoluto del número en notación exponencial
    let exp = Math.abs(number).toExponential().split("+").join("");
    // Cadena resultante (notación exponencial)
    let string = exp;

    // Verifica si la cadena resultante supera los 9 caracteres
    if (exp.length > 9) {
        // Divide la notación exponencial en valor y exponente
        let [valueL, valueR] = exp.split("e");
        // Acorta el valor para que tenga una longitud de 8 caracteres
        let valueSlice = valueL.slice(0, 8 - valueR.length);
        // Combina el valor acortado y el exponente
        string = valueSlice + "e" + valueR;
    }

    // Devuelve la cadena resultante
    return string;
}
