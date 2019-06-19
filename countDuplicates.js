// input is string and function counts the number of characters which have duplicates
// "aabbcddeefe" => 4

// create dictionary, let total = 0
// check if character is in the dictionary, 
// add or increment, if character value is 2, increment total

function countDuplicates (str) {
  let dict = {};
  let total = 0;
  for (let i=0; i < str.length; i++){
    if (str[i] in dict)) {
      dict.i++;
      if (dict.i === 2) {
        total++;
      } else {
        dict.i = 1;
      }
    }
  }
  console.log(total);
}