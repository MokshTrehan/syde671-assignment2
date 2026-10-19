// Every required result is visible without JavaScript; this viewer changes size only.
document.querySelectorAll('[data-hybrid-viewer]').forEach((box) => {
  const range = box.querySelector('input');
  const img = box.querySelector('img');
  const output = box.querySelector('output');
  const choice = box.querySelector('select');
  function update() {
    const width = Math.min(Number(range.value), box.querySelector('.hybrid-stage').clientWidth);
    img.style.width = width + 'px';
    output.textContent = Math.round(width) + ' px';
  }
  box.querySelectorAll('[data-view-size]').forEach((button) => {
    button.addEventListener('click', () => { range.value = button.dataset.viewSize; update(); });
  });
  choice.addEventListener('change', () => {
    img.src = 'images/hybrid_' + choice.value + '_final.jpg';
    img.alt = choice.options[choice.selectedIndex].text + ' hybrid at an adjustable display size';
  });
  range.addEventListener('input', update);
  window.addEventListener('resize', update);
  update();
});
