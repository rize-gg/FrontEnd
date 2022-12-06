document.getElementById('trapezoidParent').addEventListener("click", function(e){
    saveEmail()
})
document.getElementById('email').addEventListener("keypress", function(e){
    if (e.key === 'Enter') {
        saveEmail()
    }
})

function saveEmail() {
    const email = document.getElementById('email');
    const mailFormat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (email.value !== '' && email.value.match(mailFormat)) {
        fetch('waitlist.php/?email='+email.value, {
            method: 'GET'
        })
        email.value = '';
        alert("Thank you. We will send you the notification ASAP!")
    } else {
        alert("Please provide valid email address.")
    }
}
