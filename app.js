let birthday = +prompt("Dogum tarixivizin hansi ay oldugunu reqemle ifade edin");
switch (birthday) {
    case 1:
        console.log("yanvar");
        break;
   
    case 2:
        console.log("fevral");
        break;
   
    case 3:
        console.log("mart");
        break;
   
    case 4:
        console.log("aprel");
        break;
   
    case 5:
        console.log("may");
        break;
   
    case 6:
        console.log("iyun");
        break;
   
    case 7:
        console.log("iyul");
        break;
   
    case 8:
        console.log("avqust");
        break;
   
    case 9:
        console.log("sentyabr");
        break;
   
    case 10:
        console.log("oktyabr");
        break;
   
    case 11:
        console.log("noyabr");
        break;
   
    case 12:
        console.log("dekabr");
        break;
    default:
        console.log("yanlis secim");
    break;
}

let date = prompt("tarix daxil edin, Numune YYYY.MM.DD");
dateIndex = date.split(".");

Number(dateIndex[0]);
Number(dateIndex[1]);
Number(dateIndex[2]);

if(dateIndex[1] == 1 && dateIndex[2]<32){
    console.log(dateIndex[2] + " " + "yanvar" + " " +  dateIndex[0] + " " + "cu il");
}
else if(dateIndex[1] == 2 && dateIndex[2]<32){
    console.log(dateIndex[2] + " " + "fevral" + " " +  dateIndex[0] + " " + "cu il");
}
else if(dateIndex[1] == 3 && dateIndex[2]<32){
    console.log(dateIndex[2] + " " + "mart" + " " +  dateIndex[0] + " " + "cu il");
}
else if(dateIndex[1] == 4 && dateIndex[2]<32){
    console.log(dateIndex[2] + " " + "aprel" + " " +  dateIndex[0] + " " + "cu il");
}
else if(dateIndex[1] == 5 && dateIndex[2]<32){
    console.log(dateIndex[2] + " " + "may" + " " +  dateIndex[0] + " " + "cu il");
}
else if(dateIndex[1] == 6 && dateIndex[2]<32){
    console.log(dateIndex[2] + " " + "iyun" + " " +  dateIndex[0] + " " + "cu il");
}
else if(dateIndex[1] == 7 && dateIndex[2]<32){
    console.log(dateIndex[2] + " " + "iyul" + " " +  dateIndex[0] + " " + "cu il");
}
else if(dateIndex[1] == 8 && dateIndex[2]<32){
    console.log(dateIndex[2] + " " + "avqust" + " " +  dateIndex[0] + " " + "cu il");
}
else if(dateIndex[1] == 9 && dateIndex[2]<32){
    console.log(dateIndex[2] + " " + "sentyabr" + " " +  dateIndex[0] + " " + "cu il");
}
else if(dateIndex[1] == 10 && dateIndex[2]<32){
    console.log(dateIndex[2] + " " + "oktyabr" + " " +  dateIndex[0] + " " + "cu il");
}
else if(dateIndex[1] == 11 && dateIndex[2]<32){
    console.log(dateIndex[2] + " " + "noyabr" + " " +  dateIndex[0] + " " + "cu il");
}
else if(dateIndex[1] == 12 && dateIndex[2]<32){
    console.log(dateIndex[2] + " " + "dekabr" + " " +  dateIndex[0] + " " + "cu il");
}
else {
    console.log("bele secim yoxdur");
}
