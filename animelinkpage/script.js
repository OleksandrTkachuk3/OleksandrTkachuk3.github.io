var imageContainer = document.querySelector('.image-container');
var hoverSound1 = document.getElementById('hover-sound1');
var hoverSound2 = document.getElementById('hover-sound2');
var isPlaying = false; // Флаг для отслеживания состояния воспроизведения звука
var currentSound = null; // Текущий звук

imageContainer.addEventListener('mouseover', function() {
  if (!isPlaying) { // Если звук не воспроизводится
    var randomSound = Math.random() < 0.5 ? hoverSound1 : hoverSound2; // Случайный выбор звука

    currentSound = randomSound; // Сохраняем текущий звук
    currentSound.currentTime = 0; // Сбрасываем время воспроизведения на начало
    currentSound.play(); // Воспроизведение звука
    isPlaying = true; // Устанавливаем флаг воспроизведения в true
  }
});

imageContainer.addEventListener('mouseout', function() {
  if (isPlaying) { // Если звук воспроизводится
    currentSound.pause(); // Приостанавливаем звук
    isPlaying = false; // Устанавливаем флаг воспроизведения в false
  }
});

imageContainer.addEventListener('click', function() {
  if (!isPlaying) { // Если звук не воспроизводится
    var randomSound = Math.random() < 0.5 ? hoverSound1 : hoverSound2; // Случайный выбор звука

    currentSound = randomSound; // Сохраняем текущий звук
    currentSound.currentTime = 0; // Сбрасываем время воспроизведения на начало
    currentSound.play(); // Воспроизведение звука
    isPlaying = true; // Устанавливаем флаг воспроизведения в true
  }
});
