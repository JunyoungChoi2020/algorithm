function solution(numbers) {
    var answer = [];
    let temp = [...numbers]
    let temp1 = []
    let temp2 = []
    for(let i=0; i<numbers.length-1; i++){
        temp1 = temp[i]
        temp2 = temp.slice(i + 1)
        let temp3 = temp2.map(num => {
            return temp1 + num
        })
        
        temp3.map(num => {
            if(!answer.includes(num)){answer.push(num)}
        })
    }
    answer.sort((a, b) => {return a-b})
    return answer;
}