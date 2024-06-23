function createaccount() {

    chooseusername = "mansi"
    Createapassword = "manasa"
    yourcurrentemailaddress = "manasa@gmail.com"

    checkusername(chooseusername)
    checkpassword(Createapassword)
    checkemail(yourcurrentemailaddress)

}
function checkusername(chooseusername) {
    if (chooseusername == "mansi") {
        console.log("user name taken already")
    }
    console.log(chooseusername)
}
function checkpassword(Createapassword) {

    if (Createapassword.length <= 7) {
        console.log("inavlid password")
        return
    }

}
function checkemail(yourcurrentemailaddress) {
    console.log(yourcurrentemailaddress.length)
    assign = yourcurrentemailaddress.length
    console.log(assign)
    if (assign < 6) {
        console.log("invalid length")
        return
    }
    if (yourcurrentemailaddress == "sai@gmail.com") {
        console.log("valid email")

    }
}
createaccount()