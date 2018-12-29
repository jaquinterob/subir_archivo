<html>
<head>
    <script type="text/javascript" src="https://www.google.com/jsapi?autoload={'modules':[{'name':'visualization','version':'1.1','packages':['corechart']}]}"></script>
</head>
<body>
    <div id="piechart" style="width: 900px; height: 500px;"></div>

    <script>
              google.setOnLoadCallback(drawChart);
  function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ]);

    var options = {
      title: 'My Daily Activities',
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);

    var counter = 0;

    var handler = setInterval(function(){
        counter = counter + 0.1
        options = {
          title: 'My Daily Activities',
          slices: { 1: {offset: counter},
                    3: {offset: counter},
                    5: {offset: counter},
          }
        };
        chart.draw(data, options);

        if (counter > 0.3) clearInterval(handler);
    }, 1000);
  }
    </script>
</body>
