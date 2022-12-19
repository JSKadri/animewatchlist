/* We check for invalid inputs after submit is pressed
$('#checkSubmit').click(function(){
    /* Setup Initail Varibles 
    .value will get the value of the id
    var form = document.getElementById("form");
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var options = document.getElementById('options');
    var OtherTextBox = document.getElementById('learn');
    var email = document.getElementById('email');
    var number = document.getElementById('pnumber');
    var nonValid = false;

    /* Reset color back to default
    fname.style.borderColor="#ccc";
    lname.style.borderColor="#ccc";
    email.style.borderColor="#ccc";
    number.style.borderColor="#ccc";
    options.style.borderColor="#ccc";
    OtherTextBox.style.borderColor="#ccc";

    /* Make sure the user selected how they learned about us
    if(options.value == "-") {
        options.style.borderColor="red";
        nonValid = true;
    } else if(options.value == "other") {
        if(OtherTextBox.value == "") {
            OtherTextBox.style.borderColor="red";
            nonValid = true;
        }
    }

    /* Check for invalid inputs for the other textboxes 
    if(fname.value == "") {
        fname.style.borderColor="red";
        nonValid = true;
    }
    if(lname.value == "") {
        lname.style.borderColor="red";
        nonValid = true;
    }
    if(email.value == "") {
        email.style.borderColor="red";
        nonValid = true;
    } 
    /* Doesn't catch all but some simple invalid emails using REGEX
    else if(!String(email.value).toLocaleLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        email.style.borderColor="red";
        nonValid = true;
    }
    if(number.value == "") {
        number.style.borderColor="red";
        nonValid = true;
    } 
    /* Doesn't catch all but most invalid phone numbers using REGEX
    else if(!number.value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) 
    {
        number.style.borderColor="red";
        nonValid = true;
    }

    /* When an invalid input is detected to reload the page (Make the user fix!)
   if(nonValid == true) {
       nonValid = false;
       alert("Missing or Invalid Field. Please fill or fix the missing content.");
       function handleForm(event) { event.preventDefault(); } 
       form.addEventListener('submit', handleForm);
   } else {
    alert("Success!"); // --> This should be changed when we setup server side
   }
});

/* 
Valid Numbers using REGEX:
(123) 456-7890
(123)456-7890
123-456-7890
123.456.7890
1234567890
+31636363634
075-63546725

Valid Emails:
domain2 = com/ca/net/gov/etc..
myemail@domain.domain2
my.email@domain.domain2
myemail@domain.domain2.domain2 --> @domain.co.uk
*/

/* Add the dashes after the user has inputed the entire number */
function addDash(pnumber){
    pnumber = pnumber.split('-').join(''); // If there are already dashes then remove it

    /* Only adjust the number if the user has entered 10 digits*/
    if(pnumber.match(/^\d{10}$/)) {
        /* When the user input is 5554443333 then add the dashes -> 555-444-3333 */
        let finalVal = pnumber.replace(/(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/, '$1$2$3-$4$5$6-$7$8$9$10');
        document.getElementById('pnumber').value = finalVal;
    }
}

/* We check for invalid inputs after submit is pressed */
$('#checkLogin').click(function(){
    /* Setup Initail Varibles 
    .value will get the value of the id */
    var form = document.getElementById("form");
    var username = document.getElementById("uname");
    var password = document.getElementById('password');
    var nonValid = false;

    /* Reset color back to default */
    username.style.borderColor="#ccc";
    password.style.borderColor="#ccc";
    
    /* Check for invalid inputs for the other textboxes */
    if(username.value == "") {
        username.style.borderColor="red";
        nonValid = true;
    }
    if(password.value == "") {
        password.style.borderColor="red";
        nonValid = true;
    }

    /* When an invalid input is detected to reload the page (Make the user fix!) */
   if(nonValid == true) {
       nonValid = false;
       alert("Missing or Invalid Field. Please fill or fix the missing content.");
       function handleForm(event) { event.preventDefault(); } 
       form.addEventListener('submit', handleForm);
   } else {
    alert("Success!"); // --> This should be changed when we setup server side
   }
});

$('#checkRegister').click(function(){
    /* Setup Initail Varibles 
    .value will get the value of the id */
    var form = document.getElementById("form");
    var username = document.getElementById('uname');
    var email = document.getElementById('email');
    var password = document.getElementById('pass');
    var confirmPassword = document.getElementById('cpass');
    var nonValid = false;

    /* Reset color back to default */
    username.style.borderColor="#ccc";
    email.style.borderColor="#ccc";
    password.style.borderColor="#ccc";
    confirmPassword.style.borderColor="#ccc";

    /* Check for invalid inputs for the other textboxes */
    if(username.value == "") {
        username.style.borderColor="red";
        nonValid = true;
    }
    if(password.value == "") {
        password.style.borderColor="red";
        nonValid = true;
    }
    if(confirmPassword.value == "" || confirmPassword.value != password.value) {
        confirmPassword.style.borderColor="red";
        nonValid = true;
    }

    if(email.value == "") {
        email.style.borderColor="red";
        nonValid = true;
    } 
    /* Doesn't catch all but some simple invalid emails using REGEX */
    else if(!String(email.value).toLocaleLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        email.style.borderColor="red";
        nonValid = true;
    }

    /* When an invalid input is detected to reload the page (Make the user fix!) */
   if(nonValid == true) {
    nonValid = false;
    alert("Missing or Invalid Field. Please fill or fix the missing content.");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);
    } else {
    alert("Success!"); // --> This should be changed when we setup server side
    }
});
