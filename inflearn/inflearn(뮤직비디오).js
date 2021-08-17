function solution(m, songs) {
    let answer;
    let start =Math.max(...songs)
    let fin = songs.reduce(function add(sum, currValue) {
        return sum + currValue;
    }, 0);
    let mid = parseInt((start + fin) / 2)

    while (true) {
        let sum = 0;
        let gae = 0;
        songs.map((number) => {
            sum += number
            if (sum > mid) {
                gae += 1
                sum = number
            }
        })
        if (gae <= m) {
            answer = mid
            fin = mid - 1
            mid = parseInt((start + fin) / 2)
        } else {
            break
        }
    }
    return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
