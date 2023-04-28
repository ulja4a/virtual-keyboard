const title = document.createElement("h1");
const textarea = document.createElement("textarea");

// Добавление класса
document.body.classList.add("body");
title.classList.add("title");
textarea.classList.add("textarea");

// Установка св-в и текстового содержимого
title.textContent = "RSS Virtual keyboard";
textarea.rows = 5;
textarea.cols = 50;
textarea.placeholder = 'Enter your text ...'

// Добавление элемента на страницу
document.body.appendChild(title);
document.body.appendChild(textarea);