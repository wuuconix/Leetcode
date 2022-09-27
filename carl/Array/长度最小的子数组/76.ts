function minWindow(s: string, t: string): string {
    let left = 0, targetMap = new Map(), map = new Map(), res = s + " "
    for (let i = 0; i < t.length; i++) { //统计t中各个字符的个数
        targetMap.set(t[i], (targetMap.get(t[i]) ?? 0) + 1)
    }
    for (let right = 0; right < s.length; right++) { //滑动窗口右边界
        map.set(s[right], (map.get(s[right]) ?? 0) + 1)
        while (judge(targetMap, map)) {
            res = (right - left + 1 < res.length) ? s.slice(left, right + 1) : res
            map.set(s[left], map.get(s[left]) - 1)
            left++
        }
    }
    return res == s + " " ? "" : res
}

function judge(targetMap: Map<string, number>, map: Map<string, number>): boolean {
    for (let key of targetMap.keys()) {
        // @ts-ignore
        if (targetMap.get(key) > (map.get(key) ?? 0)) {
            return false
        }
    }
    return true
}

let s = "a", t = "aa"
console.log(minWindow(s, t))