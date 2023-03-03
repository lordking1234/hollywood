
var year = [1921, 1926, 1927, 1931, 1936, 1937, 1939, 1940, 1941, 1942, 1945, 1946, 1947, 1949, 1950, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];

var lifetime_gross = [9183673, 814000, 1236166, 19181, 163577, 184925486, 225767809, 84658691, 94355616, 106355561, 21333333, 44058163, 298718, 989284, 93504257, 37826108, 147154651, 63791141, 93802289, 108409976, 27952045, 10410690, 126022622, 74827595, 188935506, 48173637, 120353160, 283397878, 334605107, 28000000, 402020165, 204417142, 243770770, 457667321, 210488088, 345508646, 788577798, 800212572, 917118018, 778905259, 1593273462, 1608423495, 1959859045, 2342926318, 2319209053, 2869199774, 2630460790, 3318171169, 2955589430, 3161570670, 3481954580, 3531584222, 4136769258, 4447664581, 4324601041, 4568041331, 5015813459, 5192878886, 5384826930, 5682827464, 6449278183, 6522990977, 7361898553, 7633581622, 8101003393, 9139039608, 9093663094, 9336550989, 8795021205, 9207308325, 9668831993, 9696535464, 10830905503, 10204071276, 10018736054, 10720691570, 10902414738, 10428456848, 11100225784, 11367220813, 11118503524, 11582616840, 6279026747];



  
        var chart000 = {
          series: [{
          name: '',
          type: 'area',
          data: lifetime_gross
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
        labels: year,
        markers: {
          size: 0
        },
        xaxis: {
          type: 'year'
        },
        yaxis: {
          title: {
            text: 'Lifetime Gross',
          },
          min: 0
        },
        annotations: {
          xaxis: [{
            x: 1976 ,
            borderColor: '#999',
            yAxisIndex: 0,
            label: {
              show: true,
              text: 'Jump',
              style: {
                color: "#fff",
                background: '#775DD0'
              }
            }
          }]
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " $";
              }
              return y;
        
            }
          }
        }
        };

        var chart = new ApexCharts(document.getElementById("chart000"), chart000);
        chart.render();
  
//------------------------------------------------------------------------------

        var studio = ["WB", "Uni.", "Fox", "Par.", "BV", "IFC", "Sony", "SPC", "Mira.", "MGM"];
        var count = [817, 712, 628, 603, 580, 462, 421, 405, 393, 381];

        var chart0 = {
          series: [{
            data: count
          }],
            chart: {
            type: 'bar',
            height: 350
          },
          annotations: {
            xaxis: [{
              x: 500,
              borderColor: '#00E396',
              label: {
                borderColor: '#00E396',
                style: {
                  color: '#fff',
                  background: '#00E396',
                },
                text: 'Under 500',
              }
            }],
            yaxis: [{
              y: '',
              y2: '',
              label: {
                text: ''
              }
            }]
          },
          plotOptions: {
            bar: {
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: true
          },
          xaxis: {
            categories:studio,
          },
          grid: {
            xaxis: {
              lines: {
                show: true
              }
            }
          },
          yaxis: {
            reversed: true,
            axisTicks: {
              show: true
            }
          }
          };

        var chart = new ApexCharts(document.getElementById("chart0"), chart0);
        chart.render();


//------------------------------------------------------------------------------------------
        
const studio1 = ["BV", "WB", "Uni", "Fox", "Par", "Sony", "NL", "MGM", "LGF", "Col"];
const count1 = [44.38, 39.22, 35.44, 33.45, 28.61, 22, 7.3, 6.7, 5.77, 5.69];

var chart00 = {
  series: [{
    data: count1
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  annotations: {
    xaxis: [{
      x: 10,
      borderColor: '#00E396',
      label: {
        borderColor: '#00E396',
        style: {
          color: '#fff',
          background: '#00E396',
        },
        text: 'Under 10',
      }
    }],
    yaxis: [{
      y: '',
      y2: '',
      label: {
        text: ''
      }
    }]
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  dataLabels: {
    enabled: true
  },
  xaxis: {
    categories:studio1,
  },
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    }
  },
  yaxis: {
    reversed: true,
    axisTicks: {
      show: true
    }
  }
  };

var chart = new ApexCharts(document.getElementById("chart00"), chart00);
chart.render();



//----------------------------------------------------------------------------------


yearArray = [1921, 1926, 1927, 1931, 1936, 1937, 1939, 1940, 1941, 1942, 1945, 1946, 1947, 1949, 1950, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];

studioArray = [1, 1, 1, 1, 1, 1, 2, 2, 3, 2, 1, 2, 1, 2, 3, 2, 3, 3, 2, 5, 2, 3, 2, 4, 2, 3, 5, 4, 3, 1, 5, 7, 7, 7, 6, 5, 9, 8, 9, 7, 8, 10, 12, 14, 12, 16, 22, 22, 30, 32, 37, 39, 50, 37, 42, 39, 44, 42, 45, 53, 53, 58, 62, 76, 90, 109, 130, 141, 125, 144, 145, 139, 109, 136, 136, 142, 158, 153, 151, 157, 141, 150, 115];


  
        var chart11 = {
          series: [{
          name: '',
          type: 'area',
          data: studioArray
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
        labels: yearArray,
        markers: {
          size: 0
        },
        xaxis: {
          type: 'year'
        },
        yaxis: {
          title: {
            text: 'Number of Studio',
          },
          min: 0
        },
        annotations: {
          xaxis: [{
            x: 1981 ,
            borderColor: '#999',
            yAxisIndex: 0,
            label: {
              show: true,
              text: 'First Jump',
              style: {
                color: "#fff",
                background: '#775DD0'
              }
            }
          },{
            x: 1994 ,
            borderColor: '#999',
            yAxisIndex: 0,
            label: {
              show: true,
              text: 'Second Jump',
              style: {
                color: "#fff",
                background: '#775DD0'
              }
            }
          }]
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " Studio";
              }
              return y;
        
            }
          }
        }
        };

        var chart = new ApexCharts(document.getElementById("chart11"), chart11);
        chart.render();
  //-----------------------------------------------------------------------------


  Yearr= [1921, 1926, 1927, 1931, 1936, 1937, 1939, 1940, 1941, 1942, 1945, 1946, 1947, 1949, 1950, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]

  IndexArray= [1, 1, 1, 1, 1, 1, 3, 2, 3, 2, 1, 2, 1, 2, 3, 2, 3, 5, 2, 5, 2, 3, 2, 4, 2, 3, 5, 7, 3, 1, 8, 8, 9, 12, 11, 7, 14, 19, 23, 24, 35, 56, 82, 111, 110, 127, 154, 164, 174, 206, 233, 251, 234, 222, 242, 231, 257, 257, 278, 307, 294, 327, 381, 361, 350, 463, 492, 541, 537, 604, 622, 603, 515, 528, 594, 653, 676, 698, 702, 716, 718, 810, 417]

  var chart111 = {
    series: [{
    name: '',
    type: 'area',
    data: IndexArray
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
  labels: Yearr,
  markers: {
    size: 0
  },
  xaxis: {
    type: 'year'
  },
  yaxis: {
    title: {
      text: 'Number of Movie',
    },
    min: 0
  },
  annotations: {
    xaxis: [{
      x: 1977 ,
      borderColor: '#999',
      yAxisIndex: 0,
      label: {
        show: true,
        text: 'First Jump',
        style: {
          color: "#fff",
          background: '#775DD0'
        }
      }
    },{
      x: 2001 ,
      borderColor: '#999',
      yAxisIndex: 0,
      label: {
        show: true,
        text: 'Second Jump',
        style: {
          color: "#fff",
          background: '#708DD0'
        }
      }
    },{
      x: 2010 ,
      borderColor: '#999',
      yAxisIndex: 0,
      label: {
        show: true,
        text: 'Third Jump',
        style: {
          color: "#fff",
          background: '#757DD0'
        }
      }
    }]
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 100]
    }
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " Movie";
        }
        return y;
  
      }
    }
  }
  };

  var chart = new ApexCharts(document.getElementById("chart111"), chart111);
  chart.render();





//-------------------------------------------------------------------------



chart22 = {
  title: {
    text: '',
    subtext: '',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'horizontal',
    left: 'left'
  },
  series: [
    {
      name: '',
      type: 'pie',
      label: {  show: false
      },
      color: [
        '#ccf9ff',
        '#7ce8ff',
       '#55d0ff',
       '#00acdf',
       '#0080bf',
       '#0040bf'],
      radius: ['50%','10'],
      data: [

        { value: 929, name: '0-10' },
        { value: 120, name: '10-50' },
        { value: 31, name: '50-100' },
        { value: 16, name: '100-200' },
        { value: 11, name: '200-500' },
        { value: 5, name: 'more than 500' }
      ],
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

echarts.init(document.getElementById('chart22')).setOption(chart22);



//-------------------------------------------------------------------------


chart222 = {
  title: {
    text: '',
    subtext: '',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'horizontal',
    left: 'left'
  },
  series: [
    {
      name: '',
      type: 'pie',
      label: {  show: false
      },
      color: [
        '#ccf9ff',
        '#7ce8ff',
       '#55d0ff',
       '#00acdf',
       '#0080bf',
       '#0040bf'],
      radius: ['50%','10'],
      data: [

        { value: 141, name: '0-10k' },
        { value: 311, name: '10k-100k' },
        { value: 281, name: '100k-1m' },
        { value: 206, name: '1m-10m' },
        { value: 101, name: '10m-100m' },
        { value: 45, name: '100m-1b' },
        { value: 2, name: 'more than 1b' }

      ],
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

echarts.init(document.getElementById('chart222')).setOption(chart222);








