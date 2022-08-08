//list cartesian product of binary pairs (4^2) given relation (R)

phases_paired = ['G','O','W','S'];

export function pairs(){
    console.log("Possible binary pairs (4^2):")
    for (let p=0; p<phases.length;p++){
        for (let s=0; s<phases_paired.length;s++){
            console.log(phases[p], phases_paired[s]);
        }
    }
};
