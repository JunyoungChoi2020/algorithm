function solution(participant, completion) {
    var answer = '';
    
    let hashmap_part = new Map()
    let hashmap_comp = new Map()
    
    for(comp of completion){
        hashmap_comp.set(comp, hashmap_comp.get(comp) ? hashmap_comp.get(comp) + 1 : 1)
    }
    
    for(part of participant){
        hashmap_part.set(part, hashmap_part.get(part) ? hashmap_part.get(part) + 1 : 1)
    }
    
    for(part of hashmap_part){
        
        if(hashmap_part.get(part[0]) !== hashmap_comp.get(part[0])){
            answer = part[0]
        }
    }
    
    return answer;
}