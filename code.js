function divideAndConquerSum(gArray)
{
    var n = gArray.length - 1;
    if (n + 1 == 0) {return 0;}
    return divideArray(gArray, 0, n);
}

function divideArray(gArray, low, high)
{
    if (high >= gArray.length) {return 0;}
    if (high < low) { return 0;}
    if (low == high) {
        //console.log("adding index at ", low, "->", gArray[low]);
        return gArray[low];}

    var mid1 = Math.floor((high-low)/3 + low);
    var mid2 = Math.floor(2 * ((high-low) / 3) + low );
 
    return divideArray(gArray, low, mid1) + 
    divideArray(gArray, mid1+1, mid2) + 
    divideArray(gArray, mid2+1, high);
}
