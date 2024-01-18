// for(let i=1; i<=100; i++) {
//     if(i %5 == 0 && i % 7 !=0){
//         document.write("<p calss='red'>" + i + "</p>");
//     }else if(i%5!=0 && i%7 ==0){
//         document.write("<p calss='blue'>" + i + "</p>");
//     }else if(1%5==0 && i%7==0){
//         document.write("<p calss='red'>" + i + "</p>");
//     }
// }
// let n = 0;

// for(let i =1; i<=1000; 1++){
//     n= n + i
// }

// for(let i=0; i<=10; i++){
//     if(i==6) break;
//     console.log(i);
// }

// for(let a=0; a<=10; a++){
//     if(a%2==0) continue;
//     console.log(a);
// }

/*let tb ="";
let m=1;
for(let i=0; i<3; i++){
    tb +="<tr>" +i ;
    for(let n=0; n<3; n++){
        tb ="<td>" + m+ "</td>"
        m++ 
    }
    tb+="</tr>"
}
 document.write("<table>"+tb+"</table>")*/

 /*for(a=1; a<=18; a++){
    if(a%2==0)
    console.log(a);
 }
 
 for(b=1; b<=27; b++){
    if(b%3==0)
    console.log(b);
 }
 for(a=2; a<=9; a++){
    if(a%2==0)
    console.log(a);
 }*/ //for(a=1; a<=18; a++){


 for(let m=2; m<=9; m++){
   for(let n=1; n<=9; n++){
     // document.write(m +"X" +n) + "+" +m*n;
      console.log(m +"X" +n +'=' + +m*n);
      
   }
   console.log("");
}