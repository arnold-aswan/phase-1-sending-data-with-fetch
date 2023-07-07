// Add your code here
const submitData = function(userName, userEmail){
    fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            name: userName, 
            email: userEmail,
        }),
    }).then(response => response.json())
    .then(data => { 
        // console.log(data)
       const body = document.querySelector('body')
       body.textContent = data.id
    }).catch(error => {
        const p =   document.createElement("p")
        const body = document.querySelector("body")
        p.innerHTML = `Unauthorized Access`
        console.log(p);
        body.appendChild(p)
    //  p.append(error.message)
    })
    // .catch((error) => {
    //     const body = document.querySelector('body')
    //     body.textContent = `Unauthorized Access`
    //   return body.textContent = error.message
    // })
}

submitData("john","john@mail.com")

