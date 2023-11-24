import themeConfig from '@themeConfig'

const $themeColors = themeConfig.themes.light

// colors
const chartColors = {
  primaryColorShade: '#836AF9',
  yellowColor: '#ffe800',
  successColorShade: '#28dac6',
  warningColorShade: '#ffe802',
  warningLightColor: '#FDAC34',
  infoColorShade: '#299AFF',
  greyColor: '#4F5D70',
  blueColor: '#2c9aff',
  blueLightColor: '#84D0FF',
  greyLightColor: '#EDF1F4',
  tooltipShadow: 'rgba(0, 0, 0, 0.25)',
  lineChartPrimary: '#666ee8',
  lineChartDanger: '#ff4961',
  labelColor: '#6e6b7b',
  grid_line_color: 'rgba(200, 200, 200, 0.2)',
}

export default {
  DeptChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'top',
        align: 'start',
        display: true,
        labels: {
          usePointStyle: true,
          padding: 15,
          boxWidth: 8,
        },
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            scaleLabel: {
              display: true,
            },
            ticks: {
              fontColor: chartColors.labelColor,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              stepSize: 0.02,
              min: 0.04,
              max: 0.16,
              fontColor: chartColors.labelColor,
            },
            scaleLabel: {
              display: true,
            },
          },
        ],
      },
    },
    data: {
      labels: ['2015', '2015', '2017', '2018'],
      datasets: [
        {
          label: 'Dept Ratio Graph(%)',
          data: [0.08, 0.15, 0.13, 0.05],
          lineTension: 0,
          backgroundColor: chartColors.blueColor,
          pointStyle: 'circle',
          borderColor: 'transparent',
          pointRadius: 0.5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: chartColors.blueColor,
        },
      ],
    },
  },
  EquityChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'top',
        align: 'start',
        display: true,
        labels: {
          usePointStyle: true,
          padding: 15,
          boxWidth: 8,
        },
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            scaleLabel: {
              display: true,
            },
            ticks: {
              fontColor: chartColors.labelColor,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              stepSize: 1.1,
              min: 1,
              max: 1.5,
              fontColor: chartColors.labelColor,
            },
            scaleLabel: {
              display: true,
            },
          },
        ],
      },
    },
    data: {
      labels: ['2015', '2015', '2017', '2018'],
      datasets: [
        {
          label: 'Dept to Equity Graph(%)',
          data: [1.5, 1.05, 1, 1],
          lineTension: 0,
          backgroundColor: chartColors.greyColor,
          pointStyle: 'circle',
          borderColor: 'transparent',
          pointRadius: 0.5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: chartColors.greyColor,
        },
      ],
    },
  },

  FinancialChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'top',
        align: 'start',
        display: true,
        labels: {
          usePointStyle: true,
          padding: 15,
          boxWidth: 8,
        },
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            scaleLabel: {
              display: true,
            },
            ticks: {
              fontColor: chartColors.labelColor,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              stepSize: 5,
              min: 5,
              max: 20,
              fontColor: chartColors.labelColor,
            },
            scaleLabel: {
              display: true,
            },
          },
        ],
      },
    },
    data: {
      labels: ['2015', '2015', '2017', '2018'],
      datasets: [
        {
          label: 'Financial Coverage  Graph(%)',
          data: [18, 6.7, 8, 19.2],
          lineTension: 0,
          backgroundColor: chartColors.successColorShade,
          pointStyle: 'circle',
          borderColor: 'transparent',
          pointRadius: 0.5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: chartColors.successColorShade,
        },
      ],
    },
  },

  InterestChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'top',
        align: 'start',
        display: true,
        labels: {
          usePointStyle: true,
          padding: 15,
          boxWidth: 8,
        },
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            scaleLabel: {
              display: true,
            },
            ticks: {
              fontColor: chartColors.labelColor,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              stepSize: 20,
              min: 0,
              max: 80,
              fontColor: chartColors.labelColor,
            },
            scaleLabel: {
              display: true,
            },
          },
        ],
      },
    },
    data: {
      labels: ['2015', '2015', '2017', '2018'],
      datasets: [
        {
          label: 'Interest Cover Graph(%)',
          data: [0.04, 60.64, 25.83, 0.9],
          lineTension: 0,
          backgroundColor: chartColors.infoColorShade,
          pointStyle: 'circle',
          borderColor: 'transparent',
          pointRadius: 0.5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: chartColors.infoColorShade,
        },
      ],
    },
  },

  BurdenChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'top',
        align: 'start',
        display: true,
        labels: {
          usePointStyle: true,
          padding: 15,
          boxWidth: 8,
        },
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            scaleLabel: {
              display: true,
            },
            ticks: {
              fontColor: chartColors.labelColor,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              stepSize: 5,
              min: -10,
              max: 5,
              fontColor: chartColors.labelColor,
            },
            scaleLabel: {
              display: true,
            },
          },
        ],
      },
    },
    data: {
      labels: ['2015', '2015', '2017', '2018'],
      datasets: [
        {
          label: 'Interest Burden Graph(%)',
          data: [0.04, 0, -0.277, -9.23],
          lineTension: 0,
          backgroundColor: chartColors.warningColorShade,
          pointStyle: 'circle',
          borderColor: 'transparent',
          pointRadius: 0.5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: chartColors.warningColorShade,
        },
      ],
    },
  },

  AverageChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'top',
        align: 'start',
        display: true,
        labels: {
          usePointStyle: true,
          padding: 15,
          boxWidth: 8,
        },
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            scaleLabel: {
              display: true,
            },
            ticks: {
              fontColor: chartColors.labelColor,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              stepSize: 1,
              min: 1,
              max: 7,
              fontColor: chartColors.labelColor,
            },
            scaleLabel: {
              display: true,
            },
          },
        ],
      },
    },
    data: {
      labels: ['2015', '2015', '2017', '2018'],
      datasets: [
        {
          label: 'Average Coverage Ratio Graph(%)',
          data: [2, 1.78, 3, 6.2],
          lineTension: 0,
          backgroundColor: chartColors.blueLightColor,
          pointStyle: 'circle',
          borderColor: 'transparent',
          pointRadius: 0.5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: chartColors.blueLightColor,
        },
      ],
    },
  },

  CashflowChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'top',
        align: 'start',
        display: true,
        labels: {
          usePointStyle: true,
          padding: 15,
          boxWidth: 8,
        },
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            scaleLabel: {
              display: true,
            },
            ticks: {
              fontColor: chartColors.labelColor,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              stepSize: 50,
              min: 0,
              max: 150,
              fontColor: chartColors.labelColor,
            },
            scaleLabel: {
              display: true,
            },
          },
        ],
      },
    },
    data: {
      labels: ['2015', '2015', '2017', '2018'],
      datasets: [
        {
          label: 'Cashflow Coverage Ratio Graph(%)',
          data: [2.67, 63.36, 147.33, 81.2],
          lineTension: 0,
          backgroundColor: chartColors.blueColor,
          pointStyle: 'circle',
          borderColor: 'transparent',
          pointRadius: 0.5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: chartColors.blueColor,
        },
      ],
    },
  },
}
