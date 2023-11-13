// problem4:How to calculate leap year
// _______ans________
function isLeapYear(year) {
    if ((year % 400 === 0) || ((year % 4 ===0) && (year % 100 !== 0))) {
return "this is leap year"
    }else {
        return "this is not leap year"
    }
}
const leapYear = 2017;
console.log(isLeapYear(leapYear));