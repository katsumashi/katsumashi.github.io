function calculateAge() { // birthday is a date
  var ageDifMs = Date.now() - new Date("2007-01-08");
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  var ageFinal = Math.abs(ageDate.getUTCFullYear() - 1970);

  ageElement = document.getElementById('agediv').innerHTML=ageFinal + ", they/them";
}

calculateAge();