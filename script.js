const titleElement = document.querySelector('.coding');
const titleText = titleElement.textContent;
titleElement.textContent = ''; // Clear the title content

for (let i = 0; i < titleText.length; i++) {
  const span = document.createElement('span');
  span.textContent = titleText[i];
  span.style.animation = `appear ${(i + 1) * 0.1}s forwards`;
  titleElement.appendChild(span);
}