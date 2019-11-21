var lineChartData = {
    labels: ['0','5', '10','15', '20','25', '30','35','40','45', '50','55', '60','65','70','75','80','85','90','95','100'],
    datasets: [{
        label: 'My First dataset',
        borderColor: window.chartColors.red,
        backgroundColor: window.chartColors.red,
        fill: false,
        data: [6000,6000,6000, 6000, 6000,6000,5400,4800,4200,3600,3000,2400,1800,1200,600,0,0,0,0,0,0],

        yAxisID: 'y-axis-1',
    }, {
        label: 'My Second dataset',
        borderColor: window.chartColors.blue,
        backgroundColor: window.chartColors.blue,
        fill: false,
        data: [0, 0, 0, 0,0,0,600,1200,1800,2400,3000,3600,4200,4800,5400,6000,6000,6000,6000,6000,6000],
        yAxisID: 'y-axis-2'
    }]
};

document.getElementById('hitungTotal').addEventListener('click', function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = Chart.Line(ctx, {
        data: lineChartData,
        options: {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: 'Chart.js Line Chart - Multi Axis'
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        }
    });
});