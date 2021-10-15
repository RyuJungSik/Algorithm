function solution(s) {
    var answer = s.length;
    let n = s.length
    for (let i = 1; i < parseInt(n / 2) + 1; i++) {
        const mok = parseInt(n / i)
        const nam = n % i
        const chunks = []
        for (let j = 0; j < mok; j++) {
            chunks.push(s.slice(i * j, i * j + i))
        }
        chunks.push(s.slice(n - nam, n))
        let cur = chunks[0]
        let tmp = ""
        let cnt = 1
        for (let j = 1; j < chunks.length; j++) {
            if (cur == chunks[j]) {
                cnt += 1
            } else {
                if (cnt === 1) {
                    tmp += cur
                } else {
                    tmp += String(cnt) + cur
                }
                cnt = 1
                cur = chunks[j]
            }
        }
        tmp += chunks[chunks.length - 1]
        answer = Math.min(tmp.length, answer)
    }
    return answer;
}