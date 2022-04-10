
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
function solution(s) {
    var answer = 0;
    let lengths = []
    let lengths_len = []
    var i = 0;

    for (i = 1; i < s.length + 1; i++) {

        var j = 0
        var insert = ''
        for (j = 0; j < s.length; j+=i) {
            var temp = 1;
            var k = 0;
            if (s.slice(j, j + i) === s.slice(j + i, j + 2 * i)) {
                for (k = j; k < s.length; k += i) {
                    if (s.slice(k, k + i) === s.slice(k + i, k + 2 * i)) {
                        temp += 1
                        j += i
                    }
                    else {
                        break;
                    }
                }
                insert = `${insert}${temp}${s.slice(j, j + i)}`
            }
                else{
                    insert = `${insert}${s.slice(j,j+i)}`;
                }

            }
            lengths.push(insert)
        }

        for(var z in lengths){
            lengths_len.push(lengths[z].length)
        }


        console.log(lengths_len)
        answer=Math.min.apply(null, lengths_len)
        return answer;
    }