import styled, { keyframes } from "styled-components"
import { NumberButton } from "./components/NumberButton"
import { OperationButton } from "./components/OperatorButton"
import { FunctionButton } from "./components/FunctionButton"
import { Display } from "./components/Display"

export default function App() {

  return (
    <>
      <Main>
        <Title>Calculadora Pixel!!</Title>
        <CalculatorWrapper>
          <Calculator>
            <Display />
            <Buttons>
              <FunctionButton func="c" />
              <FunctionButton func="sign" />
              <FunctionButton func="sqrt" />
              <OperationButton operation = "pow" />
              <NumberButton number="7" />
              <NumberButton number="8" />
              <NumberButton number="9" />
              <OperationButton operation="div" />
              <NumberButton number="4" />
              <NumberButton number="5" />
              <NumberButton number="6" />
              <OperationButton operation="prod" />
              <NumberButton number="1" />
              <NumberButton number="2" />
              <NumberButton number="3" />
              <OperationButton operation="dif" />
              <NumberButton number="0" />
              <FunctionButton func="dot" />
              <OperationButton operation="sum" />
              <FunctionButton func="equal" />
            </Buttons>
          </Calculator>
        </CalculatorWrapper>
      </Main>
    </>
  )
}

//Agregando estilos para mis componentes principales de la aplicación
const Main = styled.main`
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  padding: 2rem;
`
const zoomInAndOut = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

// Creamos una animación para el movimiento del arco iris hacia la derecha
const rainbowMovement = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

const Title = styled.h1`
  background: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 2em;
  text-align: center;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  background-size: 200% 200%;
  background-repeat: no-repeat;
  animation: ${zoomInAndOut} 3s infinite alternate, ${rainbowMovement} 5s linear infinite;
`;

const CalculatorWrapper = styled.div`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 4px 7px;
  border-radius: 20px;
`
const Calculator = styled.section`
  width: 248px;
  height: 328px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  background-image: url(/assets/body.png);
  
`

const Buttons = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  column-gap: 8px;
  row-gap: 4px;
`