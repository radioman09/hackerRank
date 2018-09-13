// Day of programmer 256th day of year
// from 1700 - 2700
// jullian calendar 1700 - 1917
// gregorian calendar change on january 31 1918

// both calendars February is variable ength
// 29 days on leap year
// 28 days all other years

// Julian leap years: is leap year if year / 4 is even
// Gregorian leap year: year / 400 is even    OR    year / 4 but not 100  


// gen a year, find the 256th day of that year


function convertToJulian() {
    let year = 1990
    let month = 3
    JD = 367year - <(7(year+<(month+9)/12>))/4> + <(275month)/9> + I + 1721013.5 + UT/24 - 0.5sign(100year+month-190002.5) + 0.5
}