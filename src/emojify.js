//generate emoji based on binay formula
//todo: add more to this list
export function makeEmojiFormula(){
    if (document.getElementById("binary_generator").innerHTML==('')){
        return('');
    } else if (document.getElementById("binary_formula").innerHTML==('G / G')){
        return('π³');
    } else if (document.getElementById("binary_formula").innerHTML==('G / O')) {
        return('βββ');
    } else if (document.getElementById("binary_formula").innerHTML==('G / W')) {
        return('πΊ');
    } else if (document.getElementById("binary_formula").innerHTML==('G / S')) {
        return('π');
    } else if (document.getElementById("binary_formula").innerHTML==('O / G')) {
        return('βββ');
    } else if (document.getElementById("binary_formula").innerHTML==('O / O')) {
        return('π’οΈ');
    } else if (document.getElementById("binary_formula").innerHTML==('O / S')) {
        return('βββ');
    } else if (document.getElementById("binary_formula").innerHTML==('O / W')) {
        return('π₯');
    } else if (document.getElementById("binary_formula").innerHTML==('W / G')) {
        return('π¦');
    } else if (document.getElementById("binary_formula").innerHTML==('W / O')) {
        return('π§');
    } else if (document.getElementById("binary_formula").innerHTML==('W / W')) {
        return('π·');
    } else if (document.getElementById("binary_formula").innerHTML==('W / S')) {
        return('π§');
    } else if (document.getElementById("binary_formula").innerHTML==('S / G')) {
        return('π§');
    } else if (document.getElementById("binary_formula").innerHTML==('S / O')) {
        return('πΊππ₯');
    }  else if (document.getElementById("binary_formula").innerHTML==('S / W')) {
        return('π§');
    }  else if (document.getElementById("binary_formula").innerHTML==('S / S')) {
        return('πͺ');
    }  else {return('βββ');
}
};