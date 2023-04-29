const title = document.createElement("h1");
const textarea = document.createElement("textarea");
const keyboard = document.createElement("div");
const keyboardDescription = document.createElement("p");
const language = document.createElement("p");

// Добавление класса
document.body.classList.add("body");
title.classList.add("title");
textarea.classList.add("textarea");
keyboard.classList.add("keyboard");
keyboardDescription.classList.add("keyboard-description");
language.classList.add("language");


//Создание кнопок
const keys = [  
  [{label: "`", code: "Backquote"}, {label: "1", code: "Digit1"},
   {label: "2", code: "Digit2"}, {label: "3", code: "Digit3"},
   {label: "4", code: "Digit4"}, {label: "5", code: "Digit5"},
   {label: "6", code: "Digit6"}, {label: "7", code: "Digit7"},
   {label: "8", code: "Digit8"}, {label: "9", code: "Digit9"},
   {label: "0", code: "Digit0"}, {label: "-", code: "Minus"},
   {label: "=", code: "Equal"}, {label: "Backspace", code: "Backspace"}],
  [{label: "Tab", code: "Tab"}, {label: "q", code: "KeyQ"}, {label: "w", code: "KeyW"}, {label: "e", code: "KeyE"},
   {label: "r", code: "KeyR"}, {label: "t", code: "KeyT"}, {label: "y", code: "KeyY"}, {label: "u", code: "KeyU"},
   {label: "i", code: "KeyI"}, {label: "o", code: "KeyO"}, {label: "p", code: "KeyP"}, {label: "[", code: "BracketLeft"},
   {label: "]", code: "BracketRight"}, {label: "\\", code: "Backslash"}, {label: "Del", code: "Delete"}],
  [{label: "CapsLock", code: "CapsLock"}, {label: "a", code: "KeyA"}, {label: "s", code: "KeyS"},
   {label: "d", code: "KeyD"}, {label: "f", code: "KeyF"}, {label: "g", code: "KeyG"}, 
   {label: "h", code: "KeyH"}, {label: "j", code: "KeyJ"}, {label: "k", code: "KeyK"},
   {label: "l", code: "KeyL"}, {label: ";", code: "Semicolon"}, {label: "'", code: "Quote"}, {label: "Enter", code: "Enter"}],
  [{label: "Shift", code: "ShiftLeft"}, {label: "z", code: "KeyZ"}, {label: "x", code: "KeyX"},
   {label: "c", code: "KeyC"}, {label: "v", code: "KeyV"}, {label: "b", code: "KeyB"}, {label: "n", code: "KeyN"},
   {label: "m", code: "KeyM"}, {label: ",", code: "Comma"}, {label: ".", code: "Period"},
   {label: "/", code: "Slash"}, {label: "↑", code: "ArrowUp"}, {label: "Shift", code: "ShiftRight"}],
  [{label: "Ctrl", code: "ControlLeft"}, {label: "Win", code: "MetaLeft"},
   {label: "Alt", code: "AltLeft"}, {label: " ", code: "Space"}, {label: "Alt", code: "AltRight"},
   {label: "←", code: "ArrowLeft"}, {label: "↓", code: "ArrowDown"}, {label: "→", code: "ArrowRight"},
   {label: "Ctrl", code: "ControlRight"}]
];

for (let i = 0; i < keys.length; i++) {
  const row = document.createElement("div");
  row.classList.add("keyboard-row");
  for (let j = 0; j < keys[i].length; j++) {
    const key = document.createElement("button");
    key.classList.add("keyboard-key");
    key.textContent = keys[i][j].label;
    key.setAttribute("data-code", keys[i][j].code);
    row.appendChild(key);
  }
  keyboard.appendChild(row);
}

// Установка св-в и текстового содержимого
title.textContent = "RSS Virtual keyboard";
textarea.rows = 5;
textarea.cols = 50;
textarea.placeholder = 'Enter your text ...';
keyboardDescription.textContent = "The keyboard was created in the Windows operating system";
language.textContent = "To switch the language combination: left ctrl + alt"

// Привязка клика мыши по клавиатуре и вывод в поле textarea
keyboard.addEventListener("click", (e) => {
  if (e.target.classList.contains("keyboard-key")) {
    textarea.value += e.target.textContent;
  }
});

// Добавление элемента на страницу
document.body.appendChild(title);
document.body.appendChild(textarea);
document.body.appendChild(keyboard);
document.body.appendChild(keyboardDescription);
document.body.appendChild(language);