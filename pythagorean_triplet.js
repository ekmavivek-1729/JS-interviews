function pythagorean(nums){
       let n=nums.length;
       let a,b,c;
       for(let i=0;i<n;i++){
              for(let j=i+1;j<n;j++){
                     for(let k=j+1;k<n;k++){
                            a=nums[i]*nums[i];
                            b=nums[j]*nums[j];
                            c=nums[k]*nums[k];
                            if(a+b===c){
                                   console.log(nums[i]+" "+nums[j]+" "+nums[k]);
                            }
                     }
              }
       }

}
let nums=[3, 4, 6, 5, 7, 8];
pythagorean(nums);