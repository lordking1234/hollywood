
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
          data: newss.lifetime_gross
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







d3.csv('data2.csv').then(function(datapoints){

  let selectedProps = data.reduce((acc, curr) => {
    let { count:value,studio:name } = curr;
    return [...acc, { value,name }];
  }, []);
  
  
        var chart00 = {
 title: {
    text: '',
    subtext: '',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '',
      type: 'pie',      
      label: {  show: true
      },

      color: [
        '#fb7293',
        '#ca6666',
       '#d37f7f',
       '#db9999',
       '#e4b2b2',
        '#FFDB5C',
        '#ff9f7f',
        '#fb7293'],
      radius: ['50%','10'],
      data: selectedProps,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
      };

        var chart = new ApexCharts(document.getElementById("chart00"), chart00);
        chart.render();
  
})
