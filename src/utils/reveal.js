// I get this func from internet, need to many time for write this myself :D Sorry
export const revealed = (arr, x, y, newNonMinesCount) => {
  if (arr[x][y].open) {
    return;
  }

  let flipped = [];
  flipped.push(arr[x][y]);
  while (flipped.length !== 0) {
    let single = flipped.pop();

    if (!single.open) {
      newNonMinesCount--;
      single.open = true;
    }

    if (single.value !== 0) {
      break;
    }

    if (
      single.x > 0 &&
      single.y > 0 &&
      arr[single.x - 1][single.y - 1].value === 0 &&
      !arr[single.x - 1][single.y - 1].open
    ) {
      flipped.push(arr[single.x - 1][single.y - 1]);
    }

    if (
      single.x < arr.length - 1 &&
      single.y < arr[0].length - 1 &&
      arr[single.x + 1][single.y + 1].value === 0 &&
      !arr[single.x + 1][single.y + 1].open
    ) {
      flipped.push(arr[single.x + 1][single.y + 1]);
    }

    if (
      single.x < arr.length - 1 &&
      single.y > 0 &&
      arr[single.x + 1][single.y - 1].value === 0 &&
      !arr[single.x + 1][single.y - 1].open
    ) {
      flipped.push(arr[single.x + 1][single.y - 1]);
    }

    if (
      single.x > 0 &&
      single.y < arr[0].length - 1 &&
      arr[single.x - 1][single.y + 1].value === 0 &&
      !arr[single.x - 1][single.y + 1].open
    ) {
      flipped.push(arr[single.x - 1][single.y + 1]);
    }

    if (
      single.x > 0 &&
      arr[single.x - 1][single.y].value === 0 &&
      !arr[single.x - 1][single.y].open
    ) {
      flipped.push(arr[single.x - 1][single.y]);
    }

    if (
      single.x < arr.length - 1 &&
      arr[single.x + 1][single.y].value === 0 &&
      !arr[single.x + 1][single.y].open
    ) {
      flipped.push(arr[single.x + 1][single.y]);
    }

    if (
      single.y > 0 &&
      arr[single.x][single.y - 1].value === 0 &&
      !arr[single.x][single.y - 1].open
    ) {
      flipped.push(arr[single.x][single.y - 1]);
    }

    if (
      single.y < arr[0].length - 1 &&
      arr[single.x][single.y + 1].value === 0 &&
      !arr[single.x][single.y + 1].open
    ) {
      flipped.push(arr[single.x][single.y + 1]);
    }

    if (single.x > 0 && single.y > 0 && !arr[single.x - 1][single.y - 1].open) {
      arr[single.x - 1][single.y - 1].open = true;
      newNonMinesCount--;
    }

    if (single.y > 0 && !arr[single.x][single.y - 1].open) {
      arr[single.x][single.y - 1].open = true;
      newNonMinesCount--;
    }

    if (
      single.x < arr.length - 1 &&
      single.y > 0 &&
      !arr[single.x + 1][single.y - 1].open
    ) {
      arr[single.x + 1][single.y - 1].open = true;
      newNonMinesCount--;
    }

    if (single.x > 0 && !arr[single.x - 1][single.y].open) {
      arr[single.x - 1][single.y].open = true;
      newNonMinesCount--;
    }

    if (single.x < arr.length - 1 && !arr[single.x + 1][single.y].open) {
      arr[single.x + 1][single.y].open = true;
      newNonMinesCount--;
    }

    if (
      single.x > 0 &&
      single.y < arr[0].length - 1 &&
      !arr[single.x - 1][single.y + 1].open
    ) {
      arr[single.x - 1][single.y + 1].open = true;
      newNonMinesCount--;
    }

    if (single.y < arr[0].length - 1 && !arr[single.x][single.y + 1].open) {
      arr[single.x][single.y + 1].open = true;
      newNonMinesCount--;
    }

    if (
      single.x < arr.length - 1 &&
      single.y < arr[0].length - 1 &&
      !arr[single.x + 1][single.y + 1].open
    ) {
      arr[single.x + 1][single.y + 1].open = true;
      newNonMinesCount--;
    }
  }

  return { arr, newNonMinesCount };
};
