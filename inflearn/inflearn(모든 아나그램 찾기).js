
function solution(s, t) {
    let answer = 0;
    var n1 = s.length;
    var n2 = t.length;

    var p1 = 0, p2 = 0;
    let sH2 = new Map();


    for (let j of t) {
        if (sH2.has(j)) sH2.set(j, sH2.get(j) + 1)
        else sH2.set(j, 1)
    }

    for (p1 = 0; p1 < n1 - n2; p1++) {
        let sH1 = new Map();
        let isSame = 1;

        for (let i of s.slice(p1, p1 + n2)) {
            if (sH1.has(i)) sH1.set(i, sH1.get(i) + 1)
            else sH1.set(i, 1)
        }

        

        for (let [key, value] of sH1) {
            if(sH1.size!==sH2.size) isSame=0
            if (sH2.get(key) != value) {
                isSame = 0
            }
        }

        

        if (isSame === 1) {
            answer += 1;
        }


    }

    return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b))
