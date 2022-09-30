function solution(array, commands) {
    var answer = [];
    for(let i=0; i<commands.length; i++){
        let c1 = commands[i][0]
        let c2 = commands[i][1]
        let c3 = commands[i][2]
        let val = array.slice(c1-1, c2).sort((a, b)=>a-b)[c3-1]
        answer.push(val)
    }
    
    return answer;
}