function updateDate() {
    let now = new Date();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    let day = days[now.getDay()]; 
    let date = now.getDate();
    let month = months[now.getMonth()]; 
    let year = now.getFullYear();

    let formattedDate = `${day}, ${date} ${month}, ${year}`;
    document.getElementById("date").innerText = formattedDate;
}

updateDate();


