function solution(s) {
    var answer = '';
    let min
    let max
    
    s.split(" ").map((v, i) => {
        v = Number(v)
        if(i == 0){
            min = v
            max = v
        } else {
            if(v < min){
                min = v
            }
            if(v > max){
                max = v
            }
        }
    })
    answer = min + " " + max
    return answer;
}