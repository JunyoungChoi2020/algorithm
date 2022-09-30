function solution(left, right) {
    var answer = 0;
    let counter;
    for(let i=left; i<=right; i++){
        let half = i/2
        counter = 0
        for(let j=1; j<=half; j++){
            if((i%j)===0){counter += 1}
        }
        if(counter%2 === 1){
            answer += i
        } else {
            answer -= i
        }
    }
    return answer;
}