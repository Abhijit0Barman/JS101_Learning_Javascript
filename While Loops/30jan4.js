let i=1,even=0,count=0;
while(i<=100){
  if(i%2==0){even+=i;count++;}
  i++;
}
console.log("Sum of Even No = "+even+"\nTotal Even No = "+count+"\nAverage of Even no is = "+even/count);