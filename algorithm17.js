function solution(lottos, win_nums) {
    var answer = [];
    let minLevel = 0;
    let maxLevel = 0;
    let zeros = 0;
    
    let value = lottos.map((num) => {
        if(win_nums.includes(num)){minLevel += 1}
        if(num == 0){zeros += 1}
    })
    maxLevel = 7-(minLevel + zeros)
    minLevel = 7 - minLevel
    
    if(minLevel >= 6){
        minLevel = 6
    } 
    if(maxLevel >=6){
        maxLevel = 6
    }
    answer = [maxLevel, minLevel]
    return answer;
}