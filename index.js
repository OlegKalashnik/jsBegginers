let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let expenses = {};

for (let i = 0; i < 2; i++) {
  let a = prompt('Введите обязательную статью расходов в этом месяце'),
    b = +prompt('Во сколько обойдется');
  if (
    typeof a == 'string' &&
    a.length <= 50 &&
    typeof b != null &&
    a != '' &&
    b != ''
  ) {
    expenses[a] = b;
  }
}

let appData = {
  budje: money,
  timeData: time,
  expenses: expenses,
  optionalExpenses: {},
  income: [],
  savings: false,
};

alert(money / 30);
