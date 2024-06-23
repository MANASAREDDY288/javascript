function vehicleinfo() {
    Vehicletype = "car"
    colour = "red"
    Enginenumber = "kp98gtyihh457797"
    company = "BMW"

    createvehicletype(Vehicletype)
    createcolour(colour)
    createenginenumber(Enginenumber)
    createcompany(company)
}
function createvehicletype(Vehicletype) {
    if (Vehicletype == "car") {
        console.log("vehicle type already mentioned")
    }
    console.log(Vehicletype)
}
function createcolour(colour) {
    if (colour == "red") {
        console.log("vehicle color is red")
    }
    else if (colour != "red") {
        console.log("vehicle color is different")
    }
}
function createenginenumber(Enginenumber) {
    console.log(Enginenumber.length)
    assign = Enginenumber.length
    console.log(assign)
    if (assign < 10) {
        console.log("invalid length")
        return
    }
    if (Enginenumber == "kp98gtyihh457797") {
        console.log("valid engine number")
    }
}
function createcompany(company) {
    if (company == "BMW") {
        console.log("company name is bmw")
    }
    else if (company != "AUDI") {
        console.log("company name is different")
    }
}

vehicleinfo()