function convertToRoman (num) {
    const romanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    const arabicNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const n = romanNum.length
    const result = []
    let i = 0
  
    while (i < n || num > 0) {
      if (num >= arabicNum[i]) {
        result.push(romanNum[i])
        num -= arabicNum[i]
      } else {
        i++
      }
    }
  
    return result.join('')
  }
  
  console.log(convertToRoman(36))
  