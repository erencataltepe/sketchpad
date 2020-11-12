
const gridContainer = document.getElementById("grid-container");
const interval = 4;

gridContainer.style.cssText = `grid-template: repeat(${interval}, 1fr) / repeat(${interval}, 1fr);`

for (let i = 0; i < interval * interval; i++) {
  let grid = document.createElement("div");
  grid.classList.add("grid-cell");
  grid.dataset.key = i;
  gridContainer.append(grid);
}

const gridCell = document.querySelectorAll(".grid-cell");

gridCell.forEach(cell => {
  cell.addEventListener("mouseover", e => {
    //makeDarker(e);
    setRandomColor(e);
  })
})
    


function makeDarker(event) {
  const cell = event.target;
  const cellStyle = getComputedStyle(cell);
  const currentBackgroundColor = getRGB(cellStyle.backgroundColor);
  const newBackgroundColor = `rgb(${Number(currentBackgroundColor.red) - 25}
    , ${Number(currentBackgroundColor.green) - 25}, ${Number(currentBackgroundColor.blue) - 25})`;

  cell.style.backgroundColor = newBackgroundColor;
}

function setRandomColor(event) {
  
  const cell = event.target;
  const cellCurrentBackgroundColor = cell.style.backgroundColor;
// rgb(256,256,256) nedense javascriptle get etmek istediğimbde boş dönüyor. Bundan
  //dolayı burada background color boş ise düz beyazdır diyip random renk atıyorum. 
  if (cellCurrentBackgroundColor == "") {
    
    const newRed = Math.floor(Math.random() * 256);
    const newGreen = Math.floor(Math.random() * 256);
    const newBlue = Math.floor(Math.random() * 256);
    
    cell.style.backgroundColor = `rgb(${newRed}, ${newGreen}, ${newBlue})`;
  
  } else {
    
    const currentRGBColors = getRGB(cellCurrentBackgroundColor);
    const newRed = currentRGBColors.red * 0.9;
    const newGreen = currentRGBColors.green * 0.9;
    const newBlue = currentRGBColors.blue * 0.9;

    cell.style.backgroundColor = `rgb(${newRed}, ${newGreen}, ${newBlue})`;
  
  }
}

//Bu fonksiyon RGB color'ı extract ediyor.
function getRGB(str){
  let match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
  return match ? {
    red: match[1],
    green: match[2],
    blue: match[3]
  } : {};
}

