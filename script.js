
const gridContainer = document.getElementById("grid-container");
const interval = 16;

grid.style.cssText = `grid-template: repeat(${interval} 1fr) / repeat(${interval} 1fr)`

for (let i = 0; i < interval * interval; i++) {
  let grid = document.createElement("div");
  grid.classList.add("grid-cell");
  grid.dataset.key = i;
  gridContainer.append(grid);
}