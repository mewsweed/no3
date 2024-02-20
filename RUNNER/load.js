var jwt = localStorage.getItem('jwt');

function loadUser() {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ jwt: jwt })
    };

    fetch('http://localhost:3000/auth/user', requestOptions)
        .then(response => response.json())
        .then(data => {
            // ทำอะไรกับข้อมูลที่ได้รับเมื่อเรียก API สำเร็จ
            console.log(data);
        })
        .catch(error => {
            // จัดการข้อผิดพลาดที่เกิดขึ้นในการเรียก API
            console.error('เกิดข้อผิดพลาด:', error);
        });
}

loadUser();
