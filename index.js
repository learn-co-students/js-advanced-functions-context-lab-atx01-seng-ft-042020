let createEmployeeRecord = function (employeeArray){
    return {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    };
};

let createEmployeeRecords = function (employeesArray){
    return employeesArray.map(employee => createEmployeeRecord(employee));
};

let createTimeInEvent = function (dateStamp){
    const [date, hour] = dateStamp.split(' ');

    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date,
    });

    return this;
};

let createTimeOutEvent = function(dateStamp){
    const [date, hour] = dateStamp.split(' ');

    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date,
    });
    return this;
};

let hoursWorkedOnDate = function(dateStamp){
    return (this.timeOutEvents.filter(event => { return event.date === dateStamp})[0].hour 
    - this.timeInEvents.filter(event => {return event.date === dateStamp})[0].hour)
    / 100;
};

let wagesEarnedOnDate = function(dateStamp){
    return hoursWorkedOnDate.call(this, dateStamp)*this.payPerHour;
};

let findEmployeeByFirstName = function(srcArray, firstName){
    return srcArray.filter(employee => employee.firstName)[0];
};

let allWagesFor = function (){
    let totalArray = [];
    let total = 0;

    totalArray = this.timeInEvents.map(e => wagesEarnedOnDate.call(this, e.date));
    totalArray.forEach(e => total += e);

    return total;
};

let calculatePayroll = function (srcArray){
    let allEmployeeWages = srcArray.map(employee => allWagesFor.call(employee));
    let total = 0;

    allEmployeeWages.forEach(employeeTotal => total += employeeTotal);

    return total;
};