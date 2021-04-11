var maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
//Create a function to extract date, month and year from entered dates of birth
var day=["0", "1", "2", "3", "4", "5", "6"]
function submitStaff(){
    var date=form.birthday.value.toString()
    var list=date.split("-")
    console.log(list)
    var cc=list(0).substring(0,2)

    // Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
}

