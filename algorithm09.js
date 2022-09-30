function solution(n) {
    var answer = 0;
    
    if(Math.sqrt(n)%1 !== 0){
        answer = -1
    } else {
        answer = (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1)
    }
    return answer;
}