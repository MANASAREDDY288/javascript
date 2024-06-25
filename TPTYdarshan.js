function TirupatiDarshan() {
    TicketType = "Seeghra darshan"
    Date = "aug 1st"
    Time = "3:30 Am "
    NameofthesevaDarshan = "Archana"
    chooseTicketType(TicketType)
    chooseDate(Date)
    chooseTime(Time)
    chooseNameofthesevaDarshan(NameofthesevaDarshan)



}
function chooseTicketType(TicketType) {
    if (TicketType == "sarva darshan") {
        console.log("sarva darshan people are allowed ")
    }
    else if (TicketType == "Seeghra darshan") {
        console.log("seeghra darshan people are allowed")
    }
    else if (TicketType == "Divya darshan") {
        console.log("seeghra darshan people are allowed")
    }
}
function chooseDate(Date) {
    if (Date == "jul 1st") {
        console.log("who are booked on that day they are allowed for darshan")
    }
    else {
        console.log("another date means they are not allowed for darshan")
    }
}
function chooseTime(Time) {
    if (Time >= "3:30 Am ") {
        console.log("they are allowed for darshan")
    }
    else {
        console.log("they are not allowed for darshan")
    }
}
function chooseNameofthesevaDarshan(NameofthesevaDarshan) {
    if (NameofthesevaDarshan == "abhishekam") {
        console.log("priest was performing abhishekam")
    }
    else if (NameofthesevaDarshan == "Archana") {
        console.log("priest was performing archana")
    }
}
TirupatiDarshan()