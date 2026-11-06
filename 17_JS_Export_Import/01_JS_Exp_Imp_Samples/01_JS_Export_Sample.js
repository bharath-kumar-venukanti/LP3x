
/**
 * Add and Subtract two numbers together.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
export let add=(a,b)=>a+b;
export let sub=(a,b)=>a-b;
export const pi=3.14;
/**
 * Multiplies two numbers without export.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of a and b.
 */
let mul=(a,b)=>{
    return a*b;

};

/**
 * Divides two numbers without export.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The quotient of a and b.
 */

function div(a,b){
    if(b===0) throw new Error("Division by zero is not allowed");
    return a/b;
}

//export a list of existing variables at the bottom
export {mul,div};