// function combination(arr, num){
//     let res = []
//     if(num === 1){return arr.map((v) => [v])}
    
//     arr.forEach((e, i, arr) => {
//         let comb = combination(arr.slice(i+1), num-1);
//         res.push(...comb.map((v) => [e, ...v]));
//     })
//     return res
// }

// function solution(d, budget) {
//     var answer = 0;
//     for(let i=1; i<=d.length; i++){
//         combination(d, i).map((val) => {
//             let temp = val.reduce((s,c) =>s+c)
//             if(temp <= budget && answer < i){answer = i}
//         })    
//     }
//     return answer;
// }

function solution(d, budget) {
    let answer = 0
    d = d.sort((a, b) => a - b)
    let sum = 0
    for(let i = 0; i<d.length; i++) {
        if(sum + d[i] <= budget){
            sum += d[i]
            answer = i+1
        } else {
            break
        }
    }
    
    return answer
}