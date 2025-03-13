// code your solution here
const record =[
    {year: "2015", result: "W"},
    {year: "2015", result: "N/A"},
    {yers: "2013", result: "L"},
]

function superbowlWin(record){
    let result = record.find(record => record.result === "W")
    return !!result ? result.year : undefined
}
superbowlWin