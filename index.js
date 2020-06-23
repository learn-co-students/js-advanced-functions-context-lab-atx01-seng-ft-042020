/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(employeeInfo) {
    return {
        firstName: employeeInfo[0],
        familyName: employeeInfo[1],
        title: employeeInfo[2],
        payPerHour: employeeInfo[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employees) {
    return employees.map((employee) => createEmployeeRecord(employee))
}

function createTimeInEvent(dateStamp) {
    this.timeInEvents.push( {
        type: "TimeIn",
        hour: parseInt(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0]
    })
    return this
}

function createTimeOutEvent(dateStamp) {
    this.timeOutEvents.push( {
        type: "TimeOut",
        hour: parseInt(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0]
    })
    return this
}

function hoursWorkedOnDate(dateStamp) {
    // console.log("********")
    // console.log(this)
    // console.log("********")
    const timeInEvent = this.timeInEvents.find((event) => event.date == dateStamp.split(' ')[0])
    const timeOutEvent = this.timeOutEvents.find((event) => event.date == dateStamp.split(' ')[0])
    return (timeOutEvent.hour - timeInEvent.hour) / 100
}

function wagesEarnedOnDate(dateStamp) {
    // console.log("--------")
    // console.log(this)
    // console.log("--------")
    return hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour
}

let allWagesFor = function() {
    return this.timeInEvents.reduce(function(wages, timeInEvent) {
        let dateStamp = timeInEvent.date + ' ' + timeInEvent.hour
        return wages + wagesEarnedOnDate.call(this, dateStamp)
    }.bind(this), 0)
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find((employee) => employee.firstName == firstName)
}

function calculatePayroll(employees) {
    return employees.reduce((payroll, employee) => payroll + allWagesFor.call(employee), 0)
}