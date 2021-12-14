// let document;

//create an array of phases (will give user option to expand)

const phases_t = ['G','O','W','S'];

//create an array of connectives (will give user option to expand)

const connects_t = ['/','@','×','σ','+'];

//generate random integer
function rndInt(max){
    return Math.floor(Math.random()*max);
};

//inputs for random number generators
let empty_t = [];
let max_p1_t = phases_t.length;
let max_c1_t = connects_t.length;
let max_p2_t = phases_t.length;
let max_c2_t = connects_t.length;

//function to create ternary DSF formula with infix notation
function makeTernaryFormula(count = 2){
    while(empty_t.length<count){
        let operand_left1 = phases_t[rndInt(max_p1_t)];
        let operand_right1 = phases_t[rndInt(max_p1_t)];
        let connective_infix1 = connects_t[rndInt(max_c1_t)];
        let operand_left2 = phases_t[rndInt(max_p2_t)];
        let operand_right2 = phases_t[rndInt(max_p2_t)];
        let connective_infix2 = connects_t[rndInt(max_p2_t)];
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

function infix(polysem) {
    var p = polysem.split(' ');
    var operators = [];
    var operands = [];
    var symbols = ['/','@','×','σ','+'];

    for (var i = 0; i < p.length; i++) {
        if(symbols.includes(p[i])) {
            operators.push(p[i]);
        } else {
            operands.push(p[i]);
        }
    }
    var final = operators.join(' ') +' ' +operands.join(' ');
    return final;

};

document.getElementById("disambiguator").addEventListener("click", function() {
    let ambig = document.getElementById("ternary_formula").innerHTML;
    document.getElementById("disambiguated").innerHTML = infix(ambig);
}
);