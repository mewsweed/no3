var jwt = localStorage.getItem('jwt')
if (jwt == null){
    window.location.href = "/auth/login.html"
}else{
    decodeJWT(jwt)
}
function decodeJWT(jwt) {
    fetch('http://localhost:3000/jwtdecode',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ jwt: jwt })
    })
    .then(response => response.json())
    .then(data => {
        if (data) {
            console.log(data)
            if (data.decoded.role != 'admin') {
                alert("เฉพาะแอดมินเท่านั้น");
                window.location.href = "/index.html";
            } else {

            }
        } else {
            console.error("ไม่สามารถ decode JWT หรือข้อมูลที่ได้รับไม่ถูกต้อง");
        }
    })
    .catch(error => {
        console.error("มีข้อผิดพลาดในการส่งคำขอ:", error);
    });
}
function logout() {
    localStorage.removeItem('jwt')
    window.location.href = '/'
}


document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll(".nav-link");
    links.forEach(function(link) {
      link.addEventListener("click", function() {
        links.forEach(function(innerLink) {
          innerLink.classList.remove("active"); // ลบคลาส active ที่อยู่ในทุกๆ ลิงก์
        });
        this.classList.add("active"); // เพิ่มคลาส active ให้กับลิงก์ที่ถูกคลิก
      });
    });
  });
  