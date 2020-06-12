/* Your Code Here */

function createEmployeeRecord(employeeData) {
    return {
        firstName: employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2],
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employees) {
    return employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ')
    this.timeInEvents.push({
        type: 'TimeIn',
        date,
        hour: parseInt(hour, 10)
    })
    return this
}

function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: 'TimeOut',
        date,
        hour: parseInt(hour, 10)
    })
    return this
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date)
    const timeOut = this.timeOutEvents.find(event => event.date === date)
    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date) {
    return this.payPerHour * hoursWorkedOnDate.call(this, date)
}

function allWagesFor() {
    const dates = this.timeInEvents.map(event => event.date)
    return dates.reduce((wage, date) => wage + wagesEarnedOnDate.call(this, date), 0)
}

function findEmployeeByFirstName(employees, firstName) {
    return employees.find(employee => employee.firstName === firstName)
}

function calculatePayroll(employees) {
    return employees.reduce((payroll, employee) => payroll + allWagesFor.call(employee), 0)
}






/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// let allWagesFor = function () {
//     let eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     let payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }