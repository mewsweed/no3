// var jwt = localStorage.getItem('jwt')
// if (jwt != null){
//     window.location.href = "/"
// }
document.getElementById("viewLoginBtn").addEventListener("click", function() {
  window.location.href = "/auth/login.html";
});

function register() {
  const email = document.getElementById("email").value
  const username = document.getElementById("username").value
  const password = document.getElementById("password").value
  const password2 = document.getElementById("password2").value

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST","http://localhost:3000/auth/regis")
  xhttp.setRequestHeader("Content-Type","application/json;charset=UFT-8")
  xhttp.send(JSON.stringify({
    "username":username,
    "password":password,
    "password2":password2,
    "email":email,
    "role": "runner"
  }));
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4) {
        const objects = JSON.parse(this.responseText);
        console.log(objects)
        if (objects['status'] == 'ok'){
        // localStorage.setItem("jwt",objects['token'])
        Swal.fire({
            title: objects['message'],
            icon: 'success'

          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              window.location.href = "/auth/login.html"
            } 
            // else if (result.isDenied) {
            //   Swal.fire("Changes are not saved", "", "info");
            // }
          });
    } else {
        Swal.fire({
            title: objects['status'],
            text: objects['message'],
            icon: "question"
          });
    }
    }
}
return false
}
function registeror() {
  const username = document.getElementById("username").value
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  const password2 = document.getElementById("password2").value

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST","http://localhost:3000/registeror")
  xhttp.setRequestHeader("Content-Type","application/json;charset=UFT-8")
  xhttp.send(JSON.stringify({
      "username":username,
      "password":password,
      "password2":password2,
      "email":email
  }));
  xhttp.onreadystatechange = function() {
      if(this.readyState == 4) {
          const objects = JSON.parse(this.responseText);
          console.log(objects)
          if (objects['status'] == 'ok'){
          // localStorage.setItem("jwt",objects['token'])
          Swal.fire({
              title: objects['message'],
              icon: 'success'

            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                window.location.href = "/auth/login.html"
              } 
              // else if (result.isDenied) {
              //   Swal.fire("Changes are not saved", "", "info");
              // }
            });
      } else {
          Swal.fire({
              title: objects['status'],
              text: objects['message'],
              icon: "question"
            });
      }
      }
  }
  return false
}