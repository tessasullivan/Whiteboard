// Function takes an array of integers and returns the number of pairs 
// in the array.  Input [1,2,2,2,1,1,1,4] should return 2

function countPairs(arr) {
  let output=0;
  let dict = {};
  for (let i=0; i < arr.length; i++){
    if (!(arr[i] in dict)){
      dict[arr[i]] = 1;
    } else {
      dict[arr[i]]+=1;
    }
  }
  for (let key in dict){
    output+=Math.floor(dict[key]/2);
  }
  console.log(output);
}