function majorityElement(nums: number[]): number {
    let hashTable: Map<number, number> = new Map() //统计每个数字的数量
    for (let num of nums) {
        if (!hashTable.has(num))
            hashTable.set(num, 0)
        else {
            hashTable.set(num, hashTable.get(num) + 1) //个数加一
            if (hashTable.get(num) > nums.length / 2)
                return num
        }
    }
};

console.log(majorityElement([1, 1, 2]));
