import { createContext, useContext, useState } from "react";

// Definición de la interfaz del contexto con sus propiedades
interface IFlashDisplayContext {
    isDisplayOff: boolean,  // Indica si la visualización está apagada
    timeoutId: number | null,  // El ID del temporizador
    setIsDisplayOff: React.Dispatch<React.SetStateAction<boolean>>,  // Función para actualizar isDisplayOff
    setTimeoutId: React.Dispatch<React.SetStateAction<number | null>>,  // Función para actualizar timeoutId
    handleDisplayFlash: () => void  // Función para mostrar el destello
}

// Creación del contexto con un valor predeterminado
const FlashDisplayContext = createContext<IFlashDisplayContext>({
    isDisplayOff: false,
    timeoutId: null,
    setIsDisplayOff: () => false,
    setTimeoutId: () => null,
    handleDisplayFlash: () => { }
});
// Componente proveedor del contexto
export function FlashDisplayProvider({ children }: { children: React.ReactNode }) {

    const [isDisplayOff, setIsDisplayOff] = useState<boolean>(false);
    const [timeoutId, setTimeoutId] = useState<number | null>(null);
 // Función para mostrar el destello
    function handleDisplayFlash() {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        setIsDisplayOff(true);

        const newTimeoutId = setTimeout(() => {
            setIsDisplayOff(false);
        }, 100);

        setTimeoutId(newTimeoutId);
    }


    return <>
        <FlashDisplayContext.Provider
            value={{
                isDisplayOff,
                setIsDisplayOff,
                timeoutId,
                setTimeoutId,
                handleDisplayFlash
            }}>
            {children}
        </FlashDisplayContext.Provider>
    </>
}

// Hook personalizado para acceder al contexto
export const useFlashDisplayContext = () => useContext(FlashDisplayContext)