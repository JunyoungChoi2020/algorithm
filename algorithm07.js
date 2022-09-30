function solution(n) {
    var answer = [];
    let temp = String(n)
    for(let str of temp){
        answer.unshift(Number(str))
    }
    return answer;
}