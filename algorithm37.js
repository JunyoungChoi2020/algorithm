function solution(dartResult) {
    var answer = 0;
    let div_list = [];
    let bef = 0
    let temp = ''
    dartResult.split("").map((v, i) => {
        if(!isNaN(v) && isNaN(bef)){
            div_list.push(temp)
            temp = v
            bef = v
        } else {
            temp += v
            bef = v
        }
    })
    div_list.push(temp)
    let res = []
    for(let i=0; i<div_list.length; i++){
        let num = ''
        let pow = 0
        let spc = 1
        div_list[i].split("").map((v, j) => {
            if(!isNaN(v)){
                num += v
            } else {
                if(v === "S"){pow = 1}
                if(v === "D"){pow = 2}
                if(v === "T"){pow = 3}
                if(v === "*"){
                    spc = spc * 2
                    if(i !== 0){
                        res[i-1] = res[i-1] * 2
                    }
                }
                if(v === "#"){spc = -1}
            }
        })
        res.push(Number(num) ** pow * spc)
    }
    answer=(res.reduce((e, c) => e + c))
    return answer;
}