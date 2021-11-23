//******************************************/
// ©2021 edibotopic (MIT license)
//******************************************/

// let document;

//create an array of phases (will give user option to expand)

phases = ['G','O','W','S'];
// console.log("Phases in use:"+" "+phases);

//create an array of connectives (will give user option to expand)

connects = ['/','@','×','σ','+'];
// console.log("Connectives in use:"+" "+connects);

//list cartesian product of binary pairs (4^2) given relation (R)
// phases_paired = ['G','O','W','S'];

// function pairs(){
//     console.log("Possible binary pairs (4^2):")
//     for (let p=0; p<phases.length;p++){
//         for (let s=0; s<phases_paired.length;s++){
//             console.log(phases[p], phases_paired[s]);
//         }
//     }
// };
// pairs();

//generate random integer
function rndInt(max){
    return Math.floor(Math.random()*max);
};

//inputs for random number generators
let empty = [];
let max_p1 = phases.length;
let max_c1 = connects.length;
let max_p2 = phases.length;
let max_c2 = connects.length;

//function to create binary DSF formula with infix notation
function makeBinaryFormula(count = 3){
    while(empty.length<count){
        let operand_left1 = phases[rndInt(max_p1)];
        let operand_right1 = phases[rndInt(max_p1)];
        let connective_infix1 = connects[rndInt(max_c1)];
        let formula_binary = (operand_left1 + " " + connective_infix1 + " " + operand_right1);

//log milk emoji to console iff emulsion formula is output (this... is the future)
        // if (formula_binary==('O / W')){
        //     console.log('this formula is 🥛')} else {
        //         console.log('this formula is not 🥛');
        //     };

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
    while(empty.length<count){
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

//todo: generate food emoji per binary formula/atom (see notes/dsf_emoji.txt)

//todo: create infix -> postfix converter

//todo: add quaternary generator


//********************************************************/
