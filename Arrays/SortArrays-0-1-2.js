/*
https://leetcode.com/problems/sort-colors/description/

Brute Force 

Use normal sorting method as the array only contains 0,1,2

Time Complexity: O(N*logN)
Space Complexity: O(1)

Here using built-in sort method beacuse of bruteforce approach
*/

var sortColors1 = function(nums) {
    return nums.sort();
};


/*
Better Approach by maintaining count of all the 0,1,2 in the array

Time Complexity: O(N) + O(N), First O(N) for counting the number of 0’s, 1’s, 2’s, and second O(N) for placing them correctly in the original array.
Space Complexity: O(1)

*/

var sortColors2 = function(nums) {
    let c0=0,c1=0,c2=0;

    for(let arr of nums){
        if(arr==0)
            c0++;
        else if(arr==1)
            c1++;
        else
            c2++;
    }
    
    for(let i=0;i<c0;i++){
        nums[i]=0;
    }

    for(let i=c0;i<c0+c1;i++){
        nums[i]=1;
    }

    for(let i=c0+c1;i<c0+c1+c2;i++){
        nums[i]=2;
    }
};

/*
Optimal Approach using (3 pointers)
0-> low
1-> mid
2-> high
Time Complexity: O(N) 
Space Complexity: O(1)

*/
var sortColors3 = function(nums) {
    let low = 0, mid = 0, high = nums.length - 1; // 3 pointers

        while (mid <= high) {
            if (nums[mid] == 0) {
                //swap
                let temp = nums[low];
                nums[low]=nums[mid];
                nums[mid]= temp;

                low++;
                mid++;

            } else if (nums[mid] == 1) {
                mid++;

            } else {
                // swap
                let temp = nums[mid];
                nums[mid]= nums[high];
                nums[high]=temp;

                high--;
            }
        }
};

const nums=[2,0,2,1,1,0];
console.log(sortColors1(nums));
sortColors2(nums)
console.log("Result of sortColors2",nums);
sortColors3(nums)
console.log("Result of sortColors3",nums);