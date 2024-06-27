function sumofelements() {
    arr = [10, 30, 40, 50, 4]
    sum = 0;
    console.log("array elements are:" + arr)
    console.log("length of the array is:" + arr.length)
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    console.log("sum of elements in array is:" + sum)

}
sumofelements()