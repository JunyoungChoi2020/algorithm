function solution(s) {
    var answer = [];
    let matching = new Map([
        ['zero', 0],
        ['one', 1],
        ['two', 2],
        ['three', 3],
        ['four', 4],
        ['five', 5],
        ['six', 6],
        ['seven', 7],
        ['eight', 8],
        ['nine', 9],
    ])
    let str_list = []
    let num_list = []
    let temp = []
    let splited = s.split("")
    for(let i=0; i<splited.length; i++){
        if(matching.has(temp)){
            answer += matching.get(temp)
            temp = []
        }
        
        if(isNaN(splited[i])){
            temp += splited[i]
        } else {
            answer += splited[i]
        }
    }
    if(matching.has(temp)){
            answer += matching.get(temp)
            temp = []
        }
    
    return Number(answer);
}