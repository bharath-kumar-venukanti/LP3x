    // Rules for comparison operators:
    // 1. If both operands are of the same type, compare their values directly.
    // 2. If the operands are of different types, convert them to a common type (type coercion) and then compare.
    // 3. For strict equality (===) and strict inequality (!==), no type conversion is performed; both value and type must match.

    // -------------------------------------------------
    //Empty string vs 0 vs "0"
    //------------------------------------------------- 
    console.log("--------------'=='--------------");
    console.log('"" == 0:', "" == 0);   
    console.log('"" == "0":', "" == "0");   
    console.log('0 == "0":', 0 == "0"); 
    
    
    console.log("--------------'==='--------------");
    console.log('"" === 0:', "" === 0);   
    console.log('"" === "0":', "" === "0");   
    console.log('0 === "0":', 0 === "0");