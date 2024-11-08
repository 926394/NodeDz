
function nameRandom() {
  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E'];
  const min_len = 1;
  const max_len = 8;

  // let total_len = random.randint(min_len, max_len);
  let alpha_len = random.randint(min_len, max_len);
  let alpha = ''.join(random.choices(letters, k=alpha_len));

  return alpha;  
}

// function subtract(x, y) {
//   return x - y;  
// }

module.exports = {nameRandom, subtract};