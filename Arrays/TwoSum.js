/*

https://leetcode.com/problems/two-sum/description/

Bruteforce Approach
Time complexity- O(N^2)
Space complexity- O(1);

*/

var twoSum1 = function(nums, target) {
    let ans=[];
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                ans.push(i);
                ans.push(j);
                return ans;
            }
        }
    }
    return [];
};

/*

Better Approch (Using hashing)
TC- O(N);
SC- O(N);

*/

var twoSum2=function(nums,target){
    let map=new Map();
    let n=nums.length;
    for(let i=0;i<n;i++){
        let curr=target-nums[i];
        if(map.has(curr)){
            return [map.get(curr),i];
        }
        map.set(nums[i],i);
    }
    return [];
};

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum1([3,2,4],6));
console.log(twoSum2(nums,target));