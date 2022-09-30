function solution(n, arr1, arr2) {
    var answer = [];
    let map = []
    for(let i=0; i<n; i++){
        let temp1 = arr1[i].toString(2)
        let temp2 = arr2[i].toString(2)
        
        if(temp1.length < n){
            for(let j=0; j<n; j++){
                temp1 = "0" + temp1
                if(temp1.length == n){break}
            }
        }
        if(temp2.length < n){
            for(let j=0; j<n; j++){
                temp2 = "0" + temp2
                if(temp2.length == n){break}
            }
        }
        let temp3 = []
        for(let i=0; i<n; i++){
            if(temp1[i] == "1" || temp2[i] == "1"){temp3 += "#"} else {temp3 += " "}
        }
        map.push(temp3)
    }
    
    
    return map;
}