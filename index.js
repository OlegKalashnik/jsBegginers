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
  chooseExpenses() {
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
  },
  chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
      let a = i,
        b = prompt('Статья необязательных расходов?');
      if (typeof b == 'string' && b != '') {
        appData.optionalExpenses[a] = b;
      } else {
        i--;
      }
    }
  },
  detectDayBudget() {
    // Расчет дневного бюджета
    appData.moneyPerDay = (appData.budje / 30).toFixed();
    alert(appData.moneyPerDay);
  },
  detectLevel() {
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
  },
  checkSavings() {
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
      alert(
        `Доход в месяц с вашего депозита: ${appData.monfIncome.toFixed(2)}`
      );
    }
  },
  chooseIncome() {
    let items;
    do {
      items = prompt(
        'Что приносит дополнительный доход? (перечислите через запятую)'
      );
    } while (typeof items != 'string' || items.length < 1);

    appData.income = items.split(', ');

    alert('Способы доп. заработка:');
    appData.income.forEach((income, index) => {
      alert(`${index + 1}. ${income}`);
    });
  },
};

console.log('Наша программа включает в себя данные:');
for (let key in appData) {
  console.log(`${key} - ${appData[key]}`);
}
