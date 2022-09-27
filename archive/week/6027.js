/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let res = 0
    let pre = 0, cur = 1, next = 2
    while (cur < nums.length - 1) {
        if ((nums[cur] > nums[pre] && nums[cur] < nums[next]) || (nums[cur] < nums[pre] && nums[cur] > nums[next]) || pre < 0) { //直接不是峰和谷
            cur += 1
            pre = cur - 1
            next = cur + 1
        } else if ((nums[cur] < nums[pre] && nums[cur] < nums[next]) || (nums[cur] > nums[pre] && nums[cur] > nums[next])) { //找到一个峰
            cur += 1
            pre = cur - 1
            next = cur + 1
            res += 1
        } else if (nums[cur] == nums[pre] && nums[cur] != nums[next]) {
            pre -= 1
        } else if (nums[cur] != nums[pre] && nums[cur] == nums[next]) { //遇到相等的
            cur += 1
            next += 1
        } else if (nums[cur] == nums[pre] && nums[cur] == nums[next]) {
            cur += 1
            pre = cur - 1
            next = cur + 1
        }
    }
    return res
};

let nums = [21,21,21,2,2,2,2,21,21,45]
console.log(countHillValley(nums));