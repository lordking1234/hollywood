
d3.csv('data1.csv').then(function(datapoints){

  const newss = datapoints.reduce((t,i)=>{
  return {...t,
    years:[...t.years,i.year] ,
    lifetime_gross:[...t.lifetime_gross,i.lifetime_grosss] ,
  }

},{years:[],lifetime_gross:[]})
  
  
        var chart000 = {
          series: [{
          name: 'Transactions',
          type: 'area',
          data: [1,2]//newss.lifetime_gross
        }],
          chart: {
          height: 350,
          type: 'line',
          stacked: false,
        },
        stroke: {
          width: [0, 2, 5],
          curve: 'smooth'
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        },
        
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: newss.years,
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          title: {
            text: 'Trxs',
          },
          min: 0
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " Trxs";
              }
              return y;
        
            }
          }
        }
        };

        var chart = new ApexCharts(document.getElementById("chart000"), chart000);
        chart.render();
  
})
