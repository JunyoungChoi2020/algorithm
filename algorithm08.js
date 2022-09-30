function solution(n) {
    var answer = 0;
    let temp = String(n)
    let temp_list = []
    let temp_val = '';
    for(let i=0; i<temp.length; i++){
        temp_list.push(Number(temp[i]))
    }
    
    answer = temp_list.sort(function(a,b){
        if(a < b) return 1;
        if(a == b) return 0;
        if(a > b) return -1;
    })
    
    for(let i=0; i<answer.length; i++){
        temp_val += answer[i]
    }
    
    return Number(temp_val);
}