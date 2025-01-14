/*

https://leetcode.com/problems/trapping-rain-water/description/

Bruteforce Approach
Time complexity- O(N)
Space complexity- O(N)+O(N);

*/

var trap = function(height) {
    let preMax=[],suffMax=[];
    let n=height.length;
    preMax[0]=height[0];
    suffMax[n-1]=height[n-1];
    let ans=0;
    for(let i=1;i<n;i++){
        preMax[i]=Math.max(height[i],preMax[i-1]);
    }

    for(let j=n-2;j>=0;j--){
        suffMax[j]=Math.max(height[j],suffMax[j+1]);
    }

    for(let i=0;i<n;i++){
        if(height[i]<preMax[i] && height[i]<suffMax[i]){
            ans+=(Math.min(preMax[i],suffMax[i])-height[i]);
            
        }
        //console.log(ans);
    }
    return ans;
};
