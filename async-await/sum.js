async function getOperand(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
  
export async function sumTwoNumbers() {
    console.clear();
    const operand1 = await getOperand(5);
    const operand2 = await getOperand(10);
  
    const sum = operand1 + operand2;
  
    console.log('First operand: ' + operand1);
    console.log('Second operand: ' + operand2);
    console.log('Sum: ' + sum);
}
 