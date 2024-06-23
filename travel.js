function travel(name) {
    if (name == "flight") {
        flightname = "indigo"
        flight1(flightname)
    }
    else if (name == "bus") {
        busname = "dawaraka"
        bus1(busname)
    }
    else if (name == "train") {
        trainname = "rajdhani express"
        train1(trainname)
    }
}
function flight1(flightname) {
    console.log("travelling on flight", flightname)
}
function bus1(busname) {
    console.log("travelling on bus", busname)
}
function train1(trainname) {
    console.log("travelling on train", trainname)
}
travel("train")