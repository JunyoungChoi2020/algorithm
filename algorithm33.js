function solution(n, lost, reserve) {
    var answer = 0;
    let numbers = Array.from({length: n}, (_,i)=>i+1)
    let clothes = new Array(n).fill(1)
    
    lost.map((v) => clothes[v-1] -= 1)
    reserve.map((v) => clothes[v-1] += 1)
    
    let temp = 1
    for(let i=0; i<clothes.length; i++){
        if(temp == 0 && clothes[i] == 2){
            clothes[i-1] += 1
            clothes[i] -= 1
        } else if(temp == 2 && clothes[i] == 0){
            clothes[i-1] -= 1
            clothes[i] += 1
        }
        temp = clothes[i]
    }
    
    clothes.map((v) =>{if(v!==0){answer += 1}})

    return answer;
}