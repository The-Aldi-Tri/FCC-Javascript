function rot13 (str) {
    const letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const arrLetter = letter.split('')
    const decoded = []
  
    for (let i = 0; i < str.length; i++) {
      if (arrLetter.indexOf(str[i]) === -1) {
        decoded.push(str[i])
      } else {
        const idx = (arrLetter.indexOf(str[i]) + 13) % 26
        decoded.push(arrLetter[idx])
      }
    }
  
    return decoded.join('')
  }
  
  rot13('SERR PBQR PNZC')
  