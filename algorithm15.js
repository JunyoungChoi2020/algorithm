function solution(arr)
{
    var answer = []
    let before = -1
    let value = arr.map(num => {
        if(before !== num){
            answer.push(num)
            before = num
        }
    })
    
    return answer;
}