import { Container, Content, Row } from "./styles";

import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import { useState } from "react";

function App() {
  const [firstNumber, setFirstNumber] = useState("0");
  const [currentNumber, setCurrentNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
  };
  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev == 0 ? "" : prev}${number}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber == "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber == "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const min = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(min));
      setOperation("");
    }
  };

  const handleMultiNumbers = () => {
    if (firstNumber == "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const multi = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multi));
      setOperation("");
    }
  };

  const handleDivNumbers = () => {
    if (firstNumber == "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const divid = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divid));
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (firstNumber != "0" && operation != "" && currentNumber != "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        case "*":
          handleMultiNumbers();
          break;
        case "/":
          handleDivNumbers();
          break;
        default:
          break;
      }
    }
  };
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label={"x"} onClick={handleMultiNumbers} />
          <Button label={"/"} onClick={handleDivNumbers} />
          <Button label={"C"} onClick={handleOnClear} />
          <Button label={"."} onClick={() => handleAddNumber(".")} />
        </Row>
        <Row>
          <Button label={"7"} onClick={() => handleAddNumber("7")} />
          <Button label={"8"} onClick={() => handleAddNumber("8")} />
          <Button label={"9"} onClick={() => handleAddNumber("9")} />
          <Button label={"-"} onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label={"4"} onClick={() => handleAddNumber("4")} />
          <Button label={"5"} onClick={() => handleAddNumber("5")} />
          <Button label={"6"} onClick={() => handleAddNumber("6")} />
          <Button label={"+"} onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label={"1"} onClick={() => handleAddNumber("1")} />
          <Button label={"2"} onClick={() => handleAddNumber("2")} />
          <Button label={"3"} onClick={() => handleAddNumber("3")} />
          <Button label={"="} onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
