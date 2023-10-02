function convertToRoman(num) {
    const roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let n = roman.length;
    let arr = [];
    let i = 0;
    
    while(i<n || num>0){
      if(num >= arabic[i]){
        arr.push(roman[i])
        num = num - arabic[i];
      } else{
        i+=1;
      }
    }
  
    return arr.join("");
  }
  
  console.log(convertToRoman(36));