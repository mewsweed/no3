function loadUserTable() {
    fetch("http://localhost:3000/load/users")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            var trHTML = '';
            let count = 0
            for (let object of data) { count ++
                trHTML += '<tr>';
                trHTML += '<td>' + count + '</td>';
                trHTML += '<td>' + object['role'] +'</td>';
                trHTML += '<td>' + object['email'] + '</td>';
                trHTML += '<td>' + object['userInfo'][0]['fname'] + '</td>';
                trHTML += '<td>' + object['userInfo'][0]['phone'] + '</td>';
                // trHTML += '<td>' + object['email'] + '</td>';
                // trHTML += '<td><button type="button" onClick="showUserEditBox(' + object['id'] + ')" class="btn btn-outline-warning">Edit</button>';
                // trHTML += '<button type="button" onClick="userDelete(' + object['id'] + ')" class="btn btn-outline-danger">Del</button></td>';
                trHTML += '</tr>';
            }
            document.getElementById("usersTable").innerHTML = trHTML;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}
loadUserTable();