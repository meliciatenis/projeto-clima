var d = new Date();
var n = d.getHours(); 
var body = document.getElementsByTagName('body')[0];
var ctx = document.getElementsByClassName('line-charts');
CambioDeEstilo(n);

function CambioDeEstilo(n){
    if (n >= 18 || n < 6) {
        body.classList.remove('app-light');
        body.classList.add('app-dark');
    }
}

var config = {
    type: 'line',
    data: {
        xLabels: ['6pm', '9pm','12pm','3am','6am'],
        yLabels: ['17','18','19','20','24'],
        datasets: [{
            label: 'Climita hoy',
            data:['24','17','20','19','18','14'],
            fill: false,
            backgroundColor: "#e4e0d7",
            borderColor:'#c5ddd0',
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                }
            }],
            yAxes: [{
                type: 'category',
                position: 'left',
                display: true,
                scaleLabel: {
                    display: true,
                },
                ticks: {
                    reverse: true
                }
            }]
        }
    }
};

var chartGraph = new Chart(ctx, config);
