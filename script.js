function section1(cc) {
    let term1 = cc / 4;
    let term2 = -2 * cc;
    let term3 = -1;
  
    return term1 + term2 + term3;
  }
  
  function section2(yy) {
    let term1 = yy * 5;
    return term1 / 4;
  }
  
  function section3(mm) {
    let term1 = 26;
    let term2 = mm + 1;
    let term3 = term1 * term2;
    return term3 / 10;
  }
  
  function submitForm() {
    console.log("form submited");
    let genderInput = document.getElementById("gender_input").value;
    let dob = document.getElementById("date_input").value;
    let akan_name_el = document.getElementById("akan_name");
  
    if (!genderInput || !dob) {
      return;
    }
  
    let CC = dob.slice(0, 2);
    let YY = dob.slice(2, 4);
    let MM = dob.slice(5, 7);
    let DD = dob.slice(8, 10);
  
    CC = parseInt(CC);
    YY = parseInt(YY);
    MM = parseInt(MM);
    DD = parseInt(DD);
  
    let sol = parseInt(section1(CC) + section2(YY) + section3(MM) + DD);
    sol = sol % 7;

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     let akanName = genderInput ==="male" ? maleNames[sol] : femaleNames[sol];
     let dayName = weekDays[sol];

  akan_name_el.innerText = `You were born on a ${dayName}. Your Akan name is: ${akanName}`;
}


  
