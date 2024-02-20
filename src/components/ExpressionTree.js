class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const buildExpressionTree = (postfixExpression) => {
  const stack = [];

  for (let token of postfixExpression) {
    if (isOperator(token)) {
      const right = stack.pop();
      const left = stack.pop();

      const operatorNode = new TreeNode(token);
      operatorNode.left = left;
      operatorNode.right = right;

      stack.push(operatorNode);
    } else {
      stack.push(new TreeNode(token));
    }
    console.log("Tree", stack);
  }
  return stack.pop();
};

const evaluateExpressionTree = (root) => {
  if (!root) return 0;

  if (!root.left && !root.rigth) {
    return parseFloat(root.value);
  }

  const leftValue = evaluateExpressionTree(root.left);
  const rightValue = evaluateExpressionTree(root.right);

  switch (root.value) {
    case "+":
      return leftValue + rightValue;
    case "-":
      return leftValue - rightValue;
    case "*":
      return leftValue * rightValue;
    case "/":
      return leftValue / rightValue;
    case "^":
      return Math.pow(leftValue, rightValue);
    case "#":
      return Math.sqrt(rightValue);
    case "@":
      return  leftValue % rightValue;
    case "%":
      return leftValue/rightValue;
    default:
      return 0;
  }
};

const isOperator = (token) => {
  // Check if the token is one of the supported operators
  return ["+", "-", "*", "/", "^", "#", "@", "%"].includes(token);
};

const isOperand = (token) => {
  //Check if token is a numeric value
  return !isNaN(parseFloat(token)) && isFinite(token);
};

const getPrecedence = (operator) => {
  // Assign precedence values to operators
  switch (operator) {
    case "+":
    case "-":
      return 1;
    case "*":
    case "/":
    case "@":
      return 2;
    case "^":
    case "#":
      return 3;
    case "%":
      return 4;
    default:
      return 0; //For parentheses or unknown operators
  }
};

const infixToPostfix = (infixExpression) => {
  //Shunting Yard algorithm
  const output = [];
  const operatorStack = [];

  for (let token of infixExpression) {
    if (isOperand(token)) {
      output.push(token);
    } else if (isOperator(token)) {
      while (
        operatorStack.length > 0 &&
        getPrecedence(operatorStack[operatorStack.length - 1]) >=
          getPrecedence(token)
      ) {
        output.push(operatorStack.pop());
      }
      operatorStack.push(token);
    } else if (token === "(") {
      operatorStack.push(token);
    } else if (token === ")") {
      while (
        operatorStack.length > 0 &&
        operatorStack[operatorStack.length - 1] !== "("
      ) {
        output.push(operatorStack.pop());
      }
      operatorStack.pop(); // Discard the '('
    }
  }

  while (operatorStack.length > 0) {
    output.push(operatorStack.pop());
  }

  return output;
};

//const infixExpression = "(2x3)/(3+3^2)";
// const infixExpression = "07-5*4";

// const infixTokens = infixExpression.split(/([()+\-*/^%#@])/).filter(Boolean);
// console.log(infixTokens);
// const postfixExpression = infixToPostfix(infixTokens);
// const expressionTree = buildExpressionTree(postfixExpression);
// const result = evaluateExpressionTree(expressionTree);

// console.log(`Infix Expression: ${infixExpression}`);
// console.log(`Postfix Expression: ${postfixExpression.join(" ")}`);
// console.log(`Result: ${result}`);

export {infixToPostfix, buildExpressionTree, evaluateExpressionTree};