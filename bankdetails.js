function bankdetails() {
    BankName = "SBI Bank"
    BranchName = "Hyderabad main branch"
    WithDrawl = "500.00"
    AvailableBalRs = "1000.00"

    chooseBankName(BankName)
    chooseBranchName(BranchName)
    chooseWithDrawl(WithDrawl)
    chooseAvailableBalRs(AvailableBalRs)

}
function chooseBankName(BankName) {
    if (BankName == "SBI Bank") {
        console.log("bank name is SBI")
    }
    else if (BankName == "IOB Bank") {
        console.log("bank name is IOB")
    }
    else if (BankName == "HDFC") {
        console.log("bank name is HDFC")
    }
}
function chooseBranchName(BranchName) {
    if (BranchName == "Bangalore Main Branch") {
        console.log("bangalore main branch is available")
    }
    else if (BranchName == "Hyderabad main branch") {
        console.log("Hyderabad main branch is available")
    }
}
function chooseWithDrawl(WithDrawl) {
    if (WithDrawl == "500.00") {
        console.log("accountholder is withdrawing :500Rs")
    }
    else if (WithDrawl == "2000.00") {
        console.log("accountholder is withdrawing :2000Rs")
    }
    else if (WithDrawl == "10000.00") {
        console.log("accountholder is withdrawing :10000Rs")
    }
}
function chooseAvailableBalRs(AvailableBalRs) {
    if (AvailableBalRs == "2000.00") {
        console.log("in the account available balance is: 2000")
    }
    else if (AvailableBalRs == "1000.00") {
        console.log("in the account available balance is: 1000")
    }
    else if (AvailableBalRs == "20000.00") {
        console.log("in the account available balance is: 20000")
    }
}
bankdetails()
