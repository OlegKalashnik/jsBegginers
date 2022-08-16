let money, time;

function start() {
  money = +prompt('Ваш бюджет на месяц?');
  time = prompt('Введите дату в формате YYYY-MM-DD');
  while (isNaN(money) || money === '' || money === null) {
    money = +prompt('Ваш бюджет на месяц?');
  }
}
start();

let appData = {
  budje: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
};

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце'),
      b = +prompt('Во сколько обойдется?');
    if (
      typeof a == 'string' &&
      a.length <= 50 &&
      typeof b != null &&
      a != '' &&
      b != ''
    ) {
      appData.expenses[a] = b;
    } else {
      i--;
    }
  }
}
chooseExpenses();

function chooseOptExpenses() {
  for (let i = 1; i <= 3; i++) {
    let a = i,
      b = prompt('Статья необязательных расходов?');
    if (typeof b == 'string' && b != '') {
      appData.optionalExpenses[a] = b;
    } else {
      i--;
    }
  }
}
chooseOptExpenses();

function detectDayBudget() {
  // Расчет дневного бюджета
  appData.moneyPerDay = (appData.budje / 30).toFixed();
  alert(appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
  // Расчет уровня достатка
  if (appData.moneyPerDay < 100) {
    console.log('Это минимальный уровень достатка!');
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Это средний уровень достатка!');
  } else if (appData.moneyPerDay > 2000) {
    console.log('Это высокий уровень достатка!');
  } else {
    console.log('Ошибочка...!');
  }
}
detectLevel();

function checkSavings() {
  let save, percent;
  if (appData.savings) {
    save = +prompt('Какова сумма накоплений?');
    percent = +prompt('Под какой процент?');

    while (isNaN(save) || save === '' || save === null) {
      save = +prompt('Какова сумма накоплений?');
    }
    while (isNaN(percent) || percent === '' || percent === null) {
      percent = +prompt('Под какой процент?');
    }

    appData.monfIncome = (save / 100 / 12) * percent;
    alert(`Доход в месяц с вашего депозита: ${appData.monfIncome.toFixed(2)}`);
  }
}
checkSavings();
