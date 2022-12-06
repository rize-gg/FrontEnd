document.getElementById('trapezoidParent').addEventListener("click", function(e){
    const email = document.getElementById('email');
    fetch('waitlist.php/?email='+email.value, {
        method: 'GET'
    })
    email.value = '';
    alert("Thank you. We will send you the notification ASAP!")
})
