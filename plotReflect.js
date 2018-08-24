
void function processData(input) {
    input = input.split('\n')
    let quadrantsNum = input.shift()
    let querysNum = input.splice(4, 1)[0]
    let quadrants = input.splice(0, quadrantsNum)
    quadrants = quadrants.map((a) => a.split(" "))
    quadrants = quadrants.map(x => [+x[0], +x[1]])
    let quadrantsNumsArr = [1, 2, 3, 4]

    // console.log(reflect(input[1][0], quadrants))
    let container = []
    for (let i of input) {
        i
        if (i.split(" ")[0] != "C") quadrants = reflect(i[0], quadrants)
        else {
         for(let q in quadrants) {
             console.log(container.push(getQuadrant(quadrants[q])))
         }
         console.log(container)
         container = []
        // console.log(quad)
        }
    }

    
    
}(data)

function reflect(sign, arr) {
    if (sign == "X") return arr.map(x => [x[0], -x[1]])
    if (sign == "Y") return arr.map(x => [-x[0], x[1]])
    return arr
}

function getQuadrant(point) {
    if (point[0] > 0 && point[1] > 0) return 1
    if (point[0] < 0 && point[1] > 0) return 2
    if (point[0] < 0 && point[1] < 0) return 3
    if (point[0] > 0 && point[1] < 0) return 4
    return 0
}