function solution(answers) {
    var answer = [];
    let rule1 = [1, 2, 3, 4, 5]
    let rule2 = [1, 3, 4, 5]
    let rule3 = [3, 1, 2, 4, 5]
    let player1 = []
    let player2 = []
    let player3 = []
    let counter1 = 0
    let counter2 = 0
    let counter3 = 0
    let score = [0, 0, 0]
    
    for(let i=0; i<answers.length; i++){
        player1.push(rule1[i%5])
        
        if(i%2 == 0){
            player2.push(2)
        } else {
            player2.push(rule2[counter3%4])
            counter3 += 1
            
        }
        
        if(i%2 == 0){
            player3.push(rule3[counter1%5])
            counter1 += 1
        } else {
            player3.push(rule3[counter2%5])
            counter2 += 1
        }
    }
    // console.log(player2) 
    for(let i=0; i<answers.length; i++){
        if(answers[i] == player1[i]){
            score[0] += 1
        }
        if(answers[i] == player2[i]){
            score[1] += 1
        }
        if(answers[i] == player3[i]){
            score[2] += 1
        }
    }
    console.log(score)
    let val = score.map(c => c == Math.max(...score))
    
    for(let i=0; i< val.length; i++){
        let temp = val.indexOf(true, i)
        if(temp != -1){
            answer.push(temp+1)
            i = val.indexOf(true, i)    
        } else {
            break
        }
    }
    if(answer[answer.length-1] == -1){answer.splice(answer.length-1, 1)}
    return answer;
}