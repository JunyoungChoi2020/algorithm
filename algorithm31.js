function isPrime(n){
    let res = true
    let loofnumber = Math.sqrt(n)
    if(loofnumber < 2){
        return true
    }
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i === 0){
            res = false
            return res
        }
    }
    return res
}
function solution(n) {
    var answer = 0;
    for(let i=2; i<=n; i++){
        if(isPrime(i)){
            answer += 1
        }
    }
    return answer;
}