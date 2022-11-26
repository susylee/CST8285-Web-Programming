// Su Yeoun Lee - Lab5

function validate() {

    // 1. email textbox value is a valid email structure (xyx@xyz.xyz) 
    var emailExpres = document.getElementById("email").value;
    var reg = /^[a-z]{3}@[a-z]{3}.[a-z]{3}/;


    if (emailExpres.search(reg) === -1) {
        if (document.getElementsByClassName('newClass1').length > 0) {
            document.getElementsByClassName('newClass1').style.remove();
        }

        //document.querySelector("#email").setAttribute('style', "border: 2px solid red");
        document.querySelector("#email").style = "border: 2px solid red";

        var newDiv = document.createElement("div");
        newDiv.innerText = 'X Email address should be non-empty with the format xyx@xyz.xyz.';
        newDiv.setAttribute('style', "color:red");
        newDiv.className = "newClass1";
        document.querySelector('.textfield:first-child').appendChild(newDiv);

        // return false;
    }

    // 2. login name should be non-empty (do not use a required tag in HTML) and less than 20 characters long.
    if (document.getElementById("login").value === "" || document.forms[0].login.value.length > 20) {
        if (document.getElementsByClassName('newClass2').length > 0) {
            document.getElementsByClassName('newClass2').style.remove();
        }

        document.getElementById("login").setAttribute('style', "border: 2px solid red");

        var newDiv = document.createElement("div");
        newDiv.innerText = 'X User name should be non-empty, and within 20 characters long.';
        newDiv.setAttribute('style', "color:red");
        newDiv.className = "newClass2";
        document.querySelector('.textfield:nth-child(2)').appendChild(newDiv);
      //  return false;
    }

    // 3. password should be at least 6 characters long 
    // 4. password should have at least 1 uppercase letter and 1 lowercase letter 
    var passVal = document.forms[0].pass.value;
    var passReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]){6,}/;

    if (passVal.search(passReg) === -1) {
        if (document.getElementsByClassName('newClass3').length > 0) {
            document.getElementsByClassName('newClass3').style.remove();
        }
        //alert("Password should be at least 6 characters: 1 uppercase, 1 lowercase.")
        document.getElementById("pass").setAttribute('style', "border: 2px solid red");

        var newDiv = document.createElement("div");
        newDiv.className = "newClass3";

        newDiv.innerText = 'X Password should be at least 6 characters: 1 uppercase, 1 lowercase.';
        newDiv.setAttribute('style', "color:red");
        document.querySelector('.textfield:nth-child(3)').appendChild(newDiv);
        //return false;
    }

    // 5. Ensure that both the password fields have the same value and are not blank
    if (document.forms[0].pass.value !== document.forms[0].pass2.value || (document.forms[0].pass.value === "" && document.forms[0].pass2.value === "")) {
        if (document.getElementsByClassName('newClass4').length > 0) {
            document.getElementsByClassName('newClass4').style.remove();
        }
        //alert("Both passwd fiels should be same.")
        document.getElementById("pass2").setAttribute('style', "border: 2px solid red");

        var newDiv = document.createElement("div");
        newDiv.className = "newClass4";

        newDiv.innerText = 'X Please retype password.';
        newDiv.setAttribute('style', "color:red");
        document.querySelector('.textfield:nth-child(4)').appendChild(newDiv);
       // return false;
    }


    // 7. Ensure that the terms and conditions are accepted
    if (!document.getElementById("terms").checked) {
        //alert("Please check terms and conditions.");
        if (document.getElementsByClassName('newClass6').length > 0) {
            document.getElementsByClassName('newClass6').style.remove();
        }

        var newSpan = document.createElement("span");
        newSpan.className = "newClass5";

        newSpan.textContent = 'X Please accept the terms and conditions.';
        newSpan.setAttribute('style', "color:red;");

        document.getElementById("labelTerms").appendChild(newSpan);

        return false;
    }

 

} // end of validate()

// 6. If the user selects to receive a newsletter, immediately alert them about possible spam by setting an event on this field.
var news = document.getElementById("newsletter");
news.addEventListener("click", function () { alert("You could receive a SPAM ! ! "); });

// 2-1. When you send this data (on successful validation) convert the login name to all lower-case alphabetic characters 
// (you will confirm this in the get header) 
var signButton = document.getElementById("signUp");
    signButton.addEventListener("click", function () {
    document.querySelector('input[id="login"]').value = document.querySelector('input[id="login"]').value.toLowerCase();
});
