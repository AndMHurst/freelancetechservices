//Vanallia JavaScript//

//Validation for contactus form//

function validateTextbox() {

  var box = document.getElementById("name");

  if (box.value == "" ){
    alert("The field marked in red cannot be blank");

    box.focus();
    box.style.border = "solid 3px red";
    return false;
  }

  if (box.value.length < 4 ){
    alert("The field marked in red must be atleast 4 characters long");

    box.focus();
    box.style.border = "solid 3px red";
    return false;
  }

}
//The "return false" boolean command is required. //
//If command was "return true" for the "if" condition then after the alert pops up it would send message to server, //
//which we don't want if there's no input greater than 3 characters.//


//This function contains 2 block scopes (the if conditions) for the same variable (box).//
//If we tried to combine the if statements for the execution of the var box,//
//then the program would get confused because we use multiples of the same execution of the variable: alert, box.focus, return false.//
//To combine the if conditions we could make 2 varialbes for the same element,"name",(e.g. box1 and box2)//
//however, we would still have an issue of the function not being able to distingush between which alert command to use//
//Therefore, even in a scenario of 2 varialbe we would still need 2 block scope if conditions to distingush what alert to command.//
