<html>
<head>
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <script type="text/javascript">
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses','punto'],
        [2004,  1000,      400, null],
        [2005,  1170,      460,null],
        [2006,  660,       1120, null],
        [2007,  1030,      540, null],
        [2006,null,null,825]
      ]);

      var options = {
        title: 'Company Performance',
        curveType: 'function',
        legend: { position: 'bottom' },
        vAxis: {
      title: 'Population (millions)',
      scaleType: 'log',
      ticks: [2004, 2005, 2006, 2007]
    },
        // pointSize: 30,
          series: {
                2: { pointShape: 'circle',pointSize:10,colors: '#795548' }
            }
      };

      var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

      chart.draw(data, options);
    }
  </script>
</head>
<body>
  <div id="curve_chart" style="width: 900px; height: 500px"></div>
</body>
</html>
