//for(var num = 0; num < 15; num++){
    //console.log(num);
//}
//prediction 0-14

//for(var i = 1; i < 10; i+=2){
    //if(i % 3 == 0){
        //console.log(i);
    //}
//}
// i=1,3,5,7,9
//console.log 3,9

for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}

//j=1,4,5,8,10,11,14,16
//log=1,4,5,8,10,11,14,16