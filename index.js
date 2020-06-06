// Your code here
function mapToNegativize(numArr) {
    let newNumArr = [];
    numArr.forEach(num => {
        newNumArr.push(num * -1);
    })
    return newNumArr;
}

function mapToNoChange(startArr) {
    let endingArr = [];
    startArr.forEach(ele => {
        endingArr.push(ele);
    })
    return endingArr;
}

function mapToDouble(singleArr) {
    let doubledArr = [];
    singleArr.forEach(num => {
        doubledArr.push(num * 2);
    })
    return doubledArr;
}

function mapToSquare(nonSquaredArr) {
    let squaredArr = [];
    nonSquaredArr.forEach(num => {
        squaredArr.push(num * num);
    })
    return squaredArr;
}

function reduceToTotal(sourceArr, startingPoint=0) {
    let total = startingPoint;
    sourceArr.forEach(num => {
        total = total + num;
    })
    return total;
}

function reduceToAllTrue(sourceArr) {
    let reduceArr = [];
    let falseReduceArr = [];
    sourceArr.forEach(ele => {
        if(!!ele) {
            reduceArr.push(ele);
        } else {
            falseReduceArr.push(ele);
        }
    })
    if (falseReduceArr.length > 0) {
        return false;
    } else if (reduceArr.length === sourceArr.length) {
        return true;
    }
}

function reduceToAnyTrue(sourceArr) {
    let reduceArr = [];
    sourceArr.forEach(ele => {
        if(!!ele) {
            reduceArr.push(ele);
        }
    })
    if(reduceArr.length > 0) {
        return true;
    } else {
        return false;
    }
}

