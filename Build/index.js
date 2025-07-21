const clocks = document.getElementById('clock');
setInterval(function () {
    let dates = new Date();
    clocks.innerHTML = dates.toLocaleTimeString();
}, 1000);