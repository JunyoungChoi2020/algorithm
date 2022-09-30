function solution(n) {
    var answer = 0;
    let temp = n.toString(3)
    let temp_rev = ''
    for(let i=temp.length-1; i>=0; i--){
        temp_rev += temp[i]
    }
    let temp2 = parseInt(temp_rev, 3)
    return temp2;
}