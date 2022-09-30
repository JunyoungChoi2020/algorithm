function solution(arr) {
    var answer = [];
    let temp = [...arr];
    
    if(temp.length !== 1){
        temp.sort(function(a,b){
            return a - b;
        })
        for(let i=0; i<arr.length; i++){
            if(arr[i] === temp[0]){
                arr.splice(i, 1)
                i--;
            }
        }
        answer = arr
    } else {
        answer = [-1]
    }
    return answer;
}