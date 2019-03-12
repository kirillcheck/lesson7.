window.addEventListener('load', function () {

    let h1 = document.querySelector('h1');

    function getTimer() {
        let time = new Date(),
            Hours = time.getHours(),
            Minutes = time.getMinutes(),
            Seconds = time.getSeconds();
        if (Hours < 10) {
            Hours = '0' + Hours;
        }
        if (Seconds < 10) {
            Seconds = '0' + Seconds;
        }
        if (Minutes < 10) {
            Minutes = '0' + Seconds;
        }

        h1.textContent = Hours + ':' + Minutes + ':' + Seconds;
        setTimeout(getTimer, 1000);
        console.log(Hours);
    }
    getTimer();

});





// let timerId =   setTimeout(sayHello, 3000);
// clearTimeout(timerId);

// let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId);



// function sayHello() {
//     console.log(' hello world! ');
// }

// let timerId = setTimeout(function log(){
//     console.log('hello');
//     setTimeout(log, 2000);
// } );