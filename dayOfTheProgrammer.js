// Day of programmer 256th day of the year
// from 1700 - 2700
// jullian calendar 1700 - 1917
// gregorian calendar change on january 31 1918

// both calendars February is variable length
// 29 days on leap year
// 28 days all other years

// Julian leap years: is leap year if year / 4 is even
// Gregorian leap year: year / 400 is even    OR    year / 4 but not 100


// gen a year, find the 256th day of that year
// dd.mm.yyyy
// input 2017
// output 13.09.2017


function gregorianDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
function buildCal(year) {
    const feb = gregorianDaysInMonth(year, 2);
    const cal = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year <= 1917 && year % 4 == 0) cal[1] = 29;
    else cal[1] = 28;
    return cal;
}

function dayOfProgrammer(year) {
    if (year === 1918) return '26.09.1918';
    const cal = buildCal(year);
    const progDay = 256;
    let count = 0;
    let day = 0;
    for (let i = 0; i < 12; i++) {
        count += cal[i];
        if (count > progDay) {
            day = progDay - (count - cal[i - 1]) - 1;
            return `${day}.${zeroFromat(i + 1)}.${year}`;
        }
    }
}

console.log(dayOfProgrammer(2017));
function zeroFromat(num) {
    return num <= 9 ? num = '0' + num : num = '' + num;
}

