function searchE(nums,target){
       let left=0;
       let right=nums.length-1;

       while(left<=right){
              let mid=Math.floor((left+right)/2);
              
              if(nums[mid]===target){
                     return mid;
              }
              
              // check if the left side is sorted

              if(nums[left]<=nums[mid]){
                     if(nums[left]<=target && target<=nums[mid]){
                            // target is in left
                            right=mid-1;
                     }else{
                            // target is in right
                            left=mid+1;
                     }
              }

              // otherwise right is sorted
              else{
                     if(nums[mid]<=target && target<=nums[right]){
                            // target is in right
                            right=mid+1;
                     }else{
                            // target is in left
                            right=mid-1;
                     }
              }


       }
       return -1;
}

let nums=[3,4,5,6,7,1,2];
let target=1;

console.log(searchE(nums,target));