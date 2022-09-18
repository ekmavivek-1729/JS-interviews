function fact(n) {
       if(n < 0)
           return -1;
       else if (n == 0)
           return 1;
       else
           return n * fact(n-1);
   }
   
   let res = fact(5);
   
   if(res === -1)
       console.log("factorial is not possible for -ve number");
   else
       console.log(res);