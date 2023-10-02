function telephoneCheck(str) {
    let regex = /^(1\s|1)?(\(\d{3}\)|\d{3})(\s|-)?(\d{3})(\s|-)?(\d{4})$/g;
    return regex.test(str);
  }
  
  console.log(telephoneCheck("(275)76227382"));