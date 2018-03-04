if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js');

window.addEventListener('load', function (event) {
    calc();
});

window.addEventListener('resize', function (event) {
    calc();
});

function calc() {
    var dateFrom = new Date(2018, 2, 1);
    var dateUntil = new Date(2018, 3, 20);
    var date = new Date();

    var timeLabel = document.getElementById('time');
    var progressLine = document.getElementById('progress-line');
    var timeLine = document.getElementById('time-line');

    var fullDistance = dateUntil - dateFrom;

    var piece = dateUntil - date;

    var progress = piece/fullDistance;

    progressLine.style.width = timeLine.clientWidth * progress + 'px';

    var remaining = Math.ceil(piece /(1000*60*60*24));

    timeLabel.innerHTML = (remaining);

    // console.dir({
    //     'dateFrom': dateFrom,
    //     'dateUntil': dateUntil,
    //     'date': date,
    //     'fullDistance': fullDistance,
    //     'piece': piece,
    //     'progress': progress,
    //     'progressLine.width': progressLine.style.width,
    //     'timeline.width': timeLine.clientWidth
    // });
    // console.dir(timeLine);
}
