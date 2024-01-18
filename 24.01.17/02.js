// function ten(){
//     for(let i =0 ; i<10; i++){
//         console.log(i);
//     }
// }
// ten();

// let i = 0;

// while(i <=10){
//    console.log(i);
//    i++
// }


let num = 0;
function ten(){
    num ++;
    console.log(num);
    if(num ==10) return;
    ten();
}
ten();

