document.getElementById('trapezoidParent').addEventListener("click", function(e){
    const email = document.getElementById('email');
    fetch('https://api.getwaitlist.com/api/v1/waiter', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "first_name":"A", "last_name":"I", "email": email.value, "api_key": "0RN8X1" })
    })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
})
