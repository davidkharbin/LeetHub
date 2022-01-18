/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function(flowerbed, n) {
  if (n === 0) return true;
  for (let i = 0; i < flowerbed.length; i++){
    if (ableToPlant(flowerbed[i - 1], flowerbed[i], flowerbed[i + 1])){
      flowerbed[i] = 1;
      n--;
      if (n === 0) return true;
    }
  }
  
  return false;
};

const ableToPlant = function(left, middle, right) {
  return ( (left === 0 || left === undefined) && (middle === 0) && (right === 0 || right === undefined))
}