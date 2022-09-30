function solution(arr, divisor) {
    let result = []
    for(let i=0; i<arr.length; i++){
        let temp = (arr[i]) % (divisor)
        if(temp == 0){
            result.push(arr[i])
        }
    }
    if(result.length == 0){
        result.push(-1)
    }
    
    let result_temp;
    for(let i=0; i<result.length; i++){
        for(let j=0; j<result.length-1; j++){
            if(result[j] > result[j+1]){
                result_temp = result[j+1]
                result[j+1] = result[j]
                result[j] = result_temp
            }
            
        }
    }
    
    var answer = result
    return answer;
}