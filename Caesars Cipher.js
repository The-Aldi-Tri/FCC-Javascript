function rot13(str) {
    let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    letter = letter.split("");
    let decode = [];
  
    for(let i=0; i<str.length; i++){
      if(letter.indexOf(str[i]) == -1){
        decode.push(str[i]);
      } else{
        let idx = (letter.indexOf(str[i])+13)%26
        decode.push(letter[idx]);
      }
    }
    
    return decode.join("");
  }
  
  rot13("SERR PBQR PNZC");