function telephoneCheck(str) {
    let regex = /^(1\s|1)?(\(\d{3}\)|\d{3})(\s|-)?(\d{3})(\s|-)?(\d{4})$/g;
    // ^(1\s|1)? -> Start of the string is 1 (followed by space) or 1(no space) or nothing at all.
    // (\(\d{3}\)|\d{3}) -> 3 digit number in bracket or no bracket. ex: (555) or 555
    // (\s|-)? -> Space or hyphen(-) or nothing at all.
    // (\d{3}) -> 3 digit number.
    // (\s|-)? -> Space or hyphen(-) or nothing at all.
    // (\d{4})$ -> 4 digit number at the end of string.
    return regex.test(str);
  }
  
  console.log(telephoneCheck("(275)76227382"));