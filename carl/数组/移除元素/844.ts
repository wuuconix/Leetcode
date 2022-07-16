function backspaceCompare(s: string, t: string): boolean {
    function backspace(s: string): string { //返回退格后的字符串
        let sa = [...s]
        let slow = 0, fast = 0
        while (fast < sa.length) {
            if (sa[fast] != "#") {
                sa[slow++] = sa[fast]
            } else {
                slow > 0 && slow--
            }
            fast++
        }
        return sa.slice(0, slow).join("")
    }
    return backspace(s) === backspace(t)
}

let s = "y#fo##f", t = "y#f#o##f"
console.log(backspaceCompare(s, t))