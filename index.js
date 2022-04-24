// Add your code here

function submitData(nname, eemail) {
    const pushData = {
        name: nname,
        email: eemail
    };

    const configObject = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify(pushData)
    };

    return fetch("http://localhost:3000/users", configObject)
    .then((response) => response.json())
    .then((object) => {
        document.body.innerHTML = object['id']
    })
    .catch((error) => {
        document.body.innerHTML = error.message
    })
}

submitData()