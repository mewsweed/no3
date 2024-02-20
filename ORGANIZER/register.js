

function regisEvent() {
    const eventTitle = document.getElementById('title').value;
    const eventAbout = document.getElementById('about').value;
    const eventYear = document.getElementById('yearSelect').value;
    const eventMonth = document.getElementById('monthSelect').value;
    const eventDay = document.getElementById('daySelect').value;
    const eventMin = document.getElementById('minuteSelect').value;
    const eventHour = document.getElementById('hourSelect').value;

    const eventAddress = document.getElementById('address').value;
    // const eventCountry = document.getElementById('country').value;
    const eventCity = document.getElementById('city').value;
    const eventDist = document.getElementById('dist').value;
    const eventSubdist = document.getElementById('subdist').value;
    const eventZip = document.getElementById('zip').value;

    const eventDistance = document.getElementById('distance').value;
    const eventCost = document.getElementById('cost').value;

    const eventJoinReward = document.getElementById('joinreward').value;
    const eventFirstPlace = document.getElementById('firstplace').value;
    const eventSecondPlace = document.getElementById('secondplace').value;
    const eventThirdPlace = document.getElementById('thirdplace').value;

    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;
    
    const formData = new FormData();
    formData.append('event[title]', eventTitle);
    formData.append('event[about]', eventAbout);
    formData.append('event[year]', eventYear);
    formData.append('event[month]', eventMonth);
    formData.append('event[day]', eventDay);
    formData.append('event[min]', eventMin);
    formData.append('event[hour]', eventHour);

    formData.append('eventLocation[address]', eventAddress);
    // formData.append('eventLocation[country]', eventCountry);
    formData.append('eventLocation[city]', eventCity);
    formData.append('eventLocation[dist]', eventDist);
    formData.append('eventLocation[subdist]', eventSubdist);
    formData.append('eventLocation[zip]', eventZip);

    formData.append('event[distance]', eventDistance);
    formData.append('event[cost]', eventCost);

    formData.append('eventRewards[join]', eventJoinReward);
    formData.append('eventRewards[1st]', eventFirstPlace);
    formData.append('eventRewards[2nd]', eventSecondPlace);
    formData.append('eventRewards[3rd]', eventThirdPlace);


    // เพิ่มไฟล์ภาพลงใน FormData
    for (let i = 0; i < files.length; i++) {
        formData.append('event[coverimg]', files[i]);
    }
    console.log(formData)
    fetch('http://localhost:3000/event/request', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(object => {
        if(object.status === 'ok'){
            Swal.fire({
                title: object.message,
                icon: 'success'
            })
        }else{
            Swal.fire({
                title: object.status,
                text: object.message,
                icon: "question"
            });
        }
    })
    .catch(error => {
        console.error('Error registering event:', error);
    });
}


const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');

fileInput.addEventListener('change', function() {
  const file = this.files[0]; // เลือกไฟล์แรกที่เลือก

  if (file) {
    const reader = new FileReader();

    reader.addEventListener('load', function() {
      preview.src = reader.result;
      preview.style.display = 'flex';
    });

    reader.readAsDataURL(file);
  } else {
    preview.src = '';
    preview.style.display = 'none';
  }
});

// Function to populate years select element
function populateYears() {
    const yearSelect = document.getElementById('yearSelect');
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year <= currentYear + 19; year++) {
        let option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
}

// Function to populate months select element
function populateMonths() {
    const monthSelect = document.getElementById('monthSelect');
    const months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
    for (let i = 0; i < months.length; i++) {
        let option = document.createElement('option');
        option.value = i + 1;
        option.textContent = months[i];
        monthSelect.appendChild(option);
    }
}

// Function to populate days select element based on selected year and month
function populateDays(year, month) {
    const daySelect = document.getElementById('daySelect');
    daySelect.innerHTML = ''; // Clear previous options
    const daysInMonth = new Date(year, month, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
        let option = document.createElement('option');
        option.value = day;
        option.textContent = day;
        daySelect.appendChild(option);
    }
}

// Function to populate hours select element
function populateHours() {
    const hourSelect = document.getElementById('hourSelect');
    for (let hour = 0; hour < 24; hour++) {
        let option = document.createElement('option');
        option.value = hour;
        option.textContent = hour.toString().padStart(2, '0');
        hourSelect.appendChild(option);
    }
}

// Function to populate minutes select element
function populateMinutes() {
    const minuteSelect = document.getElementById('minuteSelect');
    for (let minute = 0; minute < 60; minute++) {
        let option = document.createElement('option');
        option.value = minute;
        option.textContent = minute.toString().padStart(2, '0');
        minuteSelect.appendChild(option);
    }
}

// Populate select elements
populateYears();
populateMonths();
populateDays(new Date().getFullYear(), new Date().getMonth() + 1); // Current year and month
populateHours();
populateMinutes();

// Event listener for month and year changes
document.getElementById('yearSelect').addEventListener('change', function() {
    const year = parseInt(this.value);
    const month = parseInt(document.getElementById('monthSelect').value);
    populateDays(year, month);
});

document.getElementById('monthSelect').addEventListener('change', function() {
    const year = parseInt(document.getElementById('yearSelect').value);
    const month = parseInt(this.value);
    populateDays(year, month);
});
