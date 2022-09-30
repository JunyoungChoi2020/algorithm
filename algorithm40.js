function solution(board, moves) {
    var answer = 0;
    let box = [null, ]
    let n = board[0].length
    
    for(let i=0; i<moves.length; i++){
        for(let j=0; j<n; j++){
            if(board[j][moves[i]-1] !== 0){
                console.log(board[j][moves[i]-1])
                box.push(board[j][moves[i]-1])
                board[j][moves[i]-1] = 0
                if(box[box.length-1] == box[box.length-2]){
                    box.pop()
                    box.pop()
                    answer += 2
                }
                break
            }
        }
    }
    return answer;
}