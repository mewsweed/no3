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
        body: JSON.stringify({ token: jwt })
    })
    .then(response => response.json())
    .then(data => {
        if (data) {
            console.log(data)
            if (data.decoded.role != 'runner') {
                alert("เฉพาะนักวิ่งเท่านั้น");
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