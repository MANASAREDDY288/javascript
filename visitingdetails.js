function visitingdetails() {
    name = "naresh"
    mailid = "naresh.jvt@gmail.com"
    companyname = "jvt"
    designation = "programmer"
    address = "tipasandra"

    checkname(name)
    checkmailid(mailid)
    checkcompanyname(companyname)
    checkdesignation(designation)
    checkaddress(address)

}
function checkname(name) {
    if (name == "sai") {
        console.log("sai is visiting the company")
    }
    else if (name == "naresh") {
        console.log("naresh is visiting the company")
    }
}
function checkmailid(mailid) {
    console.log(mailid.length)
    assign = mailid.length
    console.log(assign)
    if (assign < 6) {
        console.log("invalid mailid")
        return
    }
    else if (mailid == "naresh.jvt@gmail.com") {
        console.log("valid mailid")
    }
}
function checkcompanyname(companyname) {
    if (companyname == "capgemini") {
        console.log("working in capgemini")
    }
    else if (companyname == "infosys") {
        console.log("working in infosys")
    }
    else if (companyname == "jvt") {
        console.log("working in jvt")
    }
}
function checkdesignation(designation) {
    if (designation == "developer") {
        console.log("designation is java developer")
    }
    else if (designation == "trainer") {
        console.log("designation in trainer")
    }
    else if (designation == "programmer") {
        console.log("designation is programmer")
    }
}
function checkaddress(address) {
    if (address == "marthalli") {
        console.log("the company was located in marthalli")
    }
    else if (address == "tipasandra") {
        console.log("the company  was located in tipasandra")
    }
    else if (address == "ecospace") {
        console.log("the company was located in ecospace")
    }
}
visitingdetails()

