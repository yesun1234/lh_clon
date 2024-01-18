function num(x,y){
    if(x===y){
        return  (x + y)*3;
        
    } else{
        return  x + y;
       
    }
 }  console.log(num(3,3))

 function numm(i){
    if(i<19){
        return (i -19)*3;
    }else{
        return i-19;
    }
 }

 console.log(numm(18));

 function nummm(x,y){
    if((x==50||y==50) || (x+y==50)){
        return true;
    }else{
        return false;
    }
 }
 console.log(nummm(25,25));
 console.log(nummm(50,10));
 console.log(nummm(10,10));

 