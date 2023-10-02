function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let n = cid.length
    let unit = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    let subtotal = cid.map(item => item[1])
    let arr = [];
    let i=n-1;
    while(i>=0 && change>0){
      if(change>=unit[i] && change>=subtotal[i] && subtotal[i] != 0){
        arr.push(cid[i]);
        change = change-subtotal[i];
        change = Math.round((change + Number.EPSILON) * 100) / 100
        subtotal[i] = 0;
        i = i-1;
      } else if(change>=unit[i] && change<subtotal[i] && subtotal[i] != 0){
        arr.push([cid[i][0], Math.floor(change/unit[i])*unit[i]])
        change = change%unit[i];
        change = Math.round((change + Number.EPSILON) * 100) / 100
        subtotal[i] = subtotal[i] - Math.floor(change/unit[i])*unit[i]
        i = i-1;
      } else {
        arr.push([cid[i][0],0]);
        i = i-1;
      }
    }
  
    let total = subtotal.reduce((a, b) => a + b, 0);
    if(arr.length == 0 || change>0){
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if(total == 0){
      let newArr = [];
      for(let e in arr){
        newArr.push(arr[arr.length-e-1])
      }
      return {status: "CLOSED", change:newArr};
    } else{
      return {status: "OPEN", change:arr.filter(item => item[1] != 0)};
    }
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));