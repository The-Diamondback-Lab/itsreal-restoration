var gfxPath = 'https://s3.amazonaws.com/wapopartners.com/dbknews-wp/wp-content/uploads/2017/05/09214511/WhiteBackground.png';

Highcharts.setOptions({
  lang: {
    thousandsSep: ','
  }
});

var pieChart = new Highcharts.Chart({
  chart: {
    type: 'pie',
    events: {
      load: function () {
        var p = this.series[0].points[2];
        this.tooltip.refresh(p)
      }
    },
    renderTo: 'piechart',
    spacingBottom: 50,
    spacingTop: 50,
    spacingLeft: 50,
    spacingRight: 50,
    backgroundColor: 'transparent'
  },
  title: {
    text: 'out of 1,000 instances of rape...',
    style: {
      fontFamily: 'Playfair Display SC',
      color: 'white'
    },
    align: 'left'
  },
  credits: {
    text: 'Source: RAINN',
    style: {
      fontFamily: 'Open Sans',
      fontStyle: 'italic',
      color: 'black',
      textOutline: '0px contrast'
    }
  },
  legend: {
    enabled: false
  },
  tooltip: {
    backgroundColor: {
      pattern: gfxPath,
      width: 500,
      height: 350
    },
    headerFormat: '',
    pointFormat: '<b>{point.y}</b> {point.name}',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 0,
    style: {
      color: 'black',
      fontFamily: 'Playfair Display SC',
      fontSize: '10pt'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false
      }
    }
  },
  series: [{
    name: 'Outomces',
    colorByPoint: true,
    data: [{
      name: 'are not referred to a prosecutor',
      y: 987,
      color: {
        pattern: gfxPath,
        width: 500,
        height: 350
      }
    }, {
      name: 'are referred to a prosecutor <br/>but do not lead to a felony conviction',
      y: 6,
      color: '#e77d8d'
    }, {
      name: 'lead to a felony conviction',
      y: 7,
      color: '#e51937',
      sliced: true,
      selected: true
    }]
  }]
});

var barChart = new Highcharts.Chart({
  chart: {
    type: 'bar',
    renderTo: 'barchart',
    spacingBottom: 50,
    spacingTop: 50,
    spacingLeft: 50,
    spacingRight: 50,
    backgroundColor: 'transparent'
  },
  title: {
    text: 'sexual misconduct at big ten universities',
    style: {
      fontFamily: 'Playfair Display SC',
      color: 'white'
    },
    align: 'left'
  },
  credits: {
    text: 'Source: U.S. Department of Education',
    style: {
      fontFamily: 'Open Sans',
      fontStyle: 'italic',
      color: 'black',
      textOutline: '0px contrast'
    }
  },
  xAxis: {
    categories: ['maryland', 'indiana', 'michigan state', 'northwestern', 'ohio state', 'penn state', 'purdue', 'rutgers', 'illinois', 'iowa', 'michigan', 'minnesota', 'nebraska', 'wisconsin'],
    lineColor: 'white',
    lineWidth: 2,
    offset: 5,
    tickLength: 0,
    labels: {
      style: {
        fontFamily: 'Playfair Display SC',
        color: 'white'
      },
      step: 1
    },
    title: {
      style: {
        fontFamily: 'Playfair Display SC',
        color: 'white'
      }
    }
  },
  yAxis: {
    gridLineWidth: 0,
    labels: {
      style: {
        fontFamily: 'Playfair Display SC',
        color: 'white'
      }
    },
    title: {
      enabled: false
    }
  },
  legend: {
    enabled: false
  },
  tooltip: {
    backgroundColor: {
      pattern: gfxPath,
      width: 500,
      height: 350
    },
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 0,
    style: {
      color: 'black',
      fontFamily: 'Playfair Display SC',
      fontSize: '10pt'
    },
    valueSuffix: ' reports per 1,000 students'
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      borderWidth: 0,
      crisp: false,
      dataLabels: {
        enabled: false,
        inside: true,
        align: 'right',
        style: {
          fontFamily: 'Playfair Display SC',
          color: 'black',
          textOutline: '0px contrast'
        }
      }
    }
  },
  series: [{
    name: 'stalking',
    data: [0.37, 0.58, 0.4, 0.69, 0.26, 0.42, 0.22, 0.02, 0.59, 1.72, 0.55, 0.24, 0.32, 0.26],
    color: '#fae6e9'
  }, {
    name: 'dating violence',
    data: [0.13, 0.25, 0.42, 0.23, 0.36, 0.23, 0.3, 0, 0, 2.76, 0.69, 0.1, 0.08, 0.21],
    color: '#eeb2bb'
  }, {
    name: 'domestic violence',
    data: [0.05, 0.14, 0.16, 0.14, 0.14, 0.04, 0.12, 2.39, 0.44, 1.26, 0.18, 0.12, 0.12, 0.14],
    color: '#e77d8d'
  }, {
    name: 'fondling',
    data: [0.37, 0.33, 0.12, 0.09, 0.26, 0.23, 0.22, 0.3, 0.02, 3.6, 0.44, 0.3, 0.16, 0.26],
    color: '#e64960'
  }, {
    name: 'rape',
    data: [0.39, 0.8, 0.36, 0.42, 0.51, 1.08, 0.72, 0.63, 0.33, 0.68, 0.48, 0.16, 0.4, 0.26],
    color: '#e51937'
  }]
});
