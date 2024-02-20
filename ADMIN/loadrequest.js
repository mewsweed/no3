
function loadRequestTable() {
    fetch("http://localhost:3000/load/request")
    .then(response => {
        if (!response.ok) { 
            throw new Error('Network response was not ok')
        }
        return response.json();
    })
    .then(data => {
        var trHTML = ''
        let count = 0
        for ( let object of data){ count ++
            trHTML += '<tr>'
            trHTML += '<td>' + count + '</td>'
            trHTML += '<td>' + object.event.title + '</td>'
            trHTML += '<td>' + object.eventLocation.address + '</td>'
            trHTML += '<td>' + object.event.day+ '/' + object.event.month + '/' + object.event.year + '</td>'
            trHTML += '<td>' + object.event.hour+ ' : ' + object.event.min + '</td>'
            trHTML += '<td>' + object.owner + '</td>'
            trHTML += '<td>'
            trHTML += '<button class="btn btn-primary btn-sm" onclick="acceptReq('+ object._id +')">ยอมรับ</button>'
            trHTML += '<button class="btn btn-danger btn-sm" onclick="rejectReq('+ object._id +')">ปฏิเสธ</button>'
            trHTML += '</td>'
            trHTML += '</tr>'
        }
        document.getElementById('requestTable').innerHTML = trHTML
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}
loadRequestTable()

function acceptReq(id) {
    const _id = id
    // เรียกใช้ fetch เพื่อส่ง HTTP GET request ไปยัง API endpoint
    console.log(_id)
    console.log('งงงง')
    // console.log(id)
}

function rejectReq(id) {

}