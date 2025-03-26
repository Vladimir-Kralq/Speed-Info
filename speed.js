function realNum (input){
let recieveSpeed= Number(input[0]);

if(recieveSpeed <=10){
console.log("slow");
}

else if (recieveSpeed > 10 && recieveSpeed <=50){
    console.log("average");
}
else if(recieveSpeed > 50 && recieveSpeed <= 150 ){
    console.log("fast")
}

else if(recieveSpeed > 150 && recieveSpeed <= 1000){
    console.log("ultra fast")
}

else{
    console.log("extremely fast")
}


}




realNum(["3500"])