function solution(s) {
    var answer = '';
    let splited = s.split(' ')
    for(let word of splited){
        for(let i=0; i<word.length; i++){
            if((i%2) == 0){
                answer += (word[i].toUpperCase());
            } else {
                answer += word[i].toLowerCase();
            }
        }
        answer += ' '
    }
    answer = answer.slice(0, -1)
    
    return answer;
}