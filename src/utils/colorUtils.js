export const pickUpColor = (colorSet) => {
  const random = Math.floor(Math.random() * colorSet.length);
  return colorSet[random];
};

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

export const generateRandomColors = (nums) => {
    let arr = []
    for (var i = 0; i < nums; i++) {
        arr.push(randomColor())
    }
    return arr;
};

