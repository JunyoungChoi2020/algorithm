function solution(strings, n) {
    var answer = [];
    let values = new Map()
    strings.map((string) =>{
        values.set(string, string[n])
    })
    
    let temp = [...values].sort((a, b)=>{
        let val = a[1].localeCompare(b[1])
        if(val !== 0){
            return a[1].localeCompare(b[1])
        } else {
            return a[0].localeCompare(b[0])
        }
    })
    
    console.log(temp)
    answer = temp.map((string) => {return string[0]})
    return answer;
}