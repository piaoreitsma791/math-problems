function findMaxSubarraySum(arr) {
    let currentMax = arr[0];
    let globalMax = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (currentMax + arr[i] > arr[i]) {
            currentMax += arr[i];
        } else {
            currentMax = arr[i];
        }

        if (currentMax > globalMax) {
            globalMax = currentMax;
        }
    }

    return globalMax;
}
