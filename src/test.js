//******************************************/
// ©2021 edibotopic (MIT license) 
//******************************************/

// let document;

//create an array of phases
phases = ['G','O','W','S'];
for(p=0;p<phases.length;p++){
    console.log("Phases in use:"+""+phases);
};

//create an array of connectives
connects = ['/','@','×','σ','+'];
for(c=0;c<(connects.length);c++){
    console.log("Connectives in use:"+""+connects);
};

//generate random integer between 0 and 5
let max = 5;
function rndInt(max){
    return Math.floor(Math.random()*max);
};

//inputs for random number generators
let many = [];
let max_p1 = 4;
let max_c1 = 5;
let max_p2 = 4;
let max_c2 = 5;

//function to create binary DSF formula with infix notation
function makeBinaryFormula(count = 3){
    while(many.length<count){
        let operand_left1 = phases[rndInt(max_p1)];
        let operand_right1 = phases[rndInt(max_p1)];
        let connective_infix1 = connects[rndInt(max_c1)];
        let formula_binary = (operand_left1 + " " + connective_infix1 + " " + operand_right1);

        return formula_binary;
    }
};

//access DOM element and inject random binary formula returned from function
document.getElementById("binary_generator").addEventListener("click", function() {
    document.getElementById("binary_formula").innerHTML = makeBinaryFormula();
}
);

//function to create ternary DSF formula with infix notation
function makeTernaryFormula(count = 2){
    while(many.length<count){
        let operand_left1 = phases[rndInt(max_p1)];
        let operand_right1 = phases[rndInt(max_p1)];
        let connective_infix1 = connects[rndInt(max_c1)];
        let operand_left2 = phases[rndInt(max_p2)];
        let operand_right2 = phases[rndInt(max_p2)];
        let connective_infix2 = connects[rndInt(max_p2)];
        let formula_binary = (operand_left1 + " " + connective_infix1 + " " + operand_right1);
        let formula_ternary_left = (operand_left2 + " " + connective_infix2 + " ");
        let formula_ternary_right = (" " + operand_right2 + " " + connective_infix2);

        return ((formula_ternary_left + formula_binary) || (formula_binary + formula_ternary_right));
    }
};

//access DOM element and inject random ternary formula returned from function
document.getElementById("ternary_generator").addEventListener("click", function() {
    document.getElementById("ternary_formula").innerHTML = makeTernaryFormula();
}
);

//todo: create infix -> postfix converter

//todo: add quaternary generator

//todo: generate relevant food emoji per formula 🍧

//********************************************************/
