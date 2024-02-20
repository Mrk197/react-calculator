import Keyboard from "./components/Keyboard";
import Display from "./components/Display";
import History from "./components/History";
import OptionBar from "./components/OptionBar";
import { infixToPostfix, buildExpressionTree, evaluateExpressionTree } from "./components/ExpressionTree";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

function App() {
  // const history = [
  //   {op:'4+5-5+(5.02x4)', total: '24.08'},
  //   {op:'4+(5.02x4)', total: '24.08'},
  //   {op:'4+5-8+(2x4)+7/2', total: '12.5'}
  // ];
  const [history, setHistory] = useState([]);
  const [infixExpression, setInfixExpression] = useState("");
  //const [lastNumber, setLastNumber] = useState("0");

  const resolveExpresion = () => {
    let temporalInfixExpression = infixExpression;
    temporalInfixExpression = temporalInfixExpression.replace('×','*');
    temporalInfixExpression = temporalInfixExpression.replace('÷','/');
    temporalInfixExpression = temporalInfixExpression.replace('㎡','^2');
    temporalInfixExpression = temporalInfixExpression.replace('√','2#');
    temporalInfixExpression = temporalInfixExpression.replace('mod','@');
    temporalInfixExpression = temporalInfixExpression.replace('%','%100');
    temporalInfixExpression = temporalInfixExpression.replace('Π', Math.PI);
    temporalInfixExpression = temporalInfixExpression.replace(')(', ')*(');
    console.log("Temporal Exp",temporalInfixExpression);
    const infixTokens = temporalInfixExpression.split(/([()+\-*/^%#@])/).filter(Boolean);
    console.log("infixTokens", infixTokens);
    const postfixExpression = infixToPostfix(infixTokens);
    const expressionTree = buildExpressionTree(postfixExpression);
    const result = evaluateExpressionTree(expressionTree);
    return result;
  };

  const undoExpresion = () => {
    const newExpresion = infixExpression.substring(0,infixExpression.length-1);
    setInfixExpression(newExpresion);
  }
  const changeDisplay = (value) => {
    console.log(value);
    const operators = ["+","-","×","÷","mod","√","㎡","%"]
    const numbers =[0,1,2,3,4,5,6,7,8,9];
    // if (numbers.includes(parseInt(value))) {
    //   setLastNumber(lastNumber+value);
    //   console.log("lastNumber",lastNumber);
    // };
    console.log(infixExpression.at(0));
    //if(infixExpression.at(0) == "0") setInfixExpression("");
    if(value === 'C') {
      //setLastNumber("0")
      setInfixExpression("")
      return;
    };
    if(value === ',' && infixExpression.at(infixExpression.length-1) === ',') return; //don't duplicate ,
    if(value === ')' && infixExpression.at(infixExpression.length-1) === '(') return setInfixExpression(infixExpression.concat("0")+value); //(0)
    if(value === ')' && operators.includes(infixExpression.at(infixExpression.length-1))) return setInfixExpression(infixExpression.concat("0")+value); // (1+0)
    if(numbers.includes(parseInt(value)) && infixExpression.at(infixExpression.length-1) === ')') return setInfixExpression(infixExpression.concat("×")+value) //(8)2
    if(value === '(' && numbers.includes(parseInt(infixExpression.at(infixExpression.length-1)))) return setInfixExpression(infixExpression.concat("×")+value)//2(8)
    if (operators.includes(value) && operators.includes(infixExpression.at(infixExpression.length-1))) return setInfixExpression(infixExpression.substring(0,infixExpression.length-1).concat(value)); //change operator
    if(value === '=') {
      if (operators.includes(infixExpression.at(infixExpression.length-1)) && infixExpression.at(infixExpression.length-1)!=='%' && infixExpression.at(infixExpression.length-1)!=='㎡') return;
      const total = resolveExpresion();
      setInfixExpression(`${total}`);
      return setHistory([...history,{op:infixExpression,total:total}]);
    }
    else return setInfixExpression(infixExpression+value);
  }

  useEffect(()=>{
    console.log("infixExpression", infixExpression);
  },[infixExpression]);
  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>REACT CALCULATOR</h1>
        <OptionBar changeHistory={setHistory} undo={undoExpresion}/>
        <History history={history}/>
        <Display total={infixExpression} />
        <Keyboard changeDisplay={changeDisplay} />
      </Box>
    </div>
  );
}

export default App;

// adding my branch
