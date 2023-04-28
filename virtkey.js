const title = document.createElement("h1");
const textarea = document.createElement("textarea");
const keyboard = document.createElement("div");

// Добавление класса
document.body.classList.add("body");
title.classList.add("title");
textarea.classList.add("textarea");
keyboard.classList.add("keyboard");


//Создание кнопок
const keys = [  
  [{label: "`", code: "Backquote"}, {label: "1", code: "Digit1"},
   {label: "2", code: "Digit2"}, {label: "3", code: "Digit3"},
   {label: "4", code: "Digit4"}, {label: "5", code: "Digit5"},
   {label: "6", code: "Digit6"}, {label: "7", code: "Digit7"},
   {label: "8", code: "Digit8"}, {label: "9", code: "Digit9"},
   {label: "0", code: "Digit0"}, {label: "-", code: "Minus"},
   {label: "=", code: "Equal"}, {label: "Backspace", code: "Backspace"}],
  [{label: "Tab", code: "Tab"}, {label: "Q", code: "KeyQ"}, {label: "W", code: "KeyW"}, {label: "E", code: "KeyE"},
   {label: "R", code: "KeyR"}, {label: "T", code: "KeyT"}, {label: "Y", code: "KeyY"}, {label: "U", code: "KeyU"},
   {label: "I", code: "KeyI"}, {label: "O", code: "KeyO"}, {label: "P", code: "KeyP"}, {label: "[", code: "BracketLeft"},
   {label: "]", code: "BracketRight"}, {label: "\\", code: "Backslash"}, {label: "Del", code: "Delete"}],
  [{label: "CapsLock", code: "CapsLock"}, {label: "A", code: "KeyA"}, {label: "S", code: "KeyS"},
   {label: "D", code: "KeyD"}, {label: "F", code: "KeyF"}, {label: "G", code: "KeyG"}, 
   {label: "H", code: "KeyH"}, {label: "J", code: "KeyJ"}, {label: "K", code: "KeyK"},
   {label: "L", code: "KeyL"}, {label: ";", code: "Semicolon"}, {label: "'", code: "Quote"}, {label: "Enter", code: "Enter"}],
  [{label: "Shift", code: "ShiftLeft"}, {label: "Z", code: "KeyZ"}, {label: "X", code: "KeyX"},
   {label: "C", code: "KeyC"}, {label: "V", code: "KeyV"}, {label: "B", code: "KeyB"}, {label: "N", code: "KeyN"},
   {label: "M", code: "KeyM"}, {label: ",", code: "Comma"}, {label: ".", code: "Period"},
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
textarea.placeholder = 'Enter your text ...'



// Добавление элемента на страницу
document.body.appendChild(title);
document.body.appendChild(textarea);
document.body.appendChild(keyboard);

