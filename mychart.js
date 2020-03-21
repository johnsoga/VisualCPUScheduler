google.charts.load('current', {'packages':['timeline']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var container = document.getElementById('timeline');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();

    dataTable.addColumn({ type: 'string', id: 'Process' });
    dataTable.addColumn({ type: 'number', id: 'Start' });
    dataTable.addColumn({ type: 'number', id: 'End' });
    dataTable.addRows([
        [ 'P1', 0, 2 ],
        [ 'P2', 3, 5 ],
        [ 'P3', 6,  10 ]
    ]);

    chart.draw(dataTable);
}
