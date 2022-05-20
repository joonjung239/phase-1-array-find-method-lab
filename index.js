function superbowlWin(record){
    const found = record.find((record) => record.result === 'W')
if (found){
    return found.year
}

}


