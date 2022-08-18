const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-item');
menu.replaceChildren(menuItems[0], menuItems[2], menuItems[1], menuItems[3]);
const newMenuItem = document.createElement('li');
newMenuItem.textContent = 'Пятый пункт';
newMenuItem.classList.add(menuItems[0].classList);
menu.append(newMenuItem);
document.body.style.background = 'url(../img/apple_true.jpg) center no-repeat';
const title = document.querySelector('.title');
title.textContent = 'Мы продаем только подлинную технику Apple';

const adv = document.querySelector('.adv');
adv.remove();
const userPrompt = document.querySelector('.prompt');

const userAnswer = prompt(' Чё на счёт огрызка?');
userPrompt.textContent = userAnswer;

// 'use strict';

// let menu = document.getElementsByClassName("menu")[0],
//     menuItem = document.getElementsByClassName("menu-item"),
//     title = document.getElementById("title"),
//     adv = document.getElementsByClassName("adv")[0],
//     promptforApple = document.querySelector("#prompt"),
//     menuItemLi = document.createElement("li");

// menu.insertBefore(menuItem[2], menuItem[1]);                    // Поменяли местами два элемента

// menuItemLi.classList.add("menu-item");                          // Добавляем новый li, с классом и текстом
// menuItemLi.textContent = "Пятый элемент";
// menu.appendChild(menuItemLi);

// document.body.style.backgroundImage = "url('img/apple_true.jpg')";  // Меняем фон

// title.textContent = "Мы продаем только подлинную технику Apple"    // Заменить текст

// adv.remove();                                                   // Удалить рекламу со страницы

// let yourOpinion = prompt("Ваше отношение к технике Apple?");   // Отношение к технике Apple
// promptforApple.textContent = yourOpinion;
