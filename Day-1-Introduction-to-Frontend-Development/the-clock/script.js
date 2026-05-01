document.addEventListener('DOMContentLoaded', function(){
    setTime();
    setInterval(() => {
        setTime();
    }, 1000);
})

function setTime (){
    let date = new Date();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Webnesday', 'Thrusday', 'Friday', 'Saturday'];
    document.getElementById('day').innerText = days[date.getDay()];
    let dispHour = date.getHours() > 12 ? (date.getHours() - 12) : date.getHours(); 
    let hour = dispHour < 10 ? '0'+dispHour:dispHour;
    if(hour == 0){
        hour = 12;
    }
    let seconds = date.getSeconds() < 10 ? '0'+date.getSeconds():date.getSeconds();
    let minutes = date.getMinutes() < 10 ? '0'+date.getMinutes():date.getMinutes();
    document.getElementById('hour').innerText = hour;
    document.getElementById('seconds').innerText = seconds;
    document.getElementById('minutes').innerText = minutes;
    let am_pm = 'AM';
    if(date.getHours() >= 12){
        am_pm = 'PM'
    }    
    document.getElementById('am_pm').innerText = am_pm;
    let day = date.getDate() < 10 ? '0'+date.getDate():date.getDate();
    let month = date.getMonth() < 9 ? '0'+(date.getMonth()+1):(date.getMonth()+1);
    let year = date.getFullYear();
    document.getElementById('date').innerText = `${day}/${month}/${year}`;
}