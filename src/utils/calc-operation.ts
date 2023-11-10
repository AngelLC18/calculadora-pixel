//Función de las operaciones de la calculadora
export function calcOperation(slot1: number, slot2: number, operation: string | null) {
    let result //Variable para guardar el resultado de las operaciones
    switch (operation) {
        case "sum": result = slot1 + slot2; break; //Suma
        case "dif": result = slot1 - slot2; break; //Resta
        case "prod": result = slot1 * slot2; break; //Multiplicación
        case "div": result = slot1 / slot2; break; //División
        case "pow": result = Math.pow(slot1, slot2); break; //Potencia
        default: result = 0; break;
    }

    return (result)
}