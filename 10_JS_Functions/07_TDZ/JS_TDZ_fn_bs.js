//let vs. var Scope Separation Challenge

let a=10;

function testScore() {
        if (true) {
            let a=20;
            var b=30;
            //console.log(a)
        }
        //let is block-scoped with variable name a.
        //a=20 will not leak outside, only inside that specific block.
        console.log(a);
        //variables declared with var are function-scoped with variable name b.
        //variable b leaks out of the if block and is accessible anywhere inside testScope.
        console.log(b);
}

testScore();