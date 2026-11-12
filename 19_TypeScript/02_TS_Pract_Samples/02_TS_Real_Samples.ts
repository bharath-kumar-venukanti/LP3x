let respondCode: number[]=[200, 201, 500,403, 404, 302]

function getfailedCodes(codes: number[]): number[]{
    return codes.filter(function(code:number):boolean {
        return code>=400
    })
}


// console.log("All Codes:",respondCode);
console.log("Failed Codes:", getfailedCodes(respondCode));

