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
        let formula_binary = (operand_left1 + "" + connective_infix1 + "" + operand_right1);
        let formula_ternary_left = (operand_left2 + "" + connective_infix2 + "");
        let formula_ternary_right = ("" + operand_right2 + "" + connective_infix2);

        return ((formula_ternary_left + formula_binary) || (formula_binary + formula_ternary_right));
    }
};

//access DOM element and inject random ternary formula returned from function
document.getElementById("ternary_generator").addEventListener("click", function() {
    document.getElementById("ternary_formula").innerHTML = makeTernaryFormula();
}
);


//naive implementation of disambiguator
// function infix(polysem) {
//     var p = polysem.split(' ');
//     var operators = [];
//     var operands = [];
//     var symbols = ['/','@','×','σ','+'];
//
//     for (var i = 0; i < p.length; i++) {
//         if(symbols.includes(p[i])) {
//             operators.push(p[i]);
//         } else {
//             operands.push(p[i]);
//         }
//     }
//     var final = operators.join(' ') +' ' +operands.join(' ');
//     return final;
//
// };


//Function to read character and return precedence of operator
function prec(c) {
  // if (c == 'P') return 3
  if (c == '/' || c == '@') return 2
  else if (c == '+' || c == '$' || c == '×') return 1
  else return -1
}

// Convert infix to postfix notation given an input string
const infixToPostfix = (s) => {
  let stack = [] //array to implement stack data structure
  let result = ''

// Loop through string
  for (let i = 0; i < s.length; i++) {
    let c = s[i]

    // If character = operand, add to output string
    if (
      (c >= 'a' && c <= 'z') ||
      (c >= 'A' && c <= 'Z') //||
      // (c >= '0' && c <= '9')
    )
      result += c

    //Otherwise if character = operator, position based on precedence
    else {
      while (stack.length != 0 && prec(s[i]) <= prec(stack[stack.length - 1])) {
        result += stack[stack.length - 1]
        stack.pop()
      }
      stack.push(c)
    }
  }

  // Remove all remaining elements from stack
  while (stack.length != 0) {
    result += stack[stack.length - 1]
    stack.pop()
  }

  return result
}

//define expression to convert
// let exp = 'O+S/W'
//define expression that is converted
// let post = infixToPostfix(exp)

document.getElementById("disambiguator").addEventListener("click", function() {
    let ambig = document.getElementById("ternary_formula").innerHTML;
    // document.getElementById("disambiguated").innerHTML = infix(ambig);
    document.getElementById("disambiguated").innerHTML = infixToPostfix(ambig);
}
);
