let n=12;//7;
let i=1;
while(i<=n){
  if((i%5==0)&&(i&7==0)){console.log("Masai School");}
  else if(i%7==0){console.log("Masai");}
  else if(i%5==0){console.log("School");}
  else{console.log("Hurray!");}
  i++;
}