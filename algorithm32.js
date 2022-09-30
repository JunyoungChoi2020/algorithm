function solution(N, stages) {
    var answer = [];
    let [cleared, reached] = [new Array(N).fill(0), new Array(N).fill(0)]
    stages.map(v => {
        if(v === N+1){
            for(let i=0; i< v-1; i++){
                reached[i] += 1
                cleared[i] += 1
            }
        } else {
            for(let i=0; i< v; i++){
                reached[i] += 1
            }
            for(let i=0; i< v-1; i++){
                cleared[i] += 1
            }
        }
    })
    
    let failure = cleared.map((v, i) => (reached[i]-v)/reached[i])
    let seq_arr = Array.from({length: N}, (_,i)=>i+1)
    let res = new Map()
    for(let i=0; i<failure.length; i++){
        res.set(seq_arr[i], failure[i])
    }
    answer = [...new Map([...res].sort((a, b) => b[1]-a[1])).keys()]
    
    return answer;
}