const name = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const phno = document.getElementById("phno")
const bio = document.getElementById("bio")


const button = document.getElementById("submitbutton")
const error = {
    name: true,
    lastName: true,
    email: true,
    password: true,
    phno: true,
    bio: true
}



function inputValueChange() {
    const helperText1 = document.getElementById("helperText1")
    const helperText6 = document.getElementById("helperText6")
    const helperText2 = document.getElementById("helperText2")
    const helperText3 = document.getElementById("helperText3")
    const helperText4 = document.getElementById("helperText4")
    const helperText5 = document.getElementById("helperText5")
    const helperText7 = document.getElementById("helperText7")

    if (name.value === "") {
        error.name = true
        name.classList.add("error")
        helperText1.innerText = "First name must be alphanumeric and contain 3 - 16 characters"
    }
    else {
        error.name = false
        name.classList.remove("error")
        helperText1.innerText = ""

        if (name.value.length < 3) {
            error.name = true
            name.classList.add("error")
            helperText1.innerText = "First name must be contain 3 - 16 characters"
        }
        else {
            error.name = false
            name.classList.remove("error")
            helperText1.innerText = ""

            if (/^[a-zA-Z ]*$/.test(name.value) == false) {
                error.name = true
                name.classList.add("error")
                helperText1.innerText = "First name must be alphanumeric"
            }
            else {
                error.name = false
                name.classList.remove("error")
                helperText1.innerText = ""
            }
        }
    }

    if (lastName.value === "") {
        error.lastName = true
        lastName.classList.add("error")
        helperText6.innerText = "First name must be alphanumeric and contain 3 - 16 characters"
    }
    else {
        error.lastName = false
        lastName.classList.remove("error")
        helperText6.innerText = ""

        if (lastName.value.length < 3) {
            error.lastName = true
            lastName.classList.add("error")
            helperText6.innerText = "First name must be contain 3 - 16 characters"
        }
        else {
            error.lastName = false
            lastName.classList.remove("error")
            helperText6.innerText = ""

            if (/^[a-zA-Z ]*$/.test(lastName.value) == false) {
                error.lastName = true
                lastName.classList.add("error")
                helperText6.innerText = "First name must be alphanumeric."
            }
            else {
                error.lastName = false
                lastName.classList.remove("error")
                helperText6.innerText = ""
            }
        }
    }

    if ((email.value === "" || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}[a-zA-Z\s])+$/.test(email.value) == false)) {
        helperText2.innerText = "Email must be valid address, e.g. example@example.com"
        error.email = true
        email.classList.add("error")
    }
    else {
        helperText2.innerText = ""
        error.email = false
        email.classList.remove("error")
    }

    if (password.value === "") {
        helperText3.innerText = "password must be alphanumeric and numeric digit (@, _ and - are also allowed)"
        error.password = true
        password.classList.add("error")
    }
    else {
        helperText3.innerText = ""
        error.password = false
        password.classList.remove("error")

        if (password.value.length < 6) {
            helperText3.innerText = "between 6-20 characters"
            error.password = true
            password.classList.add("error")
        }
        else {
            helperText3.innerText = ""
            error.password = false
            password.classList.remove("error")

            if ((/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/.test(password.value) == false)) {
                helperText3.innerText = " at least one numeric digit, one uppercase and one lowercase letter"
                error.password = true
                password.classList.add("error")
            }
            else {
                helperText3.innerText = ""
                error.password = false
                password.classList.remove("error")
            }
        }
    }



    if (phno.value === "") {
        error.phno = true
        phno.classList.add("error")
        helperText4.innerText = "A valid Telephone number(10 digits and 333-333-3334)"
    }
    else {
        error.phno = false
        phno.classList.remove("error")
        helperText4.innerText = ""

        if (phno.value.length == 9) {
            error.phno = true
            phno.classList.add("error")
            helperText4.innerText = "Phone no. should be of 10 digits"
        }
        else {
            error.phno = false
            phno.classList.remove("error")
            helperText4.innerText = ""

            if (/^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/.test(phno.value) == false) {
                error.phno = true
                phno.classList.add("error")
                helperText4.innerText = "Please enter valid Phone no."
            }
            else {
                error.phno = false
                phno.classList.remove("error")
                helperText4.innerText = ""


            }

        }
    }

    if ((bio.value === "" || (/^[a-z_' ]*$/.test(bio.value) == false) || bio.value.length < 8)) {
        helperText7.innerText = "bio must be contain only lowercase letters, underscores, hyphens and be 8-50 characters"
        error.bio = true
        bio.classList.add("error")
    }
    else {
        helperText7.innerText = ""
        error.bio = false
        bio.classList.remove("error")
    }

    // console.log(error);
}

function submitData() {
    const dataToSend = {
        name: name.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        phoneNumber: phno.value,
        mybio: bio.value
    }
    const submitbutton = document.getElementById("submitbutton")
    submitbutton.style.backgroundColor = "#5bbc79"
    if (error.name == true || error.lastName == true || error.email == true || error.password == true || error.phno == true || error.bio == true) {
        helperText5.innerText = "*Form Value Can't be empty"
        name.classList.add("error")
        lastName.classList.add("error")
        email.classList.add("error")
        password.classList.add("error")
        phno.classList.add("error")
        bio.classList.add("error")




    } else {

        helperText5.innerText = "Thank You !"
        console.log("submitbutton click");
        console.log(dataToSend);
    }
}