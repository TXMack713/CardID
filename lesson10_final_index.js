function idCard(){
    //Retrieve the user's information
    var firstName = document.getElementById("First Name").value;
    var lastName = document.getElementById("Last Name").value;
    var address = document.getElementById("Address").value;

    document.getElementById("postFullName").innerHTML = firstName+" "+lastName;
    document.getElementById("postAddress").innerHTML = address;

    var age = parseInt(document.getElementById("Age").value);
    var phoneNumber = parseInt(document.getElementById("Phone Number").value);
    numberArray = [];
    numberArray.push(age);
    numberArray.push(phoneNumber);

    for(var i=0; i<numberArray.length; i++){
        if (numberArray[i]<100){
            document.getElementById("postAge").innerHTML = "Age: " + age;
        }
        else if (numberArray[i]>100){
            document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber;
        }
    }
}