function drawTriangle(height, symbol) {
  let i = 1;
  while (i <= height) {
    let line = "";
    let j = 1;
    while (j <= i) {
      line += symbol;
      j++;
    }
    console.log(line);
    i++;
  }
}

drawTriangle(5, '*');