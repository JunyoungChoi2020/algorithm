function solution(nums) {
    var answer = 0;
    let temp = new Map()
    nums.map((v) => {
        if(!temp.has(v)){temp.set(v, 1)} else {temp.set(v, temp.get(v) + 1)}
    })
    let species = [...temp].length
    let choice_num = nums.length/2
    
    if(species >= choice_num){answer = choice_num} else {answer = species}
    
    return answer;
}