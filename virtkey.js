const title = document.createElement("h1");


// Добавление класса
document.body.classList.add("body");
title.classList.add("title");

// Установка текстового содержимого
title.textContent = "RSS Virtual keyboard";

// Добавление элемента на страницу
document.body.appendChild(title);