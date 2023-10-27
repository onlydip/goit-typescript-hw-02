/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDay {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: WeekDay): boolean {
  return day === WeekDay.Saturday || day === WeekDay.Sunday;
}


const today = WeekDay.Tuesday;
const isWeekendToday = isWeekend(today);
