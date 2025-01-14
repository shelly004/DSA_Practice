/*

https://leetcode.com/problems/container-with-most-water/description/

Bruteforce Approach
Time complexity- O(N^2)
Space complexity- O(1);

*/

var maxArea1 = function(height) {
    let max=0;
    const n=height.length;
    for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            let min=Math.min(height[i],height[j]);
            max=Math.max(max,min*(j-i));
        }
    }
    return max;
};

/*

Optimal Approach
Time complexity- O(N)
Space complexity- O(1);
 
Using Two pointer

*/

var maxArea2 = function(height) {
    let max=0;
    let i=0;
    let j=height.length-1;

    while(i<j){
        let min=Math.min(height[i],height[j]);
        max=Math.max(max,min*(j-i));
        if(height[i]<height[j])
            i++;
        else
            j--;
    }
    
    return max;
};

const height=[1,8,6,2,5,4,8,3,7];
console.log("Maximum Area is ",maxArea2(height));