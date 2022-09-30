function solution(sizes) {
    let bigger = Math.max(...sizes.map((arr) => Math.max(...arr)))
    let smaller = Math.max(...sizes.map((arr) => Math.min(...arr)))
    return bigger * smaller
}