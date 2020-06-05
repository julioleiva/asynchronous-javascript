function getOperandSlow(max) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * Math.floor(max)));
        }, 3 * 1000);
    });
}

export async function sumTwoNumbersSlow() {
    console.clear();
    console.time('Time elapsed');
  
    const operand1 = await getOperandSlow(5);
    const operand2 = await getOperandSlow(10);
  
    const sum = operand1 + operand2;
  
    console.log('First operand: ' + operand1);
    console.log('Second operand: ' + operand2);
    console.log('Sum: ' + sum);
  
    console.timeEnd('Time elapsed');
}
 
export async function sumTwoNumbersFaster() {
    console.clear();
    console.time('Time elapsed');
  
    const operand1Promise = getOperandSlow(5);
    const operand2Promise = getOperandSlow(10);
    const operand1 = await operand1Promise;
    const operand2 = await operand2Promise;
    const sum = operand1 + operand2;
    console.log('First operand: ' + operand1);
    console.log('Second operand: ' + operand2);
    console.log('Sum: ' + sum);
  
    console.timeEnd('Time elapsed');
}
 