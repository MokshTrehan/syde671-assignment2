// The report works without JavaScript. This adds a viewing-size control to a hybrid.
document.querySelectorAll('[data-hybrid-viewer]').forEach((box) => {
  const range = box.querySelector('input');
  const img = box.querySelector('img');
  const output = box.querySelector('output');
  function update() {
    const width = Math.min(Number(range.value), box.querySelector('.hybrid-stage').clientWidth);
    img.style.width = width + 'px'; output.textContent = Math.round(width) + ' px';
  }
  range.addEventListener('input', update); window.addEventListener('resize', update); update();
});
