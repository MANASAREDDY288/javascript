function product() {
    a = [10, 5, 6, 7, 20]
    prod = 1
    console.log("array elements are:" + a)
    console.log("length of the element in array is:" + a.length)
    for (i = 0; i < a.length; i++) {
        prod = prod * a[i]
    }
    console.log("product of elements in array is:" + prod)
}
product()

