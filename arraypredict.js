/*//var arr = [8, 6, 7, 5, 3, 0, 9]
//for (var i = 0; i < arr.length; i++) {
//console.log(arr[i]);
//} */
//t diagram- i=8, i=6, i=7 i=5, i=3, i=0, i=9
//log- 8, 6, 7, 5, 3, 0, 9

/*var arr = [7, 3, 8, 4, 2, 0, 1];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
    else {
        console.log("That is odd!");
    }
}*/
//t diagram- i=0, i=1
//log-That is odd!, That is odd!, 8, 4, 2, 0, That is odd 

var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";
    }
    else{
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);
//t diagram- i=0 i=1 i=2 i=3 i=4
// newArr- -5, -2, -1
//arr- -1, -3, -8, 5, 'zero', 2, -4, 1
//log^^^^^^