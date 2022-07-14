const text = ("gato policía perro gato gato casa perro perro casa perro perro perro policía casa");
const textArray = text.replace(/\s\s+/g,' ').split(' ');
console.log(textArray);

const map = new Map();
const outList = [];

textArray.forEach((word) => {
// 
  map.forEach((value, key) => {
    if (word !== key) {
      map.set(key, value + 1)
    }
  })
// insert in map
  if (!map.has(word)) {
    map.set(word, 0)
    //console.log(word, 0);
  } else { // insert word in outlist != 0
    //console.log(word, map.get(word));
    outList.push({word, distant : map.get(word)})
    map.set(word,0);
  }
  console.log(outList);

});

// //sort array
// wordSortDistant = outList.sort((a,b) => (a-b));

// console.log(wordSortDistant);

function prueba(array){
    textArray.forEach((word) => {
        // 
          map.forEach((value, key) => {
            if (word !== key) {
              map.set(key, value + 1)
            }
          })
        // insert in map
          if (!map.has(word)) {
            map.set(word, 0)
            //console.log(word, 0);
          } else { // insert word in outlist != 0
            //console.log(word, map.get(word));
            outList.push({word, distant : map.get(word)})
            map.set(word,0);
          }
          console.log(outList);
        
        });
}

const arr = [2, 3, 4, 2, 5, 4, 1, 3];
const findDistance = arr => {
   var map = {}, res = {};
   arr.forEach((el, ind) => {
      map[el] = map[el] || [];
      map[el].push(ind);
   });
   Object.keys(map).forEach(el => {
      if (map[el].length > 1) {
         res[el] = Math.min.apply(null, map[el].reduce((acc, val, ind, arr) => {
            ind && acc.push(val - arr[ind - 1]);
            return acc;
         }, []));
      };
   });
   return res;
}
console.log(findDistance(arr));