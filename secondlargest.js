function secondlargest(arr) {
    console.log("length of array:" + arr.length)
    if (arr.length < 2) {
        return "invalid input"
    }
    console.log("before sorting array =" + arr)
    a = arr.sort()
    console.log("after sorting array =" + a)


    for (i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== arr[arr.length - 1]) {
            return "second largest element in array:" + arr[i]
        }




    }
    return "there is no second largest element in array"

}

arr = [10, 20, 30, 40, 50, 25]
console.log(secondlargest(arr))
