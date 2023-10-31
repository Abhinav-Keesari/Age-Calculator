function age(event) {
    event.preventDefault();
    var d1 = parseInt(document.getElementById("day").value);
    var m1 = parseInt(document.getElementById("month").value);
    var y1 = parseInt(document.getElementById("year").value);

    // Check if the input is a valid date
    if (isNaN(d1) || isNaN(m1) || isNaN(y1) || d1 < 1 || m1 < 1 || y1 < 1900 || y1 > new Date().getFullYear()) {
        document.getElementById("errorMessage").textContent = "Please enter valid date, month, and y1 values.";
        return;
    }

    // Create a Date object with the input values
    var birthDate = new Date(y1, m1 - 1, d1); // m1 is 0-based, so we subtract 1

    // Check if the input date is valid
    if (isNaN(birthDate.getTime())) {
        document.getElementById("errorMessage").textContent = "Please enter a valid date.";
        return;
    }

    // Check if the input date is in the future (greater than tod1's date)
    var currentDate = new Date();
    if (birthDate > currentDate) {
        document.getElementById("errorMessage").textContent = "Birthdate cannot be in the future.";
        return;
    }

    // Calculate the age
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(d1 > d2){
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if(m1 > m2){
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    document.getElementById('age').innerHTML = 'Your Age is '+y+' Years '+m+' Months '+d+' Days';
  }