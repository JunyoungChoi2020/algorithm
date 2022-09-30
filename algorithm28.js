function divisor_list(n){
    let res = []
    for(let i =1; i<=n; i++){
        if(n%i === 0){
            res.push(i)
        }
    }
    return res
}

function solution(n, m) {
    var answer = [];
    // 최소공약수 구하기 => 두 수의 약수 중 동일한 것 중 가장 큰 수
    let n_divList = divisor_list(n)
    let m_divList = divisor_list(m)
    let val_list = [];
    for(let i=0; i<m_divList.length; i++){
        let temp = (n_divList.filter(v => v === m_divList[i]))
        if(temp[0] !== undefined){
            val_list.push(temp[0])
        }
    }
    answer.push(val_list[val_list.length-1])
    
    // 최대공배수 구하기 => 두 수의 약수의 곱으로 나타낼 수 있는 수 중 공통되는 가장 작은 수
    let maxnum = [];
    for(let i=0; i<m_divList.length; i++){
        for(let j=0; j<n_divList.length; j++){
            let temp_val = m_divList[i] * n_divList[j]
            if(temp_val%n === 0 && temp_val%m === 0){
                maxnum.push(temp_val)
            }
        }
    }
    answer.push(maxnum[0])
    return answer;
}