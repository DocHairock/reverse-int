module.exports = function reverse (n) {
    let arr = n.toString().split("")
    let reverseInt =Number.parseInt(arr.reverse().join("")) 
    return reverseInt
}
