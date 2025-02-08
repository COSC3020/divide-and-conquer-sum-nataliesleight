//function divideAndConquerSum(a) {
//    return a;
//}

function divideAndConquerSum(a) {
    var sum = 0;
    var b = a;
    //a[0] = 0;
    mergesort(a);
    //for (var i; i <= a.length; i++) {
    //    sum += a[i];}
    return a[0];
}



function mergesort(x) {
    var tmp = 0;
    msort(x, 0, x.length-1, tmp);
}

function msort (x, lo, hi, tmp) {
  if (lo>=hi) return;
  
  var mid1 = lo + Math.floor((hi - lo) / 3); 
  var mid2 = lo + 2 * Math.floor((hi - lo) / 3) + 1; 

  msort(x,lo,mid1,tmp);
  msort(x,mid1+1,mid2,tmp);
  msort(x,mid2+1,hi,tmp);

  merge1(x,lo,mid1,mid2,tmp);
  merge2(x,mid1,mid2,hi,tmp);
  //merge3(x,lo,mid1,mid2,hi,tmp);
}
/*
function merge3(gArray, low, mid1,mid2, high, destArray)
{
    let i = low, j = mid1, k = mid2, l = low;
 
    // choose smaller of the smallest in the three ranges
    while ((i < mid1) && (j < mid2) && (k < high))
    {
        if(gArray[i] < gArray[j])
        {
            if(gArray[i] < gArray[k])
            {
                destArray[l++] = gArray[i++];
            }
            else
            {
                destArray[l++] = gArray[k++];
            }
        }
        else
        {
            if(gArray[j] < gArray[k])
            {
                destArray[l++] = gArray[j++];
            }
            else
            {
                destArray[l++] = gArray[k++];
            }
        }
    }
 
    // case where first and second ranges
    // have remaining values
    while ((i < mid1) && (j < mid2))
    {
        if(gArray[i] < gArray[j])
        {
            destArray[l++] = gArray[i++];
        }
        else
        {
            destArray[l++] = gArray[j++];
        }
    }
 
    // case where second and third ranges
    // have remaining values
    while ((j < mid2) && (k < high))
    {
        if(gArray[j] < gArray[k])
        {
            destArray[l++] = gArray[j++];
        }
        else
        {
            destArray[l++] = gArray[k++];
        }
    }
 
    // case where first and third ranges have
    // remaining values
    while ((i < mid1) && (k < high))
    {
        if(gArray[i] < gArray[k])
        {
            destArray[l++] = gArray[i++];
        }
        else
        {
            destArray[l++] = gArray[k++];
        }
    }
 
    // copy remaining values from the first range
    while (i < mid1)
        destArray[l++] = gArray[i++];
 
    // copy remaining values from the second range
    while (j < mid2)
        destArray[l++] = gArray[j++];
 
    // copy remaining values from the third range
    while (k < high)
        destArray[l++] = gArray[k++];
}
 
 
/* Performing the merge sort algorithm on the
given array of values in the rangeof indices
[low, high). low is minimum index, high is
maximum index (exclusive) */
/*
function mergeSort3WayRec(gArray, low,high, destArray)
{
    // If array size is 1 then do nothing
    if (high - low < 2)
        return;
 
    // Splitting array into 3 parts
    let mid1 = low + Math.floor((high - low) / 3);
    let mid2 = low + 2 * Math.floor((high - low) / 3) + 1;
 
    // Sorting 3 arrays recursively
    mergeSort3WayRec(destArray, low, mid1, gArray);
    mergeSort3WayRec(destArray, mid1, mid2, gArray);
    mergeSort3WayRec(destArray, mid2, high, gArray);
 
    // Merging the sorted arrays
    merge(destArray, low, mid1, mid2, high, gArray);
}
 
function mergeSort3Way(gArray,n)
{
    // if array size is zero return null
    if (n == 0)
        return;
 
    // creating duplicate of given array
    let fArray = new Array(n);
 
    // copying elements of given array into
    // duplicate array
    for (let i = 0; i < n; i++)
        fArray[i] = gArray[i];
 
    // sort function
    mergeSort3WayRec(fArray, 0, n, gArray);
 
    // copy back elements of duplicate array
    // to given array
    for (let i = 0; i < n; i++)
        gArray[i] = fArray[i];
}*/

function merge1(x, lo, mid1, mid2, tmp) {
    var a = lo, b = mid1 + 1;
    for (var k = lo; k <= mid2; k++) {
      if (a <= mid1) {
        tmp += x[a++];
      }
      else {
        tmp += x[b++];
      }
    }
    for(var k = lo; k <= mid2; k++) {
      x[0] += tmp;
    }
  }

  function merge2(x, mid1, mid2, hi, tmp) {
    var a = mid1, b = mid2 + 1;
    for (var k = mid1; k <= hi; k++) {
      if (k > mid2) {
        tmp += x[b++];
      }
      //else {
      //  tmp[0] += x[b++];
      //}
    }
    for(var k = mid1; k <= hi; k++) {
      x[0] += tmp;
    }
  } 

/*

/*function merge(x, lo, mid1, mid2, hi, tmp) {
    var a = lo, b = mid1 + 1, c = mid2 + 1;
    for (var k = lo; k <= hi; k++) {                      // loop array index numbers
      if (a <= mid1 && (b > mid2 || x[a] < x[b] || b > hi)) {          // lo less than mid, mid+1 > hi or array lo < array mid+1
        tmp[k] = x[a++];                                  // temporary array value set to lo++
      }
      else if (b <= mid2 && (c > hi || x[b] < x[c])) {
          tmp[k] = x[b++];
      }
      else {  
        tmp[k] = x[c++];                                  // else set to mid+1++
      }
    }
    //x = [0];
    for(var k = lo; k <= hi; k++) {                       // set temp array to real
      x[k] = tmp[k];
    }
}*/

// og merge code
/*
function msort (x, lo, hi, tmp) {
  if (lo>=hi) return;
  var mid = Math.floor((lo+hi)/2);
  msort(x,lo,mid,tmp);
  msort(x,mid+1,hi,tmp);
  merge(x,lo,mid,hi,tmp);
}

function mergesort(x) {
  var tmp = [];
  msort(x, 0, x.length-1, tmp);
}

function merge(x, lo, mid, hi, tmp) {
  var a = lo, b = mid + 1;
  for (var k = lo; k <= hi; k++) {
    if (a <= mid && (b > hi || x[a] < x[b])) {
      tmp[k] = x[a++];
    }
    else {
      tmp[k] = x[b++];
    }
  }
  for(var k = lo; k <= hi; k++) {
    x[k] = tmp[k];
  }
}
*/



/* The recursive calls sum up the numbers in the base case, and "merges" the sums of the recursive calls otherwise. 
For example, the return value for the array a = [1,5,-1,4] is 9.

To make it a bit more interesting, instead of splitting into two sub-arrays like in merge sort, 
I want you to split into three sub-arrays at each divide step. */

var arraytoSum = [2, 4, 1, 7, 8, 4, 5, 0, 9, 12, 5, -2, 7, -7];
console.log('expected sum: 55')
console.log(divideAndConquerSum(arraytoSum))
