/*const x = 20;
const y = 30;
function multy(x,y){
    //return x+y;
    console.log(x*y)

}
multy(10,23);

let r = multy;
if(r%2==0){
    console.log("짝")
}else{
    console.log("홀")
}*/


// function oddEven(a,b){
//     const res = a+ b;
//     if(res%2==0){
//         console.log("짝수입니다.");
//     }else{console.log("홀수입니다.");}
// }
// oddEven(10,22)

// let oddEven=(a,b) =>{
//     const res =a+ b;
//     if(res%w==0){
//         console.log("짝수입니다.");
//     }else{
//         console.log("홀수입니다.");
//     }
// }


/*let oddEven =function(a,b){
    const res = a +b;
    if(res %2 ==0){
        console.log("짝수입니다.");
    }else{"홀수입니다.;"}
}*/
// function 키워드 : 함수 리터럴은 function 으로 시작한다.
// add(): 함수명 함수명이 없는 경우는 익명함수라 한다.
// (x+y): 매개변수 -
//const는 function과 무관하게 사용할 수 있다.(페이지에서만 관여)

/*var num = 30;
function oddEven(a,b){
    const res = a+b;
    var num = 40;
    if(res%2==0){
        console.log("짝수입니다.")
    }else{
        console.log("홀수입니다.");
    } console.log(num);
}
console.log(num);
oddEven(10,22);*/

// var num2= 10;
// console.log(num2)

// if(1){
//     var num2=11;
//     console.log(num2);
// }
// console.log(num2);

//vqr는 함수 스코프의 적용을 받음
//let은 함수 스코프의 적용을 받음
//함수밖에 쓴 var 변수1과 함수 안에 쓴 var 변수1은 다른 변수이다.
//그러나 if문등 다른 스코프에서는 같은 변수이다.
//모든 스코프 밖에 쓴 let 과 안예 쓴 let은 다른 변수이다

/*var num =10;
function str(){
    var num =20;
    console.log(num);
}
str();
console.log(num);
*/

/*let tv = new Object();
tv.color ="노랑색";
tv.price = "2천만원";
tv.info="function";
tv.info = function(){
    console.log("tv 색상 :" +  this.color);
    console.log("tv 가격 :" + this.price);

}
tv.info();*/

//자동차 객체를 만들고
//검정, 1억, 자동차 객체를 info를 이용해서 출력하라.

/*let car = new Object;
car.color = "검정색";
car.price ="2억";
car.info=function(){
    console.log("자동차 색상:" +" "+this.color);
    console.log("자동차 가격:"+" "+this.price)
}
car.info();
*/

/*const car={
    color: "검정",
    price: "1억",
    info: function(){
        console.log(`자동차생삭:  ${this.color}`);
        console.log(`자동차 가격 : ${this.price}`);
    }
}

car.info();*/