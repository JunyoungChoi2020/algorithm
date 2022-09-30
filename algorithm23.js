function solution(s, n) {
    var answer = '';
    let val;
    let strs = s.split("").map((str)=>{
        val = str.charCodeAt(0);
        
        if(val === 32){
            answer += ' '
        } else if(val >= 97 && val <=122){
            let temp = (val + n)>122 ? 96+(val+n-122) : (val + n)
            answer += String.fromCharCode(temp)
        } else if(val >= 65 && val <= 90){
            let temp = (val + n)>90 ? 64+(val+n-90) : (val + n)
            answer += String.fromCharCode(temp)
        }
        
    })
    return answer;
}