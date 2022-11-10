// code your solution here
function superbowlWin(record) {
    let resultWin = record.find(element => element["result"] === "W");
    if (resultWin === undefined) {
        return undefined
    } else {
        return resultWin["year"];
    }
}