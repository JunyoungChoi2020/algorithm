function solution(n) {
    var answer = 0;
    // m -> 시작 number, j => 몇개의 연속된 자연수인지
    // sum = m * j + j * (j-1)/2. m을 미지수로 두는게 연산량이 적음.
    let j = 1
    while(true){
        let m = (n - (j * (j - 1)/2))/j
        
        if(m < 1){break}
        
        if(m % 1 !== 0){
            j++
            continue
        } else {
            j++
            answer += 1
        }
        
    }
    return answer;
}