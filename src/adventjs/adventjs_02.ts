/** https://adventjs.dev/challenges/2022/2 */

const year: number = 2022;
const holidays: string[] = ['01/06', '04/01', '12/25'];

console.log(countHours(year, holidays));

function countHours(year: number, holidays: string[]) {
    let hours: number = 0;

    holidays.forEach((holiday: string) => {
        const day: Date = new Date(holiday + "/" + year);

        const sunday: number = 0;
        const saturday: number = 6;

        if (day.getDay() > sunday && day.getDay() < saturday) {
            hours += 2;
        }
    });

    return hours;
}