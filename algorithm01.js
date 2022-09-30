function solution(a, b) {
    var answer;
    let time = 1000 * 60 * 60 * 24
    let val1 = new Date('2016-1-1')
    let val2 = new Date('2016-'+ a+'-'+b)
    let val5 = Math.floor((val2 - val1) / time)
    let val6 = (val5 % 7)
    
    if(val6 == 0){
        answer = "FRI"
    } else if(val6 == 1){
        answer = "SAT"
    } else if(val6 == 2){
        answer = "SUN"
    } else if(val6 == 3){
        answer = "MON"
    } else if(val6 == 4){
        answer = "TUE"
    } else if(val6 == 5){
        answer = "WED"
    } else if(val6 == 6){
        answer = "THU"
    }
    
    return answer;
}