// Находим кнопку и элемент div
const button = document.querySelector('.hh');
const div = document.querySelector('.kk');

// Добавляем обработчик события на клик по кнопке
button.addEventListener('click', function() {
  // Генерируем случайный цвет
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  
  // Устанавливаем сгенерированный цвет фона элемента div
  div.style.backgroundColor = randomColor;
});