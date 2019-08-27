/*
    Plot two arrays of data using Chart.js library
*/
const plotData = function (data1, data2, label = null) {

    let config = {
        type: 'line',
        data: {
            labels: label,
            datasets: [{
                label: 'Predicted',
                fill: false,
                backgroundColor: '#F43A3C',
                borderColor: '#F43A3C',
                data: data2,
            }, {
                label: 'Actual',
                backgroundColor: '#F97D09',
                borderColor: '#F97D09',
                data: data1,
                fill: false,
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Stock Price Prediction'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Date'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Stock Value'
                    }
                }]
            }
        }
    };

    let ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);
};
