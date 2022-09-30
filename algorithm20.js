function solution(s) {
    // 잘게 쪼개는 우아한 방법은? ㅋㅋ
    let answer = '';
    let small_chars_list = []
    let big_chars_list = []
    
    for(let i=0; i<s.length; i++){
        if(s[i] === s[i].toUpperCase()){
            big_chars_list.push(s[i])
        } else if (s[i] === s[i].toLowerCase()){
            small_chars_list.push(s[i])
        }
    }
    let sorted_small = small_chars_list.sort((a, b) => {
        return b.localeCompare(a)
    }).map(mychar => {answer += mychar})
    let sorted_big = big_chars_list.sort((a, b) => {
        return b.localeCompare(a)
    }).map(mychar => {answer += mychar})
    
    
    return answer;
}