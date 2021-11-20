//******************************************/
// ©2021, Shane V. Crowley (under MIT license) 
//******************************************/

// todo: improve naming of variables and functions

// let document;

//create an array of the phases
phases = ['G','O','W','S'];
for(p=0;p<phases.length;p++){
    console.log(phases[p]);
};
//create an array of connectives
connects = ['/','@','×','σ','+'];
for(c=0;c<(phases.length+1);c++){
    console.log(connects[c]);
};
//generate random integer between 0 and 5
let max = 5;
function rndInt(max){
    return Math.floor(Math.random()*max);
};

//access random element of arrays
let pickLeft = phases[rndInt(max)];
let pickRight = phases[rndInt(max)];
let pickMiddle = connects[rndInt(max)];

//******************************************/

//create a number of random atoms
let many = [];
let atom_number = 4;
let atom_number_c = 5;

function giveMeThings(count = 3){
    while(many.length<count){
        let pickLeft = phases[rndInt(atom_number)];
        let pickRight = phases[rndInt(atom_number)];
        let pickMiddle = connects[rndInt(atom_number_c)];
        let atom_multi = (pickLeft + " " + pickMiddle + " " + pickRight);

        return atom_multi;
    }
};

//access DOM element and inject random binary formula returned from function
document.getElementById("rndButton1").addEventListener("click", function() {
    document.getElementById("rnd2").innerHTML = giveMeThings();
}
);

let atom_number_2 = 4;
let atom_number_c2 = 5;

function giveMeMoreThings(count = 2){
    while(many.length<count){
        let pickLeft1 = phases[rndInt(atom_number)];
        let pickRight1 = phases[rndInt(atom_number)];
        let pickMiddle1 = connects[rndInt(atom_number_c)];
        let pickLeft2 = phases[rndInt(atom_number_2)];
        let pickRight2 = phases[rndInt(atom_number_2)];
        let pickMiddle2 = connects[rndInt(atom_number_2)];
        let atom_multi = (pickLeft1 + " " + pickMiddle1 + " " + pickRight1);
        let atom_Left = (pickLeft2 + " " + pickMiddle2 + " ");
        let atom_Right = (" " + pickRight2 + " " + pickMiddle2);

        return ((atom_Left + atom_multi) || (atom_multi + atom_Right));
    }
};

//access DOM element and inject random ternary formula returned from function
document.getElementById("rndButton2").addEventListener("click", function() {

    document.getElementById("rnd3").innerHTML = giveMeMoreThings();
}
);

//********************************************************/
