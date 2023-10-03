function checkCashRegister (price, cash, cid) {
    let change = cash - price
    const n = cid.length
    const unit = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]
    const subtotal = cid.map(item => item[1])
    const arr = []
    let i = n - 1
    while (i >= 0 && change > 0) {
      if (change >= unit[i] && change >= subtotal[i] && Number(subtotal[i]) !== 0) {
        arr.push(cid[i])
        change = change - subtotal[i]
        change = Math.round((change + Number.EPSILON) * 100) / 100
        subtotal[i] = 0
        i--
      } else if (change >= unit[i] && change < subtotal[i] && Number(subtotal[i]) !== 0) {
        arr.push([cid[i][0], Math.floor(change / unit[i]) * unit[i]])
        change = change % unit[i]
        change = Math.round((change + Number.EPSILON) * 100) / 100
        subtotal[i] = subtotal[i] - Math.floor(change / unit[i]) * unit[i]
        i--
      } else {
        arr.push([cid[i][0], 0])
        i--
      }
    }
  
    const total = subtotal.reduce((a, b) => a + b, 0)
    if (arr.length === 0 || change > 0) {
      return { status: 'INSUFFICIENT_FUNDS', change: [] }
    } else if (Number(total) === 0) {
      const newArr = []
      for (const e in arr) {
        newArr.push(arr[arr.length - e - 1])
      }
      return { status: 'CLOSED', change: newArr }
    } else {
      return { status: 'OPEN', change: arr.filter(item => Number(item[1]) !== 0) }
    }
  }
  
  console.log(checkCashRegister(19.5, 20, [['PENNY', 0.5], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]))
  