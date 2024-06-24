function ticketDetails() {
    TrainNumber = "56213"
    TrainName = "TIRUPATI PASSR"
    DateOfBooking = "14-Dec-2015"
    Class = "3A"
    DateofJourney = "04-Jan-2016"
    FromStation = "BGR"
    ToStation = "HYD"
    ScheduledDeparture = "21:00 Hrs"

    ChooseClass(Class)
    ChooseFromStation(FromStation)
    ChooseToStation(ToStation)


}
function ChooseClass(className) {
    if (className == "SLEEPERCLASS") {
        console.log("Sleeper class is available: 24AVL")
    }
    else if (className == "3A") {
        console.log("3A is not available: FULL")
    }
    else if (className == "2AC") {
        console.log("2AC available: 21AVL")
    }
}
function ChooseFromStation(FromStation) {
    if (FromStation == "MYS") {
        console.log("This train is not available from Mysore: Booking failed")
    }
    else if (FromStation == "BGR") {
        console.log("This train is starts from Bangalore: Booking available")
    }
}
function ChooseToStation(ToStation) {
    if (ToStation == "TPTY") {
        console.log("This train is available from tirupathi: Booking available")
    }
    else if (ToStation == "HYD") {
        console.log("This train is ends at Tirupathi: Booking not possible")
    }
}
ticketDetails()
