//Count & Print Element Indices.

let buttons = ['Submit', 'Cancel', 'Reset', 'Export'];
let len=buttons.length;

for(let i=0; i<len; i++){
    let buttonsToPrint=buttons[i];
    let positions=i+1;
    console.log(`Buttons ${positions}: ${buttonsToPrint}`)

}
    
