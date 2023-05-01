const title = document.createElement('h1');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
const keyboardDescription = document.createElement('p');
const language = document.createElement('p');

// Добавление класса
document.body.classList.add('body');
title.classList.add('title');
textarea.classList.add('textarea');
keyboard.classList.add('keyboard');
keyboardDescription.classList.add('keyboard-description');
language.classList.add('language');

// Создание кнопок
const keys = [
  [{ label: '`', code: 'Backquote' }, { label: '1', code: 'Digit1' },
    { label: '2', code: 'Digit2' }, { label: '3', code: 'Digit3' },
    { label: '4', code: 'Digit4' }, { label: '5', code: 'Digit5' },
    { label: '6', code: 'Digit6' }, { label: '7', code: 'Digit7' },
    { label: '8', code: 'Digit8' }, { label: '9', code: 'Digit9' },
    { label: '0', code: 'Digit0' }, { label: '-', code: 'Minus' },
    { label: '=', code: 'Equal' }, { label: 'Backspace', code: 'Backspace' }],
  [{ label: 'Tab', code: 'Tab' }, { label: 'q', code: 'KeyQ' }, { label: 'w', code: 'KeyW' }, { label: 'e', code: 'KeyE' },
    { label: 'r', code: 'KeyR' }, { label: 't', code: 'KeyT' }, { label: 'y', code: 'KeyY' }, { label: 'u', code: 'KeyU' },
    { label: 'i', code: 'KeyI' }, { label: 'o', code: 'KeyO' }, { label: 'p', code: 'KeyP' }, { label: '[', code: 'BracketLeft' },
    { label: ']', code: 'BracketRight' }, { label: '\\', code: 'Backslash' }, { label: 'En/Ru', code: 'En_Ru' }],
  [{ label: 'CapsLock', code: 'CapsLock' }, { label: 'a', code: 'KeyA' }, { label: 's', code: 'KeyS' },
    { label: 'd', code: 'KeyD' }, { label: 'f', code: 'KeyF' }, { label: 'g', code: 'KeyG' },
    { label: 'h', code: 'KeyH' }, { label: 'j', code: 'KeyJ' }, { label: 'k', code: 'KeyK' },
    { label: 'l', code: 'KeyL' }, { label: ';', code: 'Semicolon' }, { label: "'", code: 'Quote' }, { label: 'Enter', code: 'Enter' }],
  [{ label: 'Shift', code: 'ShiftLeft' }, { label: 'z', code: 'KeyZ' }, { label: 'x', code: 'KeyX' },
    { label: 'c', code: 'KeyC' }, { label: 'v', code: 'KeyV' }, { label: 'b', code: 'KeyB' }, { label: 'n', code: 'KeyN' },
    { label: 'm', code: 'KeyM' }, { label: ',', code: 'Comma' }, { label: '.', code: 'Period' },
    { label: '/', code: 'Slash' }, { label: '↑', code: 'ArrowUp' }, { label: 'Shift', code: 'ShiftRight' }],
  [{ label: 'Ctrl', code: 'ControlLeft' }, { label: 'Win', code: 'MetaLeft' },
    { label: 'Alt', code: 'AltLeft' }, { label: ' ', code: 'Space' }, { label: 'Alt', code: 'AltRight' },
    { label: '←', code: 'ArrowLeft' }, { label: '↓', code: 'ArrowDown' }, { label: '→', code: 'ArrowRight' },
    { label: 'Ctrl', code: 'ControlRight' }],
];

for (let i = 0; i < keys.length; i += 1) {
  const row = document.createElement('div');
  row.classList.add('keyboard-row');
  for (let j = 0; j < keys[i].length; j += 1) {
    const key = document.createElement('button');
    key.classList.add('keyboard-key');
    key.textContent = keys[i][j].label;
    key.setAttribute('data-code', keys[i][j].code);
    if (keys[i][j].code === 'Backspace') {
      key.classList.add('backspace');
    }
    if (keys[i][j].code === 'Tab' || keys[i][j].code === 'En_Ru' || keys[i][j].code === 'CapsLock'
    || keys[i][j].code === 'Enter' || keys[i][j].code === 'ShiftLeft' || keys[i][j].code === 'ShiftRight') {
      key.classList.add('tab');
    }
    if (keys[i][j].code === 'Space') {
      key.classList.add('space');
    }
    if (keys[i][j].code === 'ControlLeft' || keys[i][j].code === 'MetaLeft' || keys[i][j].code === 'AltLeft'
    || keys[i][j].code === 'AltRight' || keys[i][j].code === 'ArrowLeft' || keys[i][j].code === 'ArrowDown'
    || keys[i][j].code === 'ArrowRight' || keys[i][j].code === 'ControlRight' || keys[i][j].code === 'ArrowUp') {
      key.classList.add('dark');
    }
    row.appendChild(key);
  }
  keyboard.appendChild(row);
}

// Нажатие на кнопки, событие keydown
document.addEventListener('keydown', (e) => {
  // Находим кнопку на экранной клавиатуре, соответствующую нажатой клавише
  const key = document.querySelector(`.keyboard-key[data-code="${e.code}"]`);
  // Если кнопка найдена, подсвечиваем ее
  if (key) {
    key.classList.add('highlight');
  }
});

// Отпускаем кнопки, событие keyup
document.addEventListener('keyup', (e) => {
  // Находим кнопку на экранной клавиатуре, соответствующую отпущенной клавише
  const key = document.querySelector(`.keyboard-key[data-code="${e.code}"]`);
  // Если кнопка найдена, убираем подсветку
  if (key) {
    key.classList.remove('highlight');
  }
});

// Установка св-в и текстового содержимого
title.textContent = 'RSS Virtual keyboard';
textarea.rows = 5;
textarea.cols = 50;
textarea.placeholder = 'Enter your text ...';
keyboardDescription.textContent = 'The keyboard was created in the Windows operating system';
language.textContent = 'To switch the language combination: left ctrl + alt';

// Привязка клика мыши по клавиатуре и вывод в поле textarea, добавление класса при нажатии
keyboard.addEventListener('mousedown', (e) => {
  const key = e.target;
  key.classList.add('highlight');
});

keyboard.addEventListener('mouseup', (e) => {
  const key = e.target;
  const keycode = key.dataset.code;
  key.classList.remove('highlight');

  // Кнопка Backspace, если нажата
  if (keycode === 'Backspace') {
    const { selectionStart } = textarea;
    const { selectionEnd } = textarea;
    // Проверяем где курсор и получаем новую строку с курсором сдвинутім влево
    if (selectionStart === selectionEnd) {
      e.preventDefault();
      textarea.value = textarea.value.substring(0, selectionStart - 1)
          + textarea.value.substring(selectionEnd);
      textarea.setSelectionRange(selectionStart - 1, selectionStart - 1);
    } else {
      textarea.value = textarea.value.slice(0, -1);
    }
  } else
  // Кнопка Enter
  if (keycode === 'Enter') {
    e.preventDefault();
    textarea.value += '\n';
  } else
  // Кнопка Tab
  if (keycode === 'Tab') {
    e.preventDefault();
    textarea.value += '\t';
  } else {
    textarea.value += key.textContent;
  }
});

// Добавление элемента на страницу
document.body.appendChild(title);
document.body.appendChild(textarea);
document.body.appendChild(keyboard);
document.body.appendChild(keyboardDescription);
document.body.appendChild(language);
