document.getElementById("viewRegistersBtn").addEventListener("click", function() {
    window.location.href = "/auth/register.html";
  });

  
function login() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
  
    fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    })
    .then(response => response.json())
    .then(objects => {
        console.log(objects);
        if (objects.status === 'ok') {
            localStorage.setItem("jwt", objects.token);
            Swal.fire({
                title: objects.message,
                icon: 'success'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Swal.fire("Saved!", "", "success");
                    if(objects.role === 'runner'){
                    window.location.href = "/runner";     
                    }
                    if(objects.role === 'organizer'){
                        window.location.href = "/organizer";     
                    }
                    if(objects.role === 'admin'){
                        window.location.href = "/admin";     
                    }
                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });
        } else {
            Swal.fire({
                title: objects.status,
                text: objects.message,
                icon: "question"
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
        Swal.fire({
            title: 'Error',
            text: 'An error occurred while processing your request.',
            icon: 'error'
        });
    });
  
    return false;
  }