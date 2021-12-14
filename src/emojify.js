//generate emoji based on binay formula
//todo: add more to this list
export function makeEmojiFormula(){
    if (document.getElementById("binary_generator").innerHTML==('')){
        return('');
    } else if (document.getElementById("binary_formula").innerHTML==('G / G')){
        return('🔳');
    } else if (document.getElementById("binary_formula").innerHTML==('G / O')) {
        return('❔❔❔');
    } else if (document.getElementById("binary_formula").innerHTML==('G / W')) {
        return('🍺');
    } else if (document.getElementById("binary_formula").innerHTML==('G / S')) {
        return('🍞');
    } else if (document.getElementById("binary_formula").innerHTML==('O / G')) {
        return('❔❔❔');
    } else if (document.getElementById("binary_formula").innerHTML==('O / O')) {
        return('🛢️');
    } else if (document.getElementById("binary_formula").innerHTML==('O / S')) {
        return('❔❔❔');
    } else if (document.getElementById("binary_formula").innerHTML==('O / W')) {
        return('🥛');
    } else if (document.getElementById("binary_formula").innerHTML==('W / G')) {
        return('💦');
    } else if (document.getElementById("binary_formula").innerHTML==('W / O')) {
        return('🧈');
    } else if (document.getElementById("binary_formula").innerHTML==('W / W')) {
        return('🍷');
    } else if (document.getElementById("binary_formula").innerHTML==('W / S')) {
        return('🧀');
    } else if (document.getElementById("binary_formula").innerHTML==('S / G')) {
        return('🧂');
    } else if (document.getElementById("binary_formula").innerHTML==('S / O')) {
        return('🏺👉🥗');
    }  else if (document.getElementById("binary_formula").innerHTML==('S / W')) {
        return('🧃');
    }  else if (document.getElementById("binary_formula").innerHTML==('S / S')) {
        return('🍪');
    }  else {return('❔❔❔');
}
};