function palindrome (str) {
  const alphaNum = str.replace(/[^A-Za-z0-9]/gi, '').toLowerCase()
  const n = alphaNum.length
  const arr = alphaNum.split('')
  let flag = true

  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (arr[i] !== arr[n - i - 1]) {
      flag = false
      break
    }
  }

  return flag
}

console.log(palindrome('My age is 0, 0 si ega ym.'))
