function updateMaskRects() {
    const lines = document.querySelectorAll('.line');
    const mask = document.querySelector('#cutouts');
    // Удалим старые окна, кроме белого фона
    mask.querySelectorAll('rect[fill="black"]').forEach(rect => rect.remove());
  
    lines.forEach((line, i) => {
      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("x", "300");
      rect.setAttribute("y", `${60 + i * 80}`);
      rect.setAttribute("width", "100");
      rect.setAttribute("height", "60");
      rect.setAttribute("fill", "black");
      mask.appendChild(rect);
    });
  }
  
  // При загрузке
  window.addEventListener("load", updateMaskRects);
  // При ресайзе — пересчёт, т.к. строки могут "переломиться"
  window.addEventListener("resize", () => {
    setTimeout(updateMaskRects, 300);
  });
  