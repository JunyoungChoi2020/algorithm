function solution(x) {
    var answer = true;
    let temp = String(x)
    let temp_num = 0
    for(let i=0; i<temp.length; i++){
        temp_num += Number(temp[i])
    }
    if(x % temp_num === 0){
        answer = true
    } else {
        answer = false
    }
    return answer;
}