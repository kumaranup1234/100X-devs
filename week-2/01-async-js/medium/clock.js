function print12() {
    setInterval(function () {
        let dateObj = new Date();
        let sec = dateObj.getSeconds();
        let minute = dateObj.getMinutes();
        let hours = dateObj.getHours();
        let ampm;
        if(hours > 12){
            ampm = "PM"
        }else{
            ampm = "AM"
        }

        // Add leading zeros if needed
        sec = sec < 10 ? "0" + sec : sec;
        minute = minute < 10 ? "0" + minute : minute;
        hours = hours < 10 ? "0" + hours : hours;


        // changing the 24 hour to 12-hour format
        hours = hours % 12;
        // if it is 0 in 24-hour format
        if(hours === 0){
            hours = 12;
        }
        console.log(hours + ":" + minute + ":" + sec + " " + ampm);
    }, 1000);
}

print12();
