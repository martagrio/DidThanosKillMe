'use strict';
const page = document.querySelector('.page');
const title = document.querySelector('.title');
const button = document.querySelector('.btn');

const image = document.createElement('img');
const chin = 'https://media3.giphy.com/media/Q8auEgoR7x0CcgH4uQ/giphy.gif?cid=790b76115d49a89c506a6c302e6e206c&rid=giphy.gif';
const chinAlt = "you are saved, you can chill now";
const snap = 'https://media2.giphy.com/media/3o6ozC2VM9R0XSMNKo/giphy.gif?cid=790b76115d49a837596474564d7ec7f3&rid=giphy.gif';
const snapAlt = "you got killed, sorry";

const message = document.createElement('h2');
const spared = document.createTextNode('You were spared by Thanos.');
const killed = document.createTextNode('You were slain by Thanos, for the good of the Universe.');

let fate = JSON.parse(localStorage.getItem('fate'));

function cache() {

	if (fate === null) {
		button.addEventListener('click', killedOrNot);
	} else if (fate === 0) {
		button.classList.add('hidden');
    title.classList.add('hidden');
    destiny(killed, snap, snapAlt);
  } else {
		button.classList.add('hidden');
    title.classList.add('hidden');
    destiny(spared, chin, chinAlt);
  }
}

function getRandom() {
    return Math.floor(Math.random() * 2);
}

function destiny(fate, src, alt) {
    message.appendChild(fate);
    page.appendChild(message);
    image.src = src;
    image.alt = alt;
    page.appendChild(image);
}

function killedOrNot() {
    button.classList.add('hidden');
    title.classList.add('hidden');
    getRandom();

    if (getRandom() === 0) {
        destiny(killed, snap, snapAlt);
    } else {
        destiny(spared, chin, chinAlt);
    }
    localStorage.setItem('fate', getRandom());
}

cache();