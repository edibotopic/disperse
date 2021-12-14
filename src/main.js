// let document;

import { makeEmojiFormula } from "./emojify.js";

//create an array of phases (will give user option to expand)

const phases = ['G','O','W','S'];

//create an array of connectives (will give user option to expand)

const connects = ['/','@','×','σ','+'];

//generate random integer
function rndInt(max){
    return Math.floor(Math.random()*max);
};

//inputs for random number generators
let empty = [];
let max_p1 = phases.length;
let max_c1 = connects.length;

//function to create binary DSF formula with infix notation
function makeBinaryFormula(count = 3){
    while(empty.length<count){
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

document.getElementById("emoji_generator").addEventListener("click", function() {
    document.getElementById("emoji_formula").innerHTML = makeEmojiFormula()+"<br>";
}
);