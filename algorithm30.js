function divisor_list(n){
    let res = []
    for(let i =1; i<=n; i++){
        if(n%i === 0){
            res.push(i)
        }
    }
    return res
}

function solution(n) {
    return answer=divisor_list(n-1)[1];
}