export default function shuffle(arr) {
  let arrLength = arr.length;
  while (arrLength) {
    let randomIndex = Math.floor(Math.random() * arrLength);
    arrLength--;
    let temp = arr[randomIndex];
    arr[randomIndex] = arr[arrLength];
    arr[arrLength] = temp;
  }
  return arr;
}