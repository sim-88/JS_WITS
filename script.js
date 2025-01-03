const arr=[0,1,2,2,0,1,1];

function sort012(arr) {
    let low = 0;
    let high = arr.length - 1;
    let mid = 0;
    while (mid <= high) {
            if(arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
         }
         else if(arr[mid] === 1) {
             mid++;
         }
         else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
         }
    }
}

sort012(arr);
console.log(arr);