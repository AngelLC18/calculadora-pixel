import styled from "styled-components"
import { useDisplayContext } from "../../providers/DisplayProvider"
import { calcOperation } from "../../utils/calc-operation"
import { displayLargeNumber, numberToDisplayString } from "../../utils/num-to-string"
import { useFlashDisplayContext } from "../../providers/FlashDisplayProvider"
import { largeNumberCheck } from "../../utils/large-number"
//Componente que crea los botones de los operadores de la calculadora

interface IOperation {
    operation: "sum" | "dif" | "prod" | "div" |"pow"| "sqrt"
}

export function OperationButton({
    operation
}: IOperation) {
// Obtener el contexto de visualización
    const {
        slot1,
        slot2,
        operation: ctxOperation,
        isError,
        isLargeNumber,
        setOperation,
        setSlot1,
        setSlot2,
        setDigits,
        setIsNegative,
        setIsFloat,
        setIsError,
        setIsLargeNumber
    } = useDisplayContext()
    // Obtener la función para mostrar el destello del contexto FlashDisplay
    const { handleDisplayFlash } = useFlashDisplayContext();

    // Función para manejar el clic en el botón de operación
    function handleClick() {
        // Mostrar el destello
        handleDisplayFlash();

        if (!isError && !isLargeNumber) {
            if (slot1 !== null) {
                if (slot2 !== null) {
                    // Calcular el resultado de la operación
                    let result = calcOperation(slot1, slot2, ctxOperation)

                    // Verificar si el resultado es NaN o infinito
                    if (isNaN(result) || !isFinite(result)) {
                        setIsError(true)
                        return
                    }
                    // Comprobar si el resultado es un número grande
                    if (largeNumberCheck(result)) {
                        // Formatear el número grande y actualizar el estado
                        let answer = displayLargeNumber(result)
                        setDigits(answer)
                        setIsLargeNumber(true)
                        return
                    }

                    let negative = result < 0
                    let answer = numberToDisplayString(result)
                    // Actualizar el estado con el resultado de la operación
                    setSlot1(Number(answer.join("")) * (negative ? -1 : 1))
                    setSlot2(null)
                    setDigits(answer.join(""))
                    setOperation(null)
                    setIsNegative(negative)
                }

                setOperation(operation)
                setIsFloat(false)
            }
        }
    }

    return <>
        <Button
            operation={operation}
            onMouseDown={() => handleClick()}
        />
    </>
}
// Estilo del botón con Styled-Components
const Button = styled.button <IOperation> `
    width: 44px;
    height: 40px;
    border: none;
    background-color: transparent;
    background-image: url("/assets/btn-${(props) => props.operation}.png");
    cursor: pointer;
    &:active {
        background-position: -44px 0;
    }
`
