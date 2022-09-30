function solution(num) {
    var answer = 0;
    let mynum = num;
    
    if(num === 1){
        answer = 0
    } else {
        let counter = 0
        
        while(counter <= 500 && mynum !== 1){
            if(mynum%2 === 0){
                mynum = mynum / 2
            } else {
                mynum = mynum * 3 + 1
            }
            counter += 1
        }
        
        if(counter === 501){
            answer = -1
        } else {
            answer = counter
        }
    }
    return answer;
}