const fs = require('fs');

//Helpers
const textMap = new Map (); //Data will be saved here
const outputList = []; 

function distanceBetweenWords (array) {
    array.forEach((word) => {
        // 
        textMap.forEach((value, key) => {
            if(key !== word){
                value = value + 1;
                textMap.set(key, value);
            }
        })
        //Adds word and value to textMap
        if (!textMap.has(word)){
            textMap.set(word , 0);
        }
        else {
            outputList.push({word, distance : textMap.get(word)});
            textMap.set(word,0);
        }
    })
}


const main = () => {

    const allFileContents = fs.readFileSync('./textoprueba.txt', 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line =>  {
        const text = line;
        const textFixed = text.trimStart().trimEnd().toLowerCase();  //Remove white spaces at the start and the end of string and applies lower case.
        const textArray = textFixed.replace(/\s\s+/g,' ').split(' '); //Replaces multiple spaces inside string and convert it into array of strings.
        distanceBetweenWords(textArray);    
    });
    
    wordSortDistant = outputList.sort((a,b) => (a.distance > b.distance ? -1 : 1))[0];
    console.log( "Resultado: ", wordSortDistant);
    //

}    

main()