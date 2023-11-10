import { createContext, useContext, useState } from "react";

// Definición de la interfaz del contexto con sus propiedades
interface IDisplayContext {
    operation: string | null,  // La operación actual
    slot1: number | null,  // El valor del primer operando
    slot2: number | null,  // El valor del segundo operando
    digits: string,  // Los dígitos en pantalla
    isNegative: boolean,  // Indica si el número es negativo
    isFloat: boolean,  // Indica si el número es decimal
    isError: boolean,  // Indica si hay un error
    isLargeNumber: boolean,  // Indica si el número es grande
    setSlot1: React.Dispatch<React.SetStateAction<number | null>>;  // Función para actualizar slot1
    setSlot2: React.Dispatch<React.SetStateAction<number | null>>;  // Función para actualizar slot2
    setDigits: React.Dispatch<React.SetStateAction<string>>;  // Función para actualizar los dígitos
    setOperation: React.Dispatch<React.SetStateAction<string | null>>;  // Función para actualizar la operación
    setIsNegative: React.Dispatch<React.SetStateAction<boolean>>;  // Función para actualizar isNegative
    setIsFloat: React.Dispatch<React.SetStateAction<boolean>>;  // Función para actualizar isFloat
    setIsError: React.Dispatch<React.SetStateAction<boolean>>;  // Función para actualizar isError
    setIsLargeNumber: React.Dispatch<React.SetStateAction<boolean>>;  // Función para actualizar isLargeNumber
}

// Creación del contexto con un valor predeterminado
const DisplayContext = createContext<IDisplayContext>({
    operation: null,
    slot1: null,
    slot2: null,
    digits: "0",
    isNegative: false,
    isFloat: false,
    isError: false,
    isLargeNumber: false,
    setSlot1: () => null,
    setSlot2: () => null,
    setDigits: () => "0",
    setOperation: () => null,
    setIsNegative: () => false,
    setIsFloat: () => false,
    setIsError: () => false,
    setIsLargeNumber: () => false
});
// Componente proveedor del contexto
export function DisplayProvider({ children }: { children: React.ReactNode }) {

    const [operation, setOperation] = useState<string | null>(null)
    const [slot1, setSlot1] = useState<number | null>(null)
    const [slot2, setSlot2] = useState<number | null>(null)
    const [digits, setDigits] = useState<string>("0")
    const [isNegative, setIsNegative] = useState<boolean>(false)
    const [isFloat, setIsFloat] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [isLargeNumber, setIsLargeNumber] = useState<boolean>(false)



    return <>
        <DisplayContext.Provider
            value={{
                slot1,
                setSlot1,
                slot2,
                setSlot2,
                operation,
                setOperation,
                digits,
                setDigits,
                isNegative,
                setIsNegative,
                isFloat,
                setIsFloat,
                isError,
                setIsError,
                isLargeNumber,
                setIsLargeNumber
            }}>
            {children}
        </DisplayContext.Provider>
    </>
}


export const useDisplayContext = () => useContext(DisplayContext)