function checkCashRegister (price, cash, cid) {
    let changeTotal = cash - price
    const cidTotal = cid.reduce((acc, curr) => acc + curr[1], 0)
    if (changeTotal > cidTotal) return { status: 'INSUFFICIENT_FUNDS', change: [] }
    if (changeTotal === cidTotal) return { status: 'CLOSED', change: cid }
  
    const cidObj = cid.reduce((acc, curr) => {
      const key = curr[0]
      const value = curr[1]
      acc[key] = value
      return acc
    }, {}
    )
  
    const currencyUnitAndAmount = {
      'ONE HUNDRED': 100.00,
      TWENTY: 20.00,
      TEN: 10.00,
      FIVE: 5.00,
      ONE: 1.00,
      QUARTER: 0.25,
      DIME: 0.10,
      NICKEL: 0.05,
      PENNY: 0.01
    }
  
    const change = []
    for (const key in currencyUnitAndAmount) {
      if (changeTotal >= currencyUnitAndAmount[key] && changeTotal >= cidObj[key]) {
        changeTotal -= cidObj[key]
        changeTotal = Math.round((changeTotal) * 100) / 100
        change.push([key, Math.round((cidObj[key]) * 100) / 100])
      } else if (changeTotal >= currencyUnitAndAmount[key] && changeTotal < cidObj[key]) {
        const changeTotalBefore = changeTotal
        changeTotal %= currencyUnitAndAmount[key]
        changeTotal = Math.round((changeTotal) * 100) / 100
        change.push([key, Math.round(((changeTotalBefore - changeTotal)) * 100) / 100])
      }
    }
  
    if (changeTotal > 0) return { status: 'INSUFFICIENT_FUNDS', change: [] }
    // If you need to update cid(cash-in-drawer) //
    // const updatedCidObj = cidObj
    // for (let i = 0; i < change.length; i++) {
    //   updatedCidObj[change[i][0]] = Math.round((updatedCidObj[change[i][0]] - change[i][1]) * 100) / 100
    // }
    // const updatedCid = Object.entries(updatedCidObj);
    return { status: 'OPEN', change }
  }
  
  console.log(checkCashRegister(19.5, 20, [['PENNY', 0.5], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]))
  